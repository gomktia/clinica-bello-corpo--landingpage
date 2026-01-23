import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, TrendingUp, Users } from "lucide-react";

const PhilosophySection = () => {
    return (
        <section id="metodo" className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit mx-auto lg:mx-0"
                    >
                        <AlertCircle className="w-3.5 h-3.5" />
                        Alerta de Realidade
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-3xl md:text-5xl lg:text-6xl text-secondary font-black leading-tight mb-8 text-center md:text-center"
                    >
                        O MERCADO <span className="text-red-600">MENTE</span> PRA VOCÊ <br className="hidden md:block" /> TODOS OS DIAS.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto mb-6 text-left md:text-center"
                    >
                        Dizem que você precisa de mil cursos, de aparelhos de 300k, de mais seguidores...
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="text-3xl md:text-6xl font-black text-red-600 mb-8 md:mb-12 flex items-center justify-center gap-4"
                    >
                        MENTIRA 😡
                    </motion.div>
                </div>

                {/* Video Implementation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-16 relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white p-2 rounded-[2.5rem] border border-primary/20 shadow-extra-elegant overflow-hidden">
                        <div className="aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-secondary relative">
                            <video
                                className="w-full h-full object-cover object-top"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            >
                                <source src="/video-site.mp4" type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>

                            {/* Premium Overlay for Quality Perception */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark-premium/40 to-transparent mix-blend-overlay" />
                        </div>

                        {/* Video Footer Label */}
                        <div className="px-4 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-secondary/5 mt-2 bg-muted/30 rounded-b-[1.8rem]">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary animate-pulse" />
                                <p className="text-secondary/60 text-[8px] md:text-xs uppercase font-bold tracking-widest leading-none">A Realidade da Clínica Bello Corpo</p>
                            </div>
                            <p className="text-primary font-bold text-[8px] md:text-xs uppercase tracking-widest italic leading-none">Ciência & Técnica</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Section: The Lies */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-muted/30 p-5 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-secondary/5 relative overflow-hidden"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/5 blur-2xl rounded-full" />
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl text-secondary font-bold">O que eles te vendem</h3>
                                <p className="text-red-500/60 text-[10px] uppercase font-bold tracking-widest mt-1">O Caminho da Exaustão</p>
                            </div>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Aparelhos caros que te deixam endividada",
                                "Milhões de cursos sem aplicação prática",
                                "A obsessão por seguidores que não compram",
                                "Protocolos genéricos que não fidelizam",
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start text-secondary/60">
                                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <span className="text-base font-medium text-secondary/80">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Section: The Truth */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-dark-premium p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-extra-elegant relative overflow-hidden ring-1 ring-primary/20"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-gold-glow">
                                <CheckCircle2 className="w-6 h-6 text-dark-premium" />
                            </div>
                            <div>
                                <h3 className="font-display text-2xl text-primary font-bold">O QUE VOCÊ PRECISA É DE:</h3>
                                <p className="text-primary/60 text-[10px] uppercase font-bold tracking-widest mt-1">O Método Clínica Bello Corpo</p>
                            </div>
                        </div>
                        <ul className="space-y-6 mb-10">
                            {[
                                "Um procedimento de alto valor percebido",
                                "Que você possa dominar com segurança",
                                "Que entregue resultados rápidos, reais e replicáveis",
                                "E que posicione você como referência, não como “apenas mais uma”",
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start text-white/90">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-lg font-bold leading-snug">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                            <div className="text-center">
                                <p className="text-primary font-black text-2xl leading-none">2.000+</p>
                                <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-2">Alunas de Elite</p>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div className="text-center">
                                <p className="text-primary font-black text-2xl leading-none">15 Anos</p>
                                <p className="text-white/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-2">De Clínica Real</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
