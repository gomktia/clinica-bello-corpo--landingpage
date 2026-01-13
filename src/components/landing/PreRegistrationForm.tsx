import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, ArrowRight, Sparkles, Clock, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { supabase } from "@/integrations/supabase/client";

interface PreRegistrationFormProps {
  id?: string;
}

const PreRegistrationForm = ({ id }: PreRegistrationFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", specialty: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert([{
        full_name: formData.name,
        email: formData.email,
        phone: formData.whatsapp,
        specialty: formData.specialty
      }]);

      if (error) throw error;

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#641c2c", "#ffffff", "#000000"]
      });

      toast.success("Vaga Garantida com Sucesso!", {
        description: "Você será redirecionada para o grupo VIP agora.",
      });

      // Redirect to WhatsApp Group
      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/Gis0l4D2dK93yT0eIkS6lT";
      }, 2000);

    } catch (error) {
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-dark-premium relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/40 blur-[100px] rounded-full -ml-24 -mb-24" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* Urgency and Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Condição Especial de Pré-Venda</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white font-black leading-[1.1] mb-6">
              O seu próximo nível <br />
              está a <span className="text-gradient-gold">um clique de distância.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg">
              As inscrições estão prestes a abrir. Garanta seu lugar na lista prioritária e receba o link com bônus exclusivos.
            </p>

            <div className="space-y-6 w-full max-w-md lg:max-w-none">
              <div className="flex flex-col sm:flex-row gap-4 items-center glass p-5 md:p-6 rounded-3xl">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold uppercase text-[9px] md:text-[10px] tracking-widest mb-2">As Vagas Encerram Em:</p>
                  <CountdownTimer targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)} />
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-dark-premium bg-muted" />
                  ))}
                </div>
                <p className="text-white/50 text-xs md:text-sm font-medium tracking-tight">
                  <span className="text-primary font-bold">+150 profissionais</span> inscritas hoje
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl relative"
          >
            <div className="absolute -top-3 -right-2 md:-top-4 md:-right-4 bg-primary text-dark-premium px-4 py-1.5 md:px-6 md:py-2 rounded-xl md:rounded-2xl font-black text-xs md:text-sm shadow-gold-glow rotate-6 z-20">
              LISTA VIP
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div className="space-y-2">
                <Input
                  placeholder="Seu Nome Completo"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 md:h-14 rounded-xl md:rounded-2xl border-secondary/10 px-5 md:px-6 font-medium focus:ring-primary/20 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Seu Melhor E-mail"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 md:h-14 rounded-xl md:rounded-2xl border-secondary/10 px-5 md:px-6 font-medium focus:ring-primary/20 text-sm md:text-base"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="WhatsApp (com DDD)"
                  required
                  value={formData.whatsapp}
                  onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="h-12 md:h-14 rounded-xl md:rounded-2xl border-secondary/10 px-5 md:px-6 font-medium focus:ring-primary/20 text-sm md:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold-glow h-14 md:h-16 text-base md:text-lg font-black tracking-widest mt-2 group"
              >
                {isSubmitting ? "AGUARDE..." : "GARANTIR MINHA VAGA AGORA"}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 opacity-60">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span className="text-[9px] text-secondary/60 font-black uppercase tracking-widest">Dados 100% protegidos</span>
              </div>
            </form>
          </motion.div>
        </div >
      </div >
    </section >
  );
};

export default PreRegistrationForm;
