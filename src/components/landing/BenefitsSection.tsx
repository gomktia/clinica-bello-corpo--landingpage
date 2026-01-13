import { motion } from "framer-motion";
import { Award, BarChart, Rocket, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Certificação Elite",
    desc: "Reconhecimento que abre portas em clínicas de alto padrão e spas de luxo.",
    icon: Award,
  },
  {
    title: "Escala de Ganhos",
    desc: "Modelos de precificação para triplicar seu lucro por hora de atendimento.",
    icon: BarChart,
  },
  {
    title: "Marketing Estético",
    desc: "Aprenda a atrair e converter pacientes qualificados de forma automatizada.",
    icon: Rocket,
  },
];

const BenefitsSection = () => {
  return (
    <section id="diferenciais" className="py-20 bg-dark-premium relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-white font-black mb-6"
          >
            A Excelência em <span className="text-gradient-gold text-glow-gold">Cada Detalhe</span>
          </motion.h2>
          <p className="text-white/50 text-lg">
            Muito mais do que teoria. Entregamos as ferramentas para você construir um negócio sólido e lucrativo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-dark-premium transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-white font-bold mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
