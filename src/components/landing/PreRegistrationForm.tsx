import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, ArrowRight, Sparkles, Clock, CheckCircle2, MessageCircle, CreditCard } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { supabase } from "@/integrations/supabase/client";
import { createLeadInBaserow } from "@/integrations/baserow/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface PreRegistrationFormProps {
  id?: string;
}

const PreRegistrationForm = ({ id }: PreRegistrationFormProps) => {
  /* 
   * Configuração de Origem do Lead:
   * Define a Empresa e o Curso/Especialidade automaticamente para identificar a fonte no Baserow.
   */
  const [formData, setFormData] = useState({
    name: "",
    companyName: "Clínica Bello Corpo", // Identifica o cliente do sistema (Dono da LP)
    email: "",
    whatsapp: "",
    specialty: "Destrave sua Carreira na Estética" // Identifica o produto/curso
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Integração Baserow
      // Importante: Certifique-se de que as colunas Nome, Email, Whatsapp, Especialidade existam no Baserow
      console.log("Enviando dados para o Baserow:", formData);
      await createLeadInBaserow(formData);

      /* 
      // Integração Supabase (Mantida como referência/backup)
      const { error } = await supabase.from("leads").insert([{
        full_name: formData.name,
        email: formData.email,
        phone: formData.whatsapp,
        specialty: formData.specialty
      }]);
      if (error) throw error;
      */

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#641c2c", "#ffffff", "#000000"]
      });

      toast.success("Vaga Garantida com Sucesso!", {
        description: "Seus dados foram salvos no Baserow.",
      });

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao processar inscrição. Verifique a configuração ou tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = import.meta.env.VITE_WHATSAPP_GROUP_URL || "https://chat.whatsapp.com/Gis0l4D2dK93yT0eIkS6lT";
  const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || "#";

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
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 w-fit">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Condição Especial de Lançamento</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-6xl text-white font-black leading-[1.2] mb-6 md:mb-8 break-words">
              O seu próximo nível <br className="hidden sm:block" />
              está a <span className="text-gradient-gold">um clique de distância.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 md:mb-12 leading-relaxed max-w-lg">
              As inscrições estão prestes a abrir. Garanta seu lugar na lista prioritária e receba o link com bônus exclusivos.
            </p>

            <div className="space-y-8 w-full max-w-md lg:max-w-none">
              {/* Progress Bar inspired by the image provided */}
              <div className="w-full space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-wider">Vagas Preenchidas</span>
                  <span className="text-primary font-black text-xl md:text-2xl animate-pulse">87%</span>
                </div>
                <div className="h-5 md:h-6 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary-foreground rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                  />
                </div>
                <p className="text-white/40 text-[10px] md:text-xs">Aproximadamente 13 vagas restantes no Lote 01</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center glass p-5 md:p-6 rounded-[2rem] border-white/5">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 opacity-50">Encerramento em:</p>
                  <CountdownTimer targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card (Now always shown, opening dialog on success) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div
              className="bg-white rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute -top-3 right-4 md:top-6 md:right-6 bg-primary text-dark-premium px-3 py-1 md:px-6 md:py-2 rounded-lg md:rounded-2xl font-black text-[10px] md:text-sm shadow-gold-glow rotate-2 md:rotate-6 z-20">
                LISTA VIP
              </div>

              <div className="mb-8 text-center md:text-left">
                <h3 className="text-xl md:text-3xl font-black text-dark-premium mb-2">Faça sua Inscrição</h3>
                <p className="text-secondary/60 text-sm md:text-lg font-medium">Preencha os dados para garantir sua vaga.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Seu Nome Completo"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 md:h-16 rounded-2xl border-secondary/10 px-6 font-medium focus:ring-primary/20 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Seu Melhor E-mail"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 md:h-16 rounded-2xl border-secondary/10 px-6 font-medium focus:ring-primary/20 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="WhatsApp (com DDD)"
                    required
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="h-14 md:h-16 rounded-2xl border-secondary/10 px-6 font-medium focus:ring-primary/20 text-base"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold-glow h-14 md:h-20 text-[13px] sm:text-lg md:text-xl font-black tracking-normal sm:tracking-widest mt-4 group rounded-2xl md:rounded-3xl px-4"
                >
                  {isSubmitting ? "PROCESSANDO..." : "GARANTIR MINHA VAGA AGORA"}
                  {!isSubmitting && <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />}
                </Button>

                <div className="flex items-center justify-center gap-3 mt-6 md:mt-8 opacity-60">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span className="text-[10px] md:text-xs text-secondary/60 font-black uppercase tracking-widest">Ambiente 100% Seguro</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div >
      </div >

      {/* Success Modal (Dialog) */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="w-[95%] max-w-[400px] md:max-w-[500px] bg-dark-premium border-primary/30 p-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-auto">
          <div className="p-6 md:p-12 text-center relative">
            {/* Subtle Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8"
            >
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary animate-pulse" />
            </motion.div>

            <DialogHeader className="p-0 mb-6">
              <DialogTitle className="text-3xl md:text-4xl font-black text-white italic text-center mb-2">
                INSCRITO COM SUCESSO!
              </DialogTitle>
              <DialogDescription className="text-white/60 text-base md:text-lg leading-relaxed text-center">
                Sua vaga na lista VIP foi reservada. <br className="hidden md:block" />
                Como você deseja prosseguir agora?
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 mb-8">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full h-16 md:h-18 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 text-lg font-black transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(37,211,102,0.3)] border-none"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                ENTRAR NO GRUPO VIP
              </Button>

              <Button
                onClick={() => window.open(checkoutUrl, "_blank")}
                className="w-full h-16 md:h-18 btn-gold-glow rounded-2xl md:rounded-3xl flex items-center justify-center gap-3 text-lg font-black transition-all hover:scale-[1.02] border-none"
              >
                <CreditCard className="w-6 h-6" />
                COMPRAR AGORA (LOTE 01)
              </Button>
            </div>

            {/* Choice Status Bar */}
            <div className="pt-6 border-t border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Status do Lote 01</span>
                <span className="text-primary font-bold text-xs italic">87% Completo</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section >
  );
};

export default PreRegistrationForm;
