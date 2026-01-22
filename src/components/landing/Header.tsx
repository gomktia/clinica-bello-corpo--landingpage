import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoBc from "@/assets/logo-bc.png";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Aulas", href: "#aulas" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md py-3 md:py-4 shadow-elegant border-b border-secondary/5"
        : "bg-transparent py-6 md:py-8"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 md:gap-4 group z-50">
            <div className="relative w-10 h-10 md:w-14 md:h-14 overflow-hidden rounded-full shadow-extra-elegant bg-white p-1.5 md:p-2 border border-primary/20 group-hover:scale-105 transition-transform duration-500">
              <img
                src={logoBc}
                alt="Bello Corpo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-black text-sm md:text-lg tracking-tight leading-none transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "text-secondary" : "text-white"}`}>BELLO CORPO</span>
              <span className="font-body text-[8px] md:text-[9px] tracking-[0.4em] text-primary font-bold uppercase leading-none mt-1">Cursos</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary ${isScrolled ? "text-secondary/60" : "text-white/60"}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCtaClick}
              className="hidden sm:block btn-gold-glow px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold text-[10px] md:text-xs tracking-[0.15em] shadow-gold-glow"
            >
              INSCREVER-SE
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors z-50 ${isScrolled || isMobileMenuOpen ? "text-secondary bg-secondary/5" : "text-white bg-white/10"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center gap-8 p-6"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-black text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onCtaClick();
                }}
                className="btn-gold-glow w-full max-w-xs py-5 rounded-2xl font-black text-sm tracking-widest shadow-gold-glow mt-8"
              >
                QUERO MEU LUGAR
              </motion.button>
            </div>

            <div className="mt-12 opacity-30 text-[10px] uppercase font-bold tracking-[0.3em] text-secondary">
              Clínica Bello Corpo © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
