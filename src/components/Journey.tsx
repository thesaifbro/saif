import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  institution: string;
  location?: string;
  logo: string;
  align: 'left' | 'right';
  active?: boolean;
}

export function Journey() {
  const { setCursorVariant } = useCursor();

  const timelineData: TimelineItem[] = [
    {
      year: "2023",
      title: "SSC",
      subtitle: "Completed Secondary School Certificate",
      institution: "Monipur Uccha Viddalaya & College ( Main Boys)",
      location: "Dhaka, Bangladesh",
      logo: "https://files.catbox.moe/1rmrsh.jpg",
      align: "left",
      active: false,
    },
    {
      year: "2025",
      title: "HSC",
      subtitle: "Completed Higher Secondary Certificate",
      institution: "Monipur Uccha Viddalaya & College (College Campus)",
      location: "Dhaka, Bangladesh",
      logo: "https://files.catbox.moe/1rmrsh.jpg",
      align: "right",
      active: false,
    },
    {
      year: "2026",
      title: "Started BSc in CSE",
      subtitle: "Computer Science & Engineering",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      location: "Dhaka, Bangladesh",
      logo: "https://files.catbox.moe/9pgwm4.jpg",
      align: "left",
      active: true,
    },
  ];

  return (
    <section className="py-20 md:py-40 bg-[#050505] relative z-10 border-t border-white/5" id="journey">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#FF3333]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-[#FF3333] uppercase block mb-2 sm:mb-3"
          >
            MY JOURNEY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase"
          >
            <span className="text-[#F5F5F0]">THE </span>
            <span className="text-outline text-[#F5F5F0]">TIMELINE</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF3333]/60 to-transparent md:-translate-x-1/2 z-0"></div>

          <div className="flex flex-col gap-14 md:gap-28">
            {timelineData.map((item, index) => {
              const isLeft = item.align === 'left';

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-16 items-center w-full pl-8 sm:pl-10 md:pl-0"
                >
                  {/* Central Glow Node */}
                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-3.5 h-3.5 rounded-full bg-[#050505] transition-all duration-500 flex items-center justify-center ${
                      item.active 
                        ? 'border-2 border-[#FF3333] shadow-[0_0_15px_#FF3333]' 
                        : 'border-2 border-white/40 hover:border-[#FF3333]'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-[#FF3333]' : 'bg-white/60'}`} />
                    </div>
                  </div>

                  {/* Left Column (Text on Left or Logo on Left) */}
                  <div className={`w-full ${isLeft ? 'md:text-right order-1' : 'order-2 md:order-1'}`}>
                    {isLeft ? (
                      /* Text Content when aligned Left */
                      <div className="flex flex-col md:items-end">
                        <span className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-white/10 select-none leading-none mb-1">
                          {item.year}
                        </span>
                        <div className="inline-flex items-center gap-2 mb-1">
                          <span className="text-[#FF3333] font-mono text-xs font-bold">0{index + 1}</span>
                          <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#F5F5F0] tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-body text-xs sm:text-sm md:text-base text-[#858585] max-w-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    ) : (
                      /* Institution & Logo Card when aligned Right (rendered in Left column on desktop) */
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                        className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#FF3333]/40 hover:bg-white/[0.04] transition-all duration-300 shadow-xl backdrop-blur-md md:mr-4 md:justify-end"
                      >
                        <div className="flex flex-col md:text-right min-w-0 flex-1">
                          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FF3333] uppercase">INSTITUTION</span>
                          <h4 className="font-display font-semibold text-sm sm:text-base md:text-lg text-[#F5F5F0] leading-snug break-words">
                            {item.institution}
                          </h4>
                          {item.location && (
                            <span className="text-[11px] sm:text-xs text-[#858585] mt-0.5">{item.location}</span>
                          )}
                        </div>
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden bg-black/40 border border-white/10 flex-shrink-0 p-1 shadow-inner group">
                          <img 
                            src={item.logo} 
                            alt={item.institution}
                            className="w-full h-full object-cover rounded-md sm:rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column (Logo on Right or Text on Right) */}
                  <div className={`w-full ${isLeft ? 'order-2' : 'order-1 md:order-2 md:text-left'}`}>
                    {isLeft ? (
                      /* Institution & Logo Card when aligned Left (rendered in Right column on desktop) */
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setCursorVariant('link')}
                        onMouseLeave={() => setCursorVariant('default')}
                        className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#FF3333]/40 hover:bg-white/[0.04] transition-all duration-300 shadow-xl backdrop-blur-md md:ml-4"
                      >
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl overflow-hidden bg-black/40 border border-white/10 flex-shrink-0 p-1 shadow-inner group">
                          <img 
                            src={item.logo} 
                            alt={item.institution}
                            className="w-full h-full object-cover rounded-md sm:rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FF3333] uppercase">INSTITUTION</span>
                          <h4 className="font-display font-semibold text-sm sm:text-base md:text-lg text-[#F5F5F0] leading-snug break-words">
                            {item.institution}
                          </h4>
                          {item.location && (
                            <span className="text-[11px] sm:text-xs text-[#858585] mt-0.5">{item.location}</span>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      /* Text Content when aligned Right */
                      <div className="flex flex-col md:items-start">
                        <span className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl text-white/10 select-none leading-none mb-1">
                          {item.year}
                        </span>
                        <div className="inline-flex items-center gap-2 mb-1">
                          <span className="text-[#FF3333] font-mono text-xs font-bold">0{index + 1}</span>
                          <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#F5F5F0] tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="font-body text-xs sm:text-sm md:text-base text-[#858585] max-w-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

