import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import CourseCover from "@/components/landing/CourseCover";
import CourseModules from "@/components/landing/CourseModules";
import BenefitsSection from "@/components/landing/BenefitsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PreRegistrationForm from "@/components/landing/PreRegistrationForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/landing/CookieConsent";
import { PrivacyPolicy, TermsOfUse } from "@/components/landing/LegalPages";
import { useState } from "react";

const Index = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

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
      <CourseCover />
      <CourseModules />
      <AuthoritySection />
      <BenefitsSection />
      <TestimonialsSection />
      <PreRegistrationForm id="pre-registration" />
      <FinalCTA onCtaClick={scrollToForm} />
      <Footer onPrivacyClick={() => setShowPrivacy(true)} onTermsClick={() => setShowTerms(true)} />

      <CookieConsent />
      <PrivacyPolicy isOpen={showPrivacy} onOpenChange={setShowPrivacy} />
      <TermsOfUse isOpen={showTerms} onOpenChange={setShowTerms} />
    </main>
  );
};

export default Index;
