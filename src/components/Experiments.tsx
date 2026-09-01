import { motion } from "framer-motion";

export function Experiments() {
  const socialLinks = [
 
    {
      title: "Noobhai Gaming",
      type: "ON FACEBOOK",
      image: "https://files.catbox.moe/amvww2.jpg",
      url: "https://www.facebook.com/Noobhaigaming",
      theme: {
        color: "#1877F2",
        soft: "rgba(24, 119, 242, 0.10)",
        border: "rgba(24, 119, 242, 0.45)",
        glow: "rgba(24, 119, 242, 0.12)",
      },
    },
       {
      title: "Noobhai Gaming",
      type: "ON YOUTUBE",
      image: "https://files.catbox.moe/amvww2.jpg",
      url: "https://www.youtube.com/@NoobhaiGamingBD",
      theme: {
        color: "#FF0000",
        soft: "rgba(255, 0, 0, 0.10)",
        border: "rgba(255, 0, 0, 0.45)",
        glow: "rgba(255, 0, 0, 0.12)",
      },
    },
    {
      title: "The Saif Bro",
      type: "ON FACEBOOK",
      image: "https://files.catbox.moe/880e7t.jpg",
      url: "https://facebook.com/thesaifbrobd",
      theme: {
        color: "#1877F2",
        soft: "rgba(24, 119, 242, 0.10)",
        border: "rgba(24, 119, 242, 0.45)",
        glow: "rgba(24, 119, 242, 0.12)",
      },
    },
  ];

  const handleCardClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 mb-12 md:mb-16">

        <div>
          <span className="font-body text-[#FF3333] font-medium tracking-widest text-xs md:text-sm mb-3 block">
            (04)
          </span>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter text-[#F5F5F0]">
            SOCIAL PRESENCE
          </h2>
        </div>

        <p className="font-body text-[#858585] max-w-sm text-xs sm:text-sm md:text-base leading-relaxed">
          My digital presence across social platforms — where I share content,
          projects, ideas, and updates.
        </p>

      </div>


      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-7">

        {socialLinks.map((social, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => handleCardClick(social.url)}
            style={
              {
                "--theme-color": social.theme.color,
                "--theme-soft": social.theme.soft,
                "--theme-border": social.theme.border,
                "--theme-glow": social.theme.glow,
              } as React.CSSProperties
            }
            className="
              group
              relative
              w-[310px]
              h-[350px]
              sm:w-[330px]
              sm:h-[370px]
              md:w-[340px]
              md:h-[380px]

              overflow-hidden
              cursor-pointer
              rounded-xl

              bg-[#090909]

              border
              border-white/[0.08]

              hover:border-[var(--theme-border)]

              transition-all
              duration-500
            "
          >

            {/* Platform Background Glow */}
            <div
              className="
                absolute
                -top-32
                left-1/2
                -translate-x-1/2

                w-80
                h-80

                rounded-full

                opacity-0
                group-hover:opacity-100

                blur-3xl

                transition-opacity
                duration-700

                pointer-events-none
              "
              style={{
                background: social.theme.glow,
              }}
            />


            {/* Platform Gradient */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
              "
              style={{
                background: `linear-gradient(
                  180deg,
                  ${social.theme.soft} 0%,
                  transparent 48%,
                  transparent 100%
                )`,
              }}
            />


            {/* Inner Border */}
            <div className="
              absolute
              inset-[1px]
              rounded-[11px]
              border
              border-white/[0.025]
              pointer-events-none
            " />


            {/* =========================
                LOGO
            ========================== */}

            <div
              className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2

                w-[145px]
                h-[145px]
                sm:w-[155px]
                sm:h-[155px]

                rounded-full

                overflow-hidden

                bg-[#050505]

                border
                border-white/[0.10]

                group-hover:border-[var(--theme-color)]

                transition-all
                duration-500
              "
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
            >

              <img
                src={social.image}
                alt={social.title}
                className="
                  w-full
                  h-full
                  object-cover

                  group-hover:scale-110

                  transition-transform
                  duration-700
                "
              />

            </div>


            {/* Logo Glow */}
            <div
              className="
                absolute
                top-[105px]
                left-1/2
                -translate-x-1/2

                w-32
                h-32

                rounded-full

                blur-3xl

                opacity-0
                group-hover:opacity-100

                transition-opacity
                duration-700

                pointer-events-none
              "
              style={{
                background: social.theme.glow,
              }}
            />


            {/* =========================
                PLATFORM INDICATOR
            ========================== */}

            <div
              className="
                absolute
                top-[218px]
                left-7

                flex
                items-center
                gap-2
              "
            >

              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: social.theme.color,
                  boxShadow: `0 0 10px ${social.theme.color}`,
                }}
              />

              <span
                className="
                  text-[8px]
                  tracking-[0.22em]
                  uppercase
                  font-body
                  opacity-70
                "
                style={{
                  color: social.theme.color,
                }}
              >
                {social.type}
              </span>

            </div>


            {/* =========================
                CONTENT
            ========================== */}

            <div className="
              absolute
              left-7
              right-7
              bottom-7
            ">

              <h3
                className="
                  font-display
                  font-bold
                  text-xl
                  sm:text-[22px]
                  tracking-tight

                  text-[#F5F5F0]

                  group-hover:text-[var(--theme-color)]

                  transition-colors
                  duration-300
                "
              >
                {social.title}
              </h3>

            </div>


            {/* =========================
                ARROW
            ========================== */}

            <div
              className="
                absolute
                right-7
                bottom-7

                w-9
                h-9

                rounded-full

                border
                border-white/[0.15]

                bg-white/[0.02]

                flex
                items-center
                justify-center

                text-[#777]

                group-hover:text-[var(--theme-color)]
                group-hover:border-[var(--theme-color)]

                transition-all
                duration-300
              "
            >

              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="
                  group-hover:translate-x-[2px]
                  transition-transform
                  duration-300
                "
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>

            </div>


            {/* Bottom Accent */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                group-hover:w-full

                transition-all
                duration-500
              "
              style={{
                backgroundColor: social.theme.color,
              }}
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}