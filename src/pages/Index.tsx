import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import CourseModules from "@/components/landing/CourseModules";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PreRegistrationForm from "@/components/landing/PreRegistrationForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("pre-registration")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="overflow-hidden">
      <Header onCtaClick={scrollToForm} />
      <HeroSection onCtaClick={scrollToForm} />
      <PhilosophySection />
      <CourseModules />
      <AuthoritySection />
      <BenefitsSection />
      <TestimonialsSection />
      <PreRegistrationForm id="pre-registration" />
      <FinalCTA onCtaClick={scrollToForm} />
      <Footer />
    </main>
  );
};

export default Index;
