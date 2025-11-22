import Carousel from "@/components/Carousel";
import NewsSection from "@/components/NewsSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import EnergyFactory from "@/components/EnergyFactory";

export default function Home() {
  return (
    <>
      <Carousel />
      
      <div>
        <NewsSection />
      
        <StoriesSection />
      
        <AboutSection />
      
        <EnergyFactory />
      </div>
    </>
  );
}
