import { motion } from "framer-motion";
import mentoraImage from "@/assets/mentora.png";
import clinicImage from "@/assets/clinic-interior.jpg";

const AuthoritySection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Presentation - NEW CIRCULAR DESIGN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative z-10">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-extra-elegant border-[8px] md:border-[12px] border-white relative">
                <div className="absolute inset-0 border-[2px] border-primary/20 rounded-full z-20" />
                <img
                  src={mentoraImage}
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  alt="Mentora Bello Corpo"
                />
              </div>

              {/* Experience Label - Adjusted for Mobile Safety */}
              <div className="absolute -top-4 right-0 md:top-10 md:-right-10 glass px-4 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl z-30 shadow-elegant border border-primary/20">
                <p className="text-primary font-black text-xl md:text-3xl leading-none">+ de 15 anos</p>
                <p className="text-secondary/60 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] mt-1 text-center md:text-left">Experiência Clínica</p>
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>

            {/* Context Image Overlay (Smaller and shifted) */}
            <div className="absolute -bottom-8 right-0 md:right-10 w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden shadow-extra-elegant z-20 border-[6px] border-white hidden lg:block">
              <img src={clinicImage} loading="lazy" className="w-full h-full object-cover brightness-90" alt="Clínica Interior" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-5 md:gap-6"
          >
            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em]">Propósito Bello Corpo</span>
            <h2 className="font-display text-3xl md:text-5xl text-secondary font-black leading-tight">
              A Diferença entre <span className="text-gradient-gold">Técnica</span> e <span className="italic">Maestria.</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-secondary/70 text-base md:text-lg leading-relaxed font-medium">
              <p>
                Não estou aqui para te vender um curso de final de semana. Estou aqui para transferir mais de 15 anos de consultório para as suas mãos.
              </p>
              <p>
                A <strong className="text-secondary">Clínica Bello Corpo</strong> foi criada para profissionais que cansaram do básico e buscam o extraordinário. Já capacitamos mais de 2.000 especialistas que hoje dominam o mercado de suas regiões.
              </p>
              <p className="border-l-4 border-primary pl-5 md:pl-6 italic">
                "Meu compromisso é que você nunca mais seja refém de uma máquina, mas sim a autora dos seus próprios resultados."
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-4 md:mt-2">
              <div>
                <p className="text-secondary font-black text-2xl md:text-3xl">2k+</p>
                <p className="text-secondary/40 text-[9px] uppercase font-bold tracking-widest mt-1">Alunas Formadas</p>
              </div>
              <div>
                <p className="text-secondary font-black text-2xl md:text-3xl">15</p>
                <p className="text-secondary/40 text-[9px] uppercase font-bold tracking-widest mt-1">Anos de Clínica</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-secondary font-black text-2xl md:text-3xl">Master</p>
                <p className="text-secondary/40 text-[9px] uppercase font-bold tracking-widest mt-1">Nível de Certificação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
