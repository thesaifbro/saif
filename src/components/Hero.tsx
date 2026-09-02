import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
} from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { setCursorVariant } = useCursor();

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 md:pb-10"
      id="home"
    >
      {/* Top Heading */}
      <div className="relative z-10 flex justify-center px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-[#F5F5F0]/50 uppercase"
        >
          Creative Technologist
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="relative my-auto flex flex-col items-center justify-center pointer-events-none z-10 px-4 py-6">
        {/* Profile Image */}
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
            filter: 'blur(20px)',
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1.8,
            delay: 2.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group relative z-10
            w-[190px] h-[190px]
            xs:w-[220px] xs:h-[220px]
            sm:w-[270px] sm:h-[270px]
            md:w-[330px] md:h-[330px]
            lg:w-[350px] lg:h-[350px]
            rounded-full overflow-hidden
            pointer-events-auto
            border border-[#F5F5F0]/15
            bg-[#050505]
            mb-5 sm:mb-7 md:mb-10
            cursor-pointer
            shadow-2xl
            transition-all duration-700
            hover:border-[#FF3333]/40
            hover:shadow-[0_0_60px_rgba(255,51,51,0.25)]
          "
          onMouseEnter={() => setCursorVariant('link')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <img
            src="https://files.catbox.moe/9c79u5.jpg"
            alt="Saif"
            draggable={false}
            className="
              block
              w-full
              h-full
              object-cover

              /* MOBILE — original image */
              max-md:grayscale-0
              max-md:brightness-100
              max-md:contrast-100

              /* DESKTOP — keep existing effect */
              md:grayscale
              md:brightness-95
              md:contrast-105

              md:group-hover:grayscale-0
              md:group-hover:brightness-100
              md:group-hover:contrast-100
              md:group-hover:scale-105

              transition-all
              duration-700
              ease-out
            "
            style={{
              filter: 'none',
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 2.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center"
        >
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] text-[#F5F5F0]/40 uppercase mb-2">
            S.M.
          </p>

          <h1 className="font-sans font-bold text-[clamp(2rem,9vw,5.5rem)] leading-[0.85] tracking-[-0.06em] text-[#F5F5F0]">
            SAMY AL HASAN
          </h1>

          <h2 className="font-sans font-bold text-[clamp(2rem,9vw,5.5rem)] leading-[0.85] tracking-[-0.06em] text-[#F5F5F0]">
            SAIF
          </h2>
        </motion.div>
      </div>

      {/* Desktop Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 3.2,
        }}
        className="hidden md:flex absolute left-6 bottom-8 z-20 flex-col gap-3"
      >
        {[
          { icon: FaGithub, url: 'https://github.com/' },
          { icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
          { icon: FaTwitter, url: 'https://x.com/' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/' },
          { icon: FaInstagram, url: 'https://www.instagram.com/' },
          { icon: FaSnapchatGhost, url: 'https://www.snapchat.com/' },
        ].map(({ icon: Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorVariant('link')}
            onMouseLeave={() => setCursorVariant('default')}
            className="
              w-8 h-8
              flex items-center justify-center
              rounded-full
              border border-[#F5F5F0]/15
              text-[#F5F5F0]/50
              hover:text-[#FF3333]
              hover:border-[#FF3333]/50
              transition-all duration-300
            "
          >
            <Icon size={13} />
          </a>
        ))}
      </motion.div>

      {/* Desktop Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3.5,
        }}
        className="absolute right-6 bottom-8 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#F5F5F0]/30 [writing-mode:vertical-rl]">
          SCROLL
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={16} className="text-[#F5F5F0]/40" />
        </motion.div>
      </motion.div>

      {/* Mobile Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 3.5,
        }}
        className="md:hidden relative z-20 flex items-center justify-between px-5"
      >
        <div className="flex items-center gap-3">
          {[
            { icon: FaGithub, url: 'https://github.com/' },
            { icon: FaLinkedinIn, url: 'https://www.linkedin.com/' },
            { icon: FaInstagram, url: 'https://www.instagram.com/' },
          ].map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
              className="
                w-8 h-8
                flex items-center justify-center
                rounded-full
                border border-[#F5F5F0]/15
                text-[#F5F5F0]/50
                active:text-[#FF3333]
                transition-all duration-300
              "
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[8px] tracking-[0.25em] text-[#F5F5F0]/30">
            SCROLL
          </span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown size={15} className="text-[#F5F5F0]/40" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
