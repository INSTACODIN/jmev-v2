import Carousel from "@/components/Carousel";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import EnergyFactory from "@/components/EnergyFactory";
import { defaultLocale } from "@/lib/i18n";

export default function Home() {
  return (
    <>
      <Carousel locale={defaultLocale} />
      
      <div>
        {/* Owner Stories / Histoires des propriétaires */}
        {/* <StoriesSection /> */}
      
        {/* JMEV Group New Energy */}
        {/* <AboutSection /> */}
      
        {/* Energy Factory / Usine d'énergie */}
        {/* <EnergyFactory /> */}
      </div>
    </>
  );
}
