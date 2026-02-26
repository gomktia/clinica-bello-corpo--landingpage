import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina Costa",
    role: "Esteticista - SP",
    content: "O método triplicou meu faturamento em apenas 3 meses. As técnicas são o diferencial que eu precisava.",
  },
  {
    name: "Carla Mendes",
    role: "Dona de Clínica - RJ",
    content: "Aprendi a precificar e a me posicionar. Hoje minha agenda está lotada com o público que eu sempre quis.",
  },
  {
    name: "Juliana Alves",
    role: "Biomédica Esteta",
    content: "Protocolos incríveis e suporte impecável. O melhor investimento que já fiz na minha carreira.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-secondary font-black mb-6 text-center">
            Resultados que <span className="text-primary italic">Inspiram</span>
          </h2>
          <p className="text-secondary/80 text-lg text-left md:text-center">
            Ouça de quem já percorreu o caminho e transformou sua realidade profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-muted/30 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-secondary/5 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary/80 font-medium text-lg leading-relaxed mb-8 flex-grow">
                "{t.content}"
              </p>
              <div className="pt-6 border-t border-secondary/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-dark-premium">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-secondary leading-none">{t.name}</p>
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
