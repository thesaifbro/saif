import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface TechCategory {
  title: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    title: "DEVELOPMENT",
    items: [
      "C",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Node.js",
      "Express.js"
    ]
  },
  {
    title: "DATABASE",
    items: [
      "MongoDB",
      "Firebase",
      "supabase"
    ]
  },
  {
    title: "TOOLS",
    items: [
      "Github",
      "codeblock",
      "Visual Code Studio",
      "Google Ai Studio",
      "Vercel",
      "Lovable",
      "Notion"
    ]
  }
];

export function Powers() {
  const { setCursorVariant } = useCursor();

  return (
    <section className="py-20 md:py-36 bg-[#050505] relative z-10 overflow-hidden" id="powers">
      {/* Background Watermark Typography: "DEVELOPER" */}
      <div 
        aria-hidden="true" 
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display font-black text-[18vw] md:text-[13.5vw] tracking-tighter leading-none text-white/[0.025] uppercase whitespace-nowrap block">
          SAIF
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24"
        >
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-[#F5F5F0]">
            EXPERTISE <span className="font-serif italic font-normal text-white/40 text-[0.8em] ml-1">&</span>
            <br />
            TECHNOLOGIES
          </h2>
          {/* White Dot Indicator */}
          <div className="w-2.5 h-2.5 rounded-full bg-white mt-4 sm:mt-6 md:mt-8 shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 lg:gap-20">
          {techCategories.map((category, colIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: colIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {/* Category Header */}
              <h3 className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-[#F5F5F0] font-bold">
                {category.title}
              </h3>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-white/[0.08] mt-2.5 md:mt-4 mb-5 md:mb-10" />

              {/* Items List */}
              <ul className="flex flex-col gap-3 md:gap-5">
                {category.items.map((item, itemIdx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: colIdx * 0.1 + itemIdx * 0.04, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="group flex items-center gap-3 md:gap-4 cursor-default"
                  >
                    {/* Horizontal Line Dash (—) */}
                    <span 
                      className="w-3.5 md:w-5 h-[1px] bg-white/25 group-hover:w-7 group-hover:bg-[#FF3333] transition-all duration-300 flex-shrink-0" 
                      aria-hidden="true" 
                    />
                    
                    {/* Item Name */}
                    <span className="font-body text-sm sm:text-base md:text-lg text-[#F5F5F0]/85 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 font-normal select-none">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
