import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse
import re

def find_car_model_name(slide_element):
    """
    Finds the car model name from a slide element by checking various locations.
    """
    # 1. Check for links to detail pages
    links = slide_element.find_all('a', href=True)
    for link in links:
        href = link.get('href', '')
        match = re.search(r'/detail/([^/\?]+)', href)
        if match:
            model = match.group(1).upper()
            # Clean up the model name
            if model in ['EV2', 'EV3', 'EWIND', 'ELIGHT']:
                return model
    
    # 2. Check onclick handlers
    onclick_elems = slide_element.find_all(attrs={'onclick': True})
    for elem in onclick_elems:
        onclick = elem.get('onclick', '')
        match = re.search(r'/detail/([^/\"]+)', onclick)
        if match:
            model = match.group(1).upper()
            if model in ['EV2', 'EV3', 'EWIND', 'ELIGHT']:
                return model
    
    # 3. Check text content for model names
    text = slide_element.get_text()
    matches = re.findall(r'\b(EV[23]|EWIND|ELIGHT)\b', text, re.IGNORECASE)
    if matches:
        return matches[0].upper()
    
    # 4. Map based on car image number (fallback)
    car_img = slide_element.find('img', src=lambda x: x and 'car' in x.lower() and 'banner' not in x.lower())
    if car_img:
        car_src = car_img.get('src', '')
        # Known mappings from Carousel component
        car_to_model = {
            'home-car-1.png': 'EWIND',
            'home-car-2.png': 'EV2',
            'home-car-3.png': 'EV3',
            'home-car-4.png': 'EV2'
        }
        for car_name, model in car_to_model.items():
            if car_name in car_src:
                return model
    
    return None

def download_banner_images_with_models(url, output_folder="public/images/scraped_cars"):
    """
    Downloads banner images from the landing page and identifies their car model names.
    """
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error accessing the URL {url}: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all slide containers (divs with slide-video class pattern)
    slides = soup.find_all('div', class_=lambda x: x and isinstance(x, list) and any('slide' in c.lower() and 'video' in c.lower() for c in x))
    
    # If no slides found with that pattern, try finding by banner images
    if not slides:
        banner_imgs = soup.find_all('img', src=lambda x: x and 'banner' in x.lower())
        slides = []
        seen_banners = set()
        for banner_img in banner_imgs:
            banner_src = banner_img.get('src')
            if banner_src in seen_banners:
                continue
            seen_banners.add(banner_src)
            # Find parent slide container
            parent = banner_img.find_parent()
            while parent and parent.name != 'body':
                classes = ' '.join(parent.get('class', []))
                if 'slide' in classes.lower():
                    slides.append(parent)
                    break
                parent = parent.find_parent()
    
    downloaded_urls = set()
    banner_count = 0
    banner_model_mappings = []
    
    print(f"Found {len(slides)} banner slides\n")
    
    # Process each slide
    for i, slide in enumerate(slides):
        # Find banner image (prefer desktop version, fallback to mobile)
        banner_imgs = slide.find_all('img', src=lambda x: x and 'banner' in x.lower())
        if not banner_imgs:
            continue
        
        # Prefer desktop banner over mobile
        banner_img = None
        for img in banner_imgs:
            src = img.get('src', '')
            if 'mobile' not in src.lower() and 'm.jpg' not in src.lower():
                banner_img = img
                break
        if not banner_img:
            banner_img = banner_imgs[0]
        
        banner_src = banner_img.get('src')
        if not banner_src or banner_src in downloaded_urls:
            continue
        
        # Find car model name
        model_name = find_car_model_name(slide)
        
        # Resolve full URL
        full_banner_url = urljoin(url, banner_src)
        
        try:
            img_response = requests.get(full_banner_url, headers=headers, timeout=30)
            img_response.raise_for_status()
            
            # Get file extension
            parsed_url = urlparse(full_banner_url)
            path = parsed_url.path
            ext = os.path.splitext(path)[1] or '.jpg'
            
            # Create filename with model name
            # Extract banner number from original filename to handle duplicates
            original_name = os.path.basename(path)
            banner_num_match = re.search(r'banner-?(\d+)', original_name, re.IGNORECASE)
            banner_num = banner_num_match.group(1) if banner_num_match else None
            
            if model_name:
                if banner_num:
                    filename = f"banner-{model_name}-{banner_num}{ext}"
                else:
                    filename = f"banner-{model_name}{ext}"
            else:
                filename = re.sub(r'[^\w\-_\.]', '_', original_name) or f"banner_{banner_count}{ext}"
            
            img_path = os.path.join(output_folder, filename)
            
            # Save image
            with open(img_path, 'wb') as handler:
                handler.write(img_response.content)
            
            print(f"Downloaded: {filename} -> Model: {model_name or 'UNKNOWN'}")
            downloaded_urls.add(banner_src)
            banner_count += 1
            
            banner_model_mappings.append({
                'banner': banner_src,
                'filename': filename,
                'model': model_name
            })
            
        except requests.exceptions.RequestException as e:
            print(f"Error downloading banner {full_banner_url}: {e}")
    
    print(f"\n=== Summary ===")
    print(f"Downloaded {banner_count} banner images")
    print(f"\nBanner to Model Mappings:")
    for mapping in banner_model_mappings:
        print(f"  {mapping['filename']} -> {mapping['model'] or 'UNKNOWN'}")
    
    return banner_model_mappings

if __name__ == "__main__":
    target_url = "https://en.jmev.com"
    download_banner_images_with_models(target_url)
