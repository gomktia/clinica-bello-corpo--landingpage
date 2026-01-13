import { motion } from "framer-motion";
import logoBc from "@/assets/logo-bc.png";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-dark-premium text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-white p-2 border-2 border-primary/30 shadow-gold-glow flex items-center justify-center overflow-hidden mb-2">
              <img
                src={logoBc}
                alt="Bello Corpo - Cursos"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <p className="text-white/40 text-[10px] max-w-[200px] text-center md:text-left font-bold uppercase tracking-widest leading-relaxed">
              Elevando o padrão da estética brasileira.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold tracking-wide uppercase text-[10px]">
              <a
                href="https://instagram.com/bellocorpo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform group-hover:text-primary" />
                <span className="group-hover:text-glow-gold">@clinicabellocorpo</span>
              </a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:text-glow-gold">Termos</a>
              <a href="#" className="hover:text-primary transition-all duration-300 hover:text-glow-gold">Privacidade</a>
            </div>

            <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} Clínica Bello Corpo Cursos. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
