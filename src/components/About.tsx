import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-20 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5" id="about">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        {/* Left Side */}
        <div className="w-full md:w-1/3">
          <span className="font-body text-[#FF3333] font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">
            (02)
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter mb-6 md:mb-12 text-[#F5F5F0]">
            ABOUT THE MAKER
          </h2>
          
          <div className="flex flex-wrap md:flex-col gap-2.5 sm:gap-4 font-body text-[11px] sm:text-xs tracking-[0.2em] text-[#858585] uppercase">
            <p className="bg-white/[0.03] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-0">CSE Student</p>
            <p className="bg-white/[0.03] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-0">Full-Stack Developer</p>
            <p className="bg-white/[0.03] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-0">Team Leadership</p>
            <p className="bg-white/[0.03] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-0">Project & Event Management</p>
            <p className="bg-white/[0.03] md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-0">Creative Technologist</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.25] md:leading-[1.1] tracking-tight text-[#F5F5F0]"
          >
            I'm Saif — a CSE student and aspiring developer exploring the space where <span className="text-[#FF3333]">code</span> meets creativity through <span className="text-[#FF3333]">web development</span> and <span className="text-[#FF3333]">technology</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
