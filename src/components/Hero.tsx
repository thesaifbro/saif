import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaSnapchatGhost 
} from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { setCursorVariant } = useCursor();



  const leftSocials = [
    { name: 'GitHub', icon: FaGithub, href: "https://github.com/thesaifbro" },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: "https://www.linkedin.com/in/thesaifbro/" },
    { name: ' X', icon: FaTwitter, href: "https://x.com/thesaifbro" },
  ];

  const rightSocials = [
    { name: 'Facebook', icon: FaFacebookF, href: "https://www.facebook.com/thesaifbroo/" },
    { name: 'Instagram', icon: FaInstagram, href: "https://www.instagram.com/thesaifbro/" },
    { name: 'Snapchat', icon: FaSnapchatGhost, href: "https://www.snapchat.com/add/thesaifbro" },
  ];  

  const allSocials = [...leftSocials, ...rightSocials];

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#work') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 md:pb-10" id="home">
      {/* Spacer to maintain layout flex spacing */}
      <div className="h-2 sm:h-6" />

      {/* Main Centered Content (Image + Typography) */}
      <div className="relative my-auto flex flex-col items-center justify-center pointer-events-none z-10 px-4 py-6">
        
        {/* Centered Circular Image */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative z-10 w-[190px] h-[190px] xs:w-[220px] xs:h-[220px] sm:w-[270px] sm:h-[270px] md:w-[330px] md:h-[330px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden pointer-events-auto border border-[#F5F5F0]/15 bg-[#050505] mb-5 sm:mb-7 md:mb-10 cursor-pointer shadow-2xl transition-all duration-700 hover:border-[#FF3333]/40 hover:shadow-[0_0_60px_rgba(255,51,51,0.25)]"
          onMouseEnter={() => setCursorVariant('link')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <img 
            src="https://files.catbox.moe/9c79u5.jpg" 
            alt="Saif" 
            className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Subtle inner shadow rim for cinematic depth */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none group-hover:ring-[#FF3333]/30 transition-all duration-700"></div>
        </motion.div>

        {/* Typography (Below the Image) */}
        <div className="z-10 flex flex-col justify-center items-center pointer-events-none w-full px-2 max-w-5xl">
          <div className="overflow-hidden py-1 max-w-full">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-[6vw] xs:text-[5.5vw] sm:text-[4.5vw] md:text-[3.4vw] lg:text-[44px] leading-[1.15] md:leading-tight tracking-tight text-[#F5F5F0] uppercase text-center md:whitespace-nowrap"
            >
              <span className="block md:inline">S.M.</span>{" "}
              <span className="block md:inline whitespace-nowrap">Samy Al Hasan</span>{" "}
              <span className="block md:inline">Saif</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom content: Socials & Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 mt-auto pt-4">
        {/* Desktop Layout (md+) */}
        <div className="hidden md:grid grid-cols-3 items-center gap-4 w-full">
          {/* Left Side: GitHub, LinkedIn, Twitter/X */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-start gap-4 lg:gap-5 pointer-events-auto"
          >
            {leftSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#FF3333]/50 text-[#858585] hover:text-[#F5F5F0] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,51,51,0.2)] hover:scale-110 active:scale-95"
                >
                  <span className="transition-transform duration-300 group-hover:text-[#FF3333]">
                    <Icon size={17} />
                  </span>
                </a>
              );
            })}
          </motion.div>

          {/* Middle: Attention-Grabbing Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
            onClick={handleScrollDown}
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-[#FF3333] transition-colors duration-500 flex justify-center p-1 bg-black/30 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,51,51,0.3)]">
                <motion.div
                  animate={{
                    y: [0, 14, 0],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#FF3333] shadow-[0_0_8px_#FF3333]"
                />
              </div>

              <div className="flex items-center gap-1 text-[10px] tracking-[0.25em] font-mono uppercase text-[#858585] group-hover:text-[#F5F5F0] transition-colors duration-300">
                <span>SCROLL TO EXPLORE</span>
                <motion.div
                  animate={{
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronDown size={13} className="text-[#FF3333]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Facebook, Instagram, Snapchat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-end gap-4 lg:gap-5 pointer-events-auto"
          >
            {rightSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#FF3333]/50 text-[#858585] hover:text-[#F5F5F0] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(255,51,51,0.2)] hover:scale-110 active:scale-95"
                >
                  <span className="transition-transform duration-300 group-hover:text-[#FF3333]">
                    <Icon size={17} />
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="flex md:hidden flex-col items-center gap-3.5 w-full">
          {/* Social Icons in a Single Clean Symmetrical Row (Top) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2.5 sm:gap-3 pointer-events-auto"
          >
            {allSocials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] border border-white/[0.08] active:border-[#FF3333] text-[#858585] active:text-[#F5F5F0] transition-all shadow-sm active:scale-95"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator (Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center pointer-events-auto cursor-pointer group active:scale-95 transition-transform"
            onClick={handleScrollDown}
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] tracking-[0.2em] font-mono uppercase text-[#858585]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3333] animate-pulse" />
              <span>SCROLL DOWN</span>
              <ChevronDown size={12} className="text-[#FF3333]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
