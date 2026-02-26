import { motion } from "framer-motion";

const CourseCover = () => {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] border-4 border-primary/20 aspect-[16/10] md:aspect-[16/7]"
                    >
                        <img
                            src="/WhatsApp Image 2026-01-13 at 15.28.50.jpeg"
                            alt="Destrave sua Carreira na Estética"
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="inline-flex items-center gap-2 bg-primary px-4 py-1.5 rounded-full text-dark-premium font-black text-[10px] md:text-xs uppercase tracking-widest shadow-gold-glow"
                            >
                                <span className="animate-pulse">●</span> MATERIAL EXCLUSIVO
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CourseCover;
