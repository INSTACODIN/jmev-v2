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
        {/* Owner Stories / Histoires des propriétaires */}
        {/* <StoriesSection locale={locale} /> */}
      
        {/* JMEV Group New Energy */}
        {/* <AboutSection locale={locale} /> */}
      
        {/* Energy Factory / Usine d'énergie */}
        {/* <EnergyFactory locale={locale} /> */}
      </div>
    </>
  );
}

