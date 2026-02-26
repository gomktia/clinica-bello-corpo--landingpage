import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sparkles, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

interface PreRegistrationFormProps {
  id?: string;
}

const PreRegistrationForm = ({ id }: PreRegistrationFormProps) => {
  const checkoutUrl = "https://checkout.korvex.com.br/checkout/cmm2qpbxi03911rmxjbvnfzxt?offer=6OJ7XBF";

  return (
    <section id={id} className="py-20 md:py-32 bg-dark-premium relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/40 blur-[100px] rounded-full -ml-24 -mb-24" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

          {/* Urgency and Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col text-left items-start"
          >
            {/* Premium Pre-Sale Badge with Animation */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-gradient-gold border border-primary/50 rounded-full px-5 py-2 mb-8 w-fit shadow-gold-glow-lg ring-2 ring-primary/20"
            >
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-secondary font-black text-xs md:text-sm uppercase tracking-[0.2em]">Oportunidade Única: Pré-Venda Liberada</span>
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-white font-black leading-[1.1] mb-6 md:mb-10 text-center lg:text-left w-full">
              ACESSO TOTAL <br />
              <span className="text-gradient-gold drop-shadow-2xl">12x R$ 10,04</span>
            </h2>

            <div className="bg-white/5 border border-primary/20 rounded-[2.5rem] p-6 md:p-8 mb-10 md:mb-12 relative overflow-hidden group w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
              <p className="text-white text-lg md:text-2xl mb-6 leading-relaxed font-bold italic">
                Garanta <span className="text-primary tracking-tighter">TODOS</span> os cursos da nossa <br className="hidden md:block" /> plataforma em um único pacote exclusivo.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center animate-pulse">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <p className="font-black uppercase tracking-widest text-sm md:text-base">
                    VALOR VÁLIDO ATÉ: <span className="text-red-500 underline underline-offset-4 decoration-2">31/03/2026</span>
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <p className="text-primary/90 text-sm md:text-base font-medium">
                    ⚠️ <span className="font-black text-white ml-2 uppercase">Aviso Crítico:</span> Após esta data, todos os cursos serão vendidos <span className="text-white font-bold underline">individualmente</span> pelo valor integral.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <div className="absolute top-0 right-4 md:top-6 md:right-6 bg-primary text-dark-premium px-3 py-1 md:px-6 md:py-2 rounded-lg md:rounded-2xl font-black text-[10px] md:text-sm shadow-gold-glow rotate-2 md:rotate-6 z-20 uppercase">
                Pré-Venda
              </div>

              {/* Countdown */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center bg-secondary/5 p-4 md:p-6 rounded-[1.5rem] border border-secondary/10">
                <div className="relative">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-secondary/40 font-black uppercase text-[9px] tracking-widest mb-1">Oferta expira em:</p>
                  <CountdownTimer targetDate={new Date(2026, 2, 31, 23, 59, 59)} />
                </div>
              </div>

              <div className="mb-8 text-center">
                <h3 className="text-xl md:text-3xl font-black text-dark-premium mb-4">Garanta seu Acesso Total</h3>
                <div className="flex flex-col items-center gap-2 mb-6">
                  <span className="text-secondary/50 text-sm font-bold uppercase tracking-widest">Pré-venda por apenas</span>
                  <span className="text-4xl md:text-6xl font-black text-secondary animate-pulse">12x R$ 10<span className="text-2xl md:text-3xl">,04</span></span>
                  <span className="text-secondary/60 text-sm md:text-base font-medium">ou <span className="font-black text-dark-premium">R$ 97,00 à vista</span></span>
                </div>
              </div>

              <Button
                onClick={() => window.open(checkoutUrl, "_blank")}
                className="w-full btn-gold-glow h-14 md:h-20 text-[13px] sm:text-lg md:text-xl font-black tracking-normal sm:tracking-widest group rounded-2xl md:rounded-3xl px-4"
              >
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-3 mt-4 opacity-60">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span className="text-[10px] md:text-xs text-secondary/60 font-black uppercase tracking-widest">Ambiente 100% Seguro</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-10 pt-8 border-t border-secondary/5 space-y-4">
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-secondary/40 font-black text-[10px] uppercase tracking-[0.3em]">Lote 01 Disponível</span>
                    <span className="text-secondary font-bold text-sm md:text-base uppercase">Vagas Preenchidas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-black text-2xl md:text-3xl animate-pulse block">87%</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-secondary/5 rounded-full overflow-hidden border border-secondary/5 p-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-gradient-gold rounded-full shadow-gold-glow relative"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shine_3s_infinite_linear]" />
                  </motion.div>
                </div>
                <p className="text-red-600 font-bold uppercase text-[9px] tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                  RESTAM APENAS 13 ACESSOS COM ESTE VALOR
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;
