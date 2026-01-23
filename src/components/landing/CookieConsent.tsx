import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import logoBc from "@/assets/logo-bc.png";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 z-[100] max-w-lg mx-auto md:left-auto md:right-6"
                >
                    <div className="glass-light border border-white/20 p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl relative overflow-hidden group">
                        {/* Background Accent */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />

                        <div className="flex flex-col gap-5 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white p-1 border border-primary/20 shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img src={logoBc} alt="Logo" className="w-full h-full object-contain rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-dark-premium text-lg leading-tight mb-1">Privacidade & Cookies</h3>
                                    <p className="text-secondary/60 text-xs md:text-sm leading-relaxed">
                                        Usamos cookies para melhorar sua experiência e analisar nosso tráfego conforme a LGPD.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row gap-3">
                                <Button
                                    onClick={handleAccept}
                                    className="flex-1 btn-gold-glow h-12 text-[10px] md:text-xs font-black tracking-widest rounded-xl"
                                >
                                    ACEITAR TODOS
                                </Button>
                                <Button
                                    onClick={handleDecline}
                                    variant="outline"
                                    className="flex-1 h-12 border-secondary/10 hover:bg-secondary/5 text-secondary/60 text-[10px] md:text-xs font-black tracking-widest rounded-xl"
                                >
                                    NEGUE
                                </Button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            aria-label="Concordar e fechar"
                            className="absolute top-4 right-4 p-2 text-secondary/40 hover:text-secondary/80 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
