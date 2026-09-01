import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export function Contact() {
  const { setCursorVariant } = useCursor();

  return (
    <section className="bg-[#FF3333] text-[#050505] relative pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-5 sm:px-6 lg:px-12 flex flex-col justify-between min-h-[100dvh]" id="contact">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16 md:mb-24"
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-[9vw] leading-[0.9] tracking-tighter uppercase">
            Have an idea?
            <br />
            <span className="text-outline border-[#050505]" style={{ WebkitTextStroke: '1px #050505' }}>Let's make it move.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-full">
            <a 
              href="mailto:samyalhasansaif@gmail.com"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
              className="group font-display font-black text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl border-b-2 border-[#050505] pb-2 flex items-center justify-between sm:justify-start gap-2 sm:gap-4 hover:opacity-70 transition-opacity"
            >
              <span>samyalhasansaif@gmail.com</span>
              <span className="group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">↗</span>
            </a>
            
            <div className="flex flex-wrap gap-3 sm:gap-6 mt-2 sm:mt-4">
              {[
                { name: 'GitHub', href: 'https://www.instagram.com/thesaifbro/' },
                { name: 'LinkedIn', href: 'https://www.instagram.com/thesaifbro/' },
                { name: 'Twitter / X', href: 'https://www.instagram.com/thesaifbro/' },
                { name: 'Facebook', href: 'https://www.instagram.com/thesaifbroo/' },
                { name: 'Instagram', href: 'https://www.instagram.com/thesaifbro/' },
                { name: 'Snapchat', href: 'https://www.instagram.com/thesaifbro/' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider sm:tracking-widest hover:opacity-70 transition-opacity relative group bg-black/5 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md sm:rounded-none"
                >
                  {social.name}
                  <span className="hidden sm:block absolute -bottom-1 left-0 w-0 h-[1px] bg-[#050505] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          <a
            href="mailto:samyalhasansaif@gmail.com"
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={() => setCursorVariant('default')}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-[#050505] flex items-center justify-center font-display font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#050505] hover:text-[#FF3333] active:bg-[#050505] active:text-[#FF3333] transition-colors duration-300 self-end md:self-auto flex-shrink-0"
          >
            Email ↗
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-[#050505]/20 gap-4 sm:gap-6 text-center sm:text-left">
        <p className="font-display font-bold text-lg sm:text-xl tracking-tight">TheSaifBro</p>
        <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase font-medium">Kucchu Pucchu</p>
        <div className="flex items-center gap-6">
          <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase opacity-70">© 2026</p>
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-body text-[10px] sm:text-xs tracking-widest uppercase hover:opacity-70 active:opacity-50 transition-opacity flex items-center gap-1 font-bold cursor-pointer"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
