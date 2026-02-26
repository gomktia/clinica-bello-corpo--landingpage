import { motion } from "framer-motion";
import logoBc from "@/assets/logo-bc.png";
import { Instagram } from "lucide-react";

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const Footer = ({ onPrivacyClick, onTermsClick }: FooterProps) => {
  return (
    <footer className="py-12 md:py-16 bg-dark-premium text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0"
        >
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-1.5 md:p-2 border-2 border-primary/30 shadow-gold-glow flex items-center justify-center overflow-hidden mb-1 md:mb-2">
              <img
                src={logoBc}
                alt="Bello Corpo - Cursos"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <p className="text-white/60 text-[9px] md:text-[10px] max-w-[180px] md:max-w-[200px] text-center md:text-left font-bold uppercase tracking-widest leading-relaxed">
              Elevando o padrão da estética brasileira.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 text-sm font-bold tracking-wide uppercase text-[9px] md:text-[10px]">
              <a
                href="https://instagram.com/bellocorpo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga a Clínica Bello Corpo no Instagram"
                className="flex items-center gap-2 hover:text-primary transition-all duration-300 group px-4 py-2 bg-white/5 rounded-full md:bg-transparent md:p-0"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:text-primary" />
                <span className="group-hover:text-glow-gold">@clinicabellocorpo</span>
              </a>
              <div className="flex items-center gap-6">
                <button
                  onClick={onTermsClick}
                  className="hover:text-primary transition-all duration-300 hover:text-glow-gold uppercase"
                >
                  Termos
                </button>
                <button
                  onClick={onPrivacyClick}
                  className="hover:text-primary transition-all duration-300 hover:text-glow-gold uppercase"
                >
                  Privacidade
                </button>
              </div>
            </div>

            <p className="text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold text-center md:text-right">
              © {new Date().getFullYear()} Clínica Bello Corpo Cursos. <br className="sm:hidden" /> Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
