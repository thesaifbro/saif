import { motion } from 'framer-motion';

const experienceList = [
  { id: "01", title: "Scouting" },
  { id: "02", title: "Campus Ambassador" },
  { id: "03", title: "CA & CC Leadership" },
  { id: "04", title: "Team Leadership" },
  { id: "05", title: "Project & Event Management" },
];

export function Experience() {
  return (
    <section className="py-20 md:py-48 px-6 lg:px-12 max-w-7xl mx-auto" id="experience">
      <div className="mb-12 md:mb-32">
        <span className="font-body text-[#FF3333] font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">
          (03)
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter text-[#F5F5F0]">
          EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col border-t border-white/10">
        {experienceList.map((service) => (
          <motion.div
            key={service.id}
            initial="initial"
            whileHover="hover"
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 sm:py-8 md:py-16 border-b border-white/10 cursor-pointer relative overflow-hidden active:bg-white/[0.02]"
          >
            {/* Background hover fill */}
            <motion.div 
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 }
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[#FF3333]/5 -z-10 origin-bottom"
            />
            
            <div className="flex items-baseline gap-4 sm:gap-6 md:gap-12 relative z-10">
              <span className="font-body text-[#858585] text-xs sm:text-sm md:text-base tracking-widest group-hover:text-[#FF3333] transition-colors duration-300">
                {service.id}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-7xl lg:text-[6vw] tracking-tighter group-hover:text-[#FF3333] transition-colors duration-300 text-outline group-hover:text-outline-accent">
                {service.title}
              </h3>
            </div>

            <motion.div 
              variants={{
                initial: { x: -20, opacity: 0 },
                hover: { x: 0, opacity: 1 }
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-[#FF3333] text-[#FF3333] relative z-10 mt-4 md:mt-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
