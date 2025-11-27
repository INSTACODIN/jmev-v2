import Carousel from "@/components/Carousel";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import EnergyFactory from "@/components/EnergyFactory";

export default function Home() {
  return (
    <>
      <Carousel />
      
      <div>
        <StoriesSection />
      
        <AboutSection />
      
        <EnergyFactory />
      </div>
    </>
  );
}
