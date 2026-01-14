import { motion } from "framer-motion";
import { Target, Gem, Sparkles, Play, BookOpen, HeartPulse, Award, Rocket } from "lucide-react";

const aulas = [
    {
        title: "Criolipólise",
        desc: "Domínio completo da técnica base para redução de gordura localizada.",
        icon: Target,
    },
    {
        title: "Criolipólise Avançada",
        desc: "Protocolos exclusivos de alto impacto e resultados acelerados.",
        icon: Gem,
    },
    {
        title: "Radiofrequência",
        desc: "O segredo do estímulo de colágeno e firmeza tecidual de elite.",
        icon: Sparkles,
    },
    {
        title: "Cavitação Ultrassom Cavitacional",
        desc: "A ciência da lipo sem cortes para contorno corporal severo.",
        icon: Play,
    },
    {
        title: "Ultrassom Celulite",
        desc: "Tratamento profundo dos graus de celulite com tecnologia sônica.",
        icon: BookOpen,
    },
    {
        title: "Tratamento Lipedema",
        desc: "Abordagem clínica e técnica para uma das maiores dores das pacientes.",
        icon: HeartPulse,
    },
    {
        title: "Ultraformer",
        desc: "Dominando o queridinho das clínicas de luxo para lifting não invasivo.",
        icon: Award,
    },
    {
        title: "Ultraformer Alta Definição",
        desc: "Escultura corporal avançada e definição muscular de alta performance.",
        icon: Rocket,
    },
];

const CourseModules = () => {
    return (
        <section id="aulas" className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
            {/* Decorative Background Elements - UPDATED TO DARK COLOR */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent hidden lg:block" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-secondary/60 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                    >
                        Cronograma Detalhado
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-display text-3xl md:text-5xl text-secondary font-black mb-6 leading-tight"
                    >
                        Sua Jornada para a <br />
                        <span className="text-gradient-gold">Maestria Clínica</span>
                    </motion.h2>
                    <p className="text-secondary/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Um passo a passo progressivo desenhado para o seu domínio total.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* The Timeline Line (Mobile) - UPDATED TO DARK COLOR */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/10 lg:hidden" />

                    <div className="space-y-6 lg:space-y-0">
                        {aulas.map((aula, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.05 }}
                                    className="w-full lg:w-1/2 pl-10 pr-2 lg:px-12 relative"
                                >
                                    {/* Mobile Connector Dot */}
                                    <div className="absolute left-[-1.625rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-white rounded-full lg:hidden z-20 shadow-sm" />

                                    <div className={`group bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-soft hover:shadow-xl hover:border-primary/30 transition-all duration-500 border border-secondary/5 relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        {/* Desktop Connector Dot */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary/20 rounded-full hidden lg:block z-20 ${index % 2 === 0 ? '-right-[1.625rem]' : '-left-[1.625rem]'}`} />

                                        <div className={`w-10 h-10 md:w-11 md:h-11 rounded-xl bg-muted/50 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:shadow-gold-glow transition-all duration-500 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                                            <aula.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>

                                        <span className="text-primary font-black text-[8px] md:text-[9px] uppercase tracking-[0.2em] block mb-1">
                                            Aula 0{index + 1}
                                        </span>
                                        <h3 className="font-display text-lg md:text-xl text-secondary font-black mb-1 md:mb-2 group-hover:text-primary transition-colors">
                                            {aula.title}
                                        </h3>
                                        <p className="text-secondary/60 text-xs md:text-sm leading-relaxed group-hover:text-secondary/80 font-medium transition-colors">
                                            {aula.desc}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Center Dot Spacer (Desktop) */}
                                <div className="hidden lg:flex w-12 justify-center relative">
                                    <div className="w-4 h-4 rounded-full bg-secondary z-10" />
                                </div>

                                {/* Empty Side (Desktop) */}
                                <div className="hidden lg:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseModules;
