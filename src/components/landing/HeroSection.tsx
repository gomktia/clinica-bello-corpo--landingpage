import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/mentora.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden bg-dark-premium">
      {/* Visual Background Element */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-dark-premium via-dark-premium/40 to-transparent z-10" />
        <img
          src={heroImage}
          alt="Luxury Esthetics"
          fetchPriority="high"
          className="w-full h-full object-cover grayscale-[20%] brightness-75 md:brightness-100 object-[75%_top] lg:object-center"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em]">
              O Método #1 para Faturamento em Criolipólise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 md:mb-6 text-center lg:text-left"
          >
            Faturamento de Luxo <br className="hidden sm:block" />
            na <span className="text-gradient-gold text-glow-gold">Estética Avançada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-base md:text-xl font-body mb-10 max-w-xl leading-relaxed text-left lg:text-left mx-auto lg:mx-0"
          >
            Domine do Ultraformer à Criolipólise. Aprenda o raciocínio clínico por trás das tecnologias mais lucrativas do mercado e fature alto com protocolos que entregam resultados de elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="xl"
              onClick={onCtaClick}
              className="btn-gold-glow group h-14 md:h-16 px-8 md:px-10 text-sm md:text-base w-full sm:w-auto"
            >
              QUERO MEU LUGAR NO CURSO
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 glass rounded-full w-full sm:w-auto">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-white/80 text-xs md:text-sm font-medium">Inscrição 100% Segura</span>
            </div>
          </motion.div>

          {/* Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-3 md:gap-8 opacity-50"
          >
            {["Certificado Master", "Mentoria Direta", "Protocolos Exclusivos"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-white text-[8px] md:text-[10px] uppercase font-bold tracking-[0.15em]">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
