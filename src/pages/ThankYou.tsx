import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import logoFull from "@/assets/logo-full.png";

const ThankYou = () => {
  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ["#722F37", "#8B4049", "#F5E6D8", "#E8D5C8", "#A85861"],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp group link
    window.open("https://chat.whatsapp.com/EXEMPLO", "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            src={logoFull}
            alt="Bello Corpo"
            className="h-10 object-contain mx-auto mb-8"
          />

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-gradient-burgundy mx-auto mb-8 flex items-center justify-center shadow-burgundy"
          >
            <CheckCircle className="w-12 h-12 text-primary-foreground" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-body text-sm uppercase tracking-[0.2em]">
                Parabéns!
              </span>
              <Sparkles className="w-5 h-5" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Bem-vinda à
              <span className="text-gradient-burgundy"> Bello Corpo</span>
            </h1>

            <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
              Sua inscrição foi confirmada com sucesso! Você acaba de dar o primeiro
              passo para transformar sua carreira na estética.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50 mb-8"
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-6">
              <Heart className="w-6 h-6 fill-primary" />
              <span className="font-display text-xl">Último Passo Importante</span>
            </div>

            <p className="text-muted-foreground mb-8">
              Entre agora no nosso grupo exclusivo de alunas no WhatsApp.
              <br />
              Lá você receberá todas as informações sobre o curso, datas das aulas
              e conteúdos especiais.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="whatsapp"
                size="xl"
                onClick={handleWhatsAppClick}
                className="w-full md:w-auto"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Entrar no Grupo Exclusivo de Alunos
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-muted-foreground text-sm"
          >
            Você também receberá um e-mail com todos os detalhes.
            <br />
            Verifique sua caixa de entrada e spam.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
};

export default ThankYou;
