import Carousel from "@/components/Carousel";
import NewsSection from "@/components/NewsSection";
import StoriesSection from "@/components/StoriesSection";
import AboutSection from "@/components/AboutSection";
import EnergyFactory from "@/components/EnergyFactory";
import AppSection from "@/components/AppSection";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      <Carousel />
      
      <div>
        <NewsSection />
      
        <StoriesSection />
      
        <AboutSection />
      
        <EnergyFactory />
      
        <AppSection />
      </div>

      {/* Test Drive Booking Section */}
      <section id="book-test-drive" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Book Test Drive / Réserver un essai
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Experience the charm of future electric mobility. Book your test drive now and feel the exceptional performance of JMEV electric vehicles.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Order Now Section */}
      <section id="order-now" className="py-20 bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Order Now / Commander maintenant
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the electric revolution and experience the future of sustainable mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="px-8 py-3 bg-white text-primary hover:bg-gray-light transition-colors rounded-full font-medium"
            >
              Contact Us / Contactez-nous
            </a>
            <a
              href="#book-test-drive"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-full font-medium"
            >
              Book Test Drive / Réserver
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
