import { motion } from 'framer-motion';

export function Marquee() {
  const text = "S.M. SAMY AL HASAN SAIF  •  CSE STUDENT • FULL-STACK DEVELOPER • TEAM LEADERSHIP  • PROJECT LEADERSHIP •CREATIVE TECHNOLOGIST • ";
  const repeatedText = text.repeat(3);

  return (
    <section className="bg-[#F5F5F0] text-[#050505] py-4 md:py-6 rotate-[-1deg] scale-[1.02] overflow-hidden flex items-center z-20 relative mt-4 md:mt-6">
      <div className="relative w-full flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex font-display font-black text-[24px] md:text-[32px] tracking-tighter uppercase italic px-4 select-none"
        >
          <span>{repeatedText}</span>
        </motion.div>
      </div>
    </section>
  );
}
