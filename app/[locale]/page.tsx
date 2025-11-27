import Carousel from "@/components/Carousel";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import EnergyFactory from "@/components/EnergyFactory";
import { type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  
  return (
    <>
      <Carousel locale={locale} />
      
      <div>
        <StoriesSection locale={locale} />
      
        <AboutSection locale={locale} />
      
        <EnergyFactory locale={locale} />
      </div>
    </>
  );
}

