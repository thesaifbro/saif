import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "BROSMART",
    year: "2026",
    description: "A digital marketplace for OTT subscriptions and gaming top-ups.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "https://brosmart.shop/",
    image: "https://files.catbox.moe/cu7ow0.jpg"
  },
  {
    id: "02",
    title: "JHAKKAS",
    year: "2026",
    description:
      "Jhakkas — A modern streetwear e-commerce website focused on bold fashion, smooth shopping experience, and premium UI/UX.",
    technologies: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
    liveUrl: "https://www.jhakkasbd.com/",
    image: "https://files.catbox.moe/znxyzd.jpg"
  },
  {
    id: "03",
    title: "BOOKMART",
    year: "2026",
    description:
      "BooksMart — A modern online bookstore designed for seamless book discovery, browsing, and shopping with a clean and user-friendly interface.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://booksmartshopbd.vercel.app/",
    image: "https://files.catbox.moe/q9c0p3.jpg"
  },
];

export function Projects() {
  const { setCursorVariant } = useCursor();

  return (
    <section
      className="py-20 md:py-36 bg-[#050505] relative z-10"
      id="work"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex justify-between items-end mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight uppercase text-[#F5F5F0]">
              SELECTED
              <br />
              PROJECTS
            </h2>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-[#666666] font-mono text-xs sm:text-sm md:text-base pb-1.5 md:pb-3"
          >
            (04)
          </motion.span>
        </div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full h-[1px] bg-white/[0.08] origin-left mb-12 md:mb-24"
        />

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-28">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-60px"
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-14 items-center"
            >

              {/* Left Column: Clickable Image */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live website`}
                onMouseEnter={() => setCursorVariant('project')}
                onMouseLeave={() => setCursorVariant('default')}
                className="lg:col-span-6 xl:col-span-6 block w-full aspect-[16/10] bg-[#0c0c0c] border border-white/[0.04] relative overflow-hidden rounded-sm group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <>
                    {/* Subtle Dot Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                      style={{
                        backgroundImage:
                          `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                      }}
                    />

                    {/* Overlay Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-[#FF3333]/0 group-hover:bg-[#FF3333]/[0.03] transition-colors duration-700" />
                  </>
                )}

                {/* Subtle Watermark */}
                <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-6 font-display font-black text-4xl sm:text-5xl md:text-7xl text-white/[0.03] leading-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500">
                  {project.id}
                </div>
              </a>

              {/* Right Column: Details */}
              <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center lg:pl-2">

                {/* Meta Row */}
                <div className="flex items-center gap-3 mb-2.5 sm:mb-3.5">
                  <span className="text-[#FF3333] font-mono text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    PROJECT {project.id}
                  </span>

                  <div className="w-6 sm:w-8 md:w-10 h-[1px] bg-white/20" />

                  <span className="text-[#666666] font-mono text-[10px] sm:text-[11px] md:text-xs">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#F5F5F0] mb-2.5 sm:mb-3.5 tracking-tight uppercase leading-none">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#888888] text-xs sm:text-sm md:text-[15px] mb-5 sm:mb-6 leading-relaxed font-body max-w-md">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 sm:mb-7">
                  <h4 className="text-[#666666] text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.25em] uppercase mb-2">
                    TECHNOLOGIES
                  </h4>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 rounded-full border border-white/[0.08] bg-[#0e0e0e] text-[10px] sm:text-[11px] font-normal tracking-wide text-[#b0b0b0] transition-all duration-300 hover:border-white/20 hover:text-white cursor-default select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 sm:gap-7">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="group flex items-center gap-1.5 sm:gap-2 py-1 text-xs font-bold text-white tracking-[0.15em] hover:text-[#FF3333] active:text-[#FF3333] transition-colors uppercase"
                  >
                    LIVE DEMO

                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                      ↗
                    </span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
