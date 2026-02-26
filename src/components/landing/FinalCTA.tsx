import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA = ({ onCtaClick }: FinalCTAProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
            <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-secondary font-black leading-tight mb-6 md:mb-8 text-center">
            Sua carreira merece esse <br />
            <span className="text-gradient-gold">próximo passo.</span>
          </h2>
          <p className="text-secondary/60 text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-left md:text-center">
            Nós removemos todo o risco. Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              size="xl"
              onClick={onCtaClick}
              className="btn-gold-glow h-16 md:h-20 px-8 md:px-12 text-sm md:text-xl font-black rounded-full w-full sm:w-auto"
            >
              GARANTIR MEU ACESSO AGORA
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 pt-8 border-t border-secondary/5 w-full">
              {[
                { icon: ShieldCheck, text: "Garantia 7 Dias" },
                { icon: Sparkles, text: "Acesso Imediato" },
                { icon: ShieldCheck, text: "Segurança" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-[9px] md:text-[10px] uppercase font-black text-secondary/30 tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
