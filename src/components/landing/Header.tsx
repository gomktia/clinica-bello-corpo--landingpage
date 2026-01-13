import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoBc from "@/assets/logo-bc.png";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md py-4 shadow-elegant border-b border-secondary/5"
        : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 overflow-hidden rounded-full shadow-extra-elegant bg-white p-2 border border-primary/20 group-hover:scale-105 transition-transform duration-500">
              <img
                src={logoBc}
                alt="Bello Corpo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-black text-lg tracking-tight leading-none transition-colors duration-300 ${isScrolled ? "text-secondary" : "text-white"}`}>BELLO CORPO</span>
              <span className="font-body text-[9px] tracking-[0.4em] text-primary font-bold uppercase leading-none mt-1">Cursos</span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {["Sobre", "Aulas", "Depoimentos"].map((m) => (
              <a
                key={m}
                href={`#${m.toLowerCase()}`}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary ${isScrolled ? "text-secondary/60" : "text-white/60"}`}
              >
                {m}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={onCtaClick}
            className="btn-gold-glow px-8 py-3 rounded-full font-bold text-xs tracking-[0.15em] shadow-gold-glow"
          >
            INSCREVER-SE
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
