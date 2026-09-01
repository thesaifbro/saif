import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  const logo = "https://files.catbox.moe/9c79u5.jpg";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="
            fixed
            inset-0
            z-[100]
            flex
            flex-col
            items-center
            justify-center
            bg-[#050505]
            overflow-hidden
          "
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
        >

          {/* Background Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="
              absolute
              w-[420px]
              h-[420px]
              rounded-full
              bg-[#FF0000]/[0.045]
              blur-[120px]
              pointer-events-none
            "
          />


          {/* =========================
              LOGO + TEXT
          ========================== */}

          <div className="relative flex flex-col items-center">

            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
                y: -20,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                w-32
                h-32
                sm:w-36
                sm:h-36
                md:w-40
                md:h-40
                rounded-full
                overflow-hidden
                border
                border-white/10
                shadow-[0_0_50px_rgba(255,0,0,0.10)]
              "
            >
              <img
                src={logo}
                alt="TheSaifBro Logo"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </motion.div>


            {/* TheSaifBro Text */}
            <div className="overflow-hidden mt-7">

              <motion.h1
                initial={{
                  y: "110%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: "-110%",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  font-display
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  tracking-[0.08em]
                  text-[#F5F5F0]
                "
              >
                TheSaifBro
              </motion.h1>

            </div>

          </div>


          {/* =========================
              LOADING BAR
          ========================== */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              bottom-20
              left-1/2
              -translate-x-1/2
              w-48
              sm:w-56
              h-[1px]
              bg-white/20
              origin-center
            "
          >

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 2.1,
                delay: 0.55,
                ease: "linear",
              }}
              className="
                w-full
                h-full
                bg-white
                origin-left
              "
            />

          </motion.div>


          {/* Percentage */}
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.4,
            }}
            className="
              absolute
              bottom-[90px]
              left-[calc(50%+105px)]
              font-body
              text-[8px]
              tracking-[0.2em]
              text-white/30
            "
          >
            100%
          </motion.span>

        </motion.div>
      )}
    </AnimatePresence>
  );
}