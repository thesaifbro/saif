import { motion } from 'framer-motion';

export function Manifesto() {
  return (
    <section className="bg-[#F5F5F0] text-[#050505] py-20 sm:py-32 md:py-48 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h2 className="font-display font-black text-[13vw] sm:text-[14vw] md:text-[15vw] leading-[0.88] tracking-tighter mix-blend-difference">
            MAKE IT
            <br />
            <span className="text-[#FF3333]">FEEL</span>
            <br />
            ALIVE.
          </h2>
        </motion.div>
      </div>

      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </section>
  );
}
