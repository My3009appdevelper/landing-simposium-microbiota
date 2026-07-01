import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TopicsSection from "@/components/TopicsSection";
import SpeakersSection from "@/components/SpeakersSection";
import ProgramSection from "@/components/ProgramSection";
import VenueSection from "@/components/VenueSection";
import RegistrationSection from "@/components/RegistrationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import RegistrationPopup from "@/components/RegistrationPopup";

export default function Home() {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <SpeakersSection />
      <ProgramSection />
      <VenueSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
      <RegistrationPopup />
    </div>
  );
}
