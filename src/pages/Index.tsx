import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PillarsSection />
      <AdvantagesSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
};

export default Index;
