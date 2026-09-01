import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { cn } from '../utils/cn';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [localTime, setLocalTime] = useState('');
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['work', 'about', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Dhaka Time
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => setCursorVariant('link');
  const handleMouseLeave = () => setCursorVariant('default');

  const navLinks = [
        { name: 'HOME', href: '/home', id: 'home', num: '01' },
    { name: 'ABOUT', href: '/about', id: 'about', num: '02' },
    { name: 'WORK', href: '/work', id: 'work', num: '03' },
    { name: 'EXPERIENCE', href: '/experience', id: 'experience', num: '04' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled ? "py-3 md:py-4 bg-[#050505]/70 backdrop-blur-xl border-b border-white/[0.06]" : "py-6 md:py-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group flex items-center gap-2 text-sm md:text-base font-display font-extrabold tracking-[0.25em] text-[#F5F5F0] uppercase transition-transform duration-300 active:scale-95 cursor-pointer"
            >
              <span className="text-[#FF3333] transition-transform duration-300 group-hover:rotate-45">✦</span>
              <span>TheSaifBro</span>
            </a>
          </div>

          {/* Center Floating Glass Pill (Desktop) */}
          <div className="hidden md:flex items-center bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl rounded-full px-5 py-1.5 transition-all duration-300">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState(null, '', link.href);
                      const target = document.querySelector(`#${link.id}`);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                      "relative px-4 py-1.5 rounded-full font-body text-[11px] tracking-[0.2em] font-medium transition-all duration-300 uppercase flex items-center gap-1.5 cursor-pointer",
                      isActive 
                        ? "text-[#F5F5F0] bg-white/[0.08] shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                        : "text-[#858585] hover:text-[#F5F5F0] hover:bg-white/[0.04]"
                    )}
                  >
                    <span className="text-[9px] text-[#FF3333] font-mono opacity-80">{link.num}</span>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Area: Live Time & Luxury Contact Button */}
          <div className="hidden md:flex items-center gap-6">
            {localTime && (
              <div className="hidden xl:flex flex-col items-end text-right font-mono text-[10px] tracking-wider text-[#858585]">
                <span className="text-white/40 uppercase">DHAKA / BD</span>
                <span className="text-[#F5F5F0] font-medium">{localTime}</span>
              </div>
            )}

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/contact');
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FF3333]/40 bg-[#FF3333]/5 text-[#F5F5F0] hover:bg-[#FF3333] hover:text-black font-body text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_0_20px_rgba(255,51,51,0.15)] hover:shadow-[0_0_30px_rgba(255,51,51,0.4)] cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/contact');
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3 py-1.5 rounded-full border border-[#FF3333]/40 bg-[#FF3333]/10 active:bg-[#FF3333] active:text-black text-[10px] font-bold tracking-widest text-[#F5F5F0] uppercase transition-colors cursor-pointer"
            >
              TALK ↗
            </a>
            <button 
              aria-label="Toggle Navigation Menu"
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white transition-colors active:bg-white/20 active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Luxury Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#050505]/95 flex flex-col justify-between p-6 sm:p-8 pt-28 pb-10 overflow-y-auto max-h-[100dvh]"
          >
            {/* Background ambient lighting */}
            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#FF3333]/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-4 sm:gap-6 relative z-10 my-auto py-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#858585] uppercase">NAVIGATION</span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', link.href);
                    const target = document.querySelector(`#${link.id}`);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline justify-between border-b border-white/[0.08] pb-3 sm:pb-4 active:text-[#FF3333] cursor-pointer"
                >
                  <span className="font-display font-black text-2xl sm:text-4xl text-[#F5F5F0] group-active:text-[#FF3333] transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-[#FF3333]">
                    {link.num} ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom info in Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="relative z-10 flex flex-col gap-3.5 border-t border-white/[0.08] pt-5 mt-auto"
            >
              <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[#858585]">
                <span>DHAKA, BANGLADESH</span>
                <span className="text-[#F5F5F0]">{localTime}</span>
              </div>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/contact');
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3.5 sm:py-4 rounded-full bg-[#FF3333] active:bg-[#ff4d4d] text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(255,51,51,0.4)] transition-transform active:scale-[0.98] cursor-pointer"
              >
                START A CONVERSATION ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

