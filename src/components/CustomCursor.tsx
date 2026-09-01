import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);
  const { cursorVariant } = useCursor();

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (isTouch) return null;

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#F5F5F0',
      mixBlendMode: 'difference' as any,
    },
    hidden: {
      opacity: 0,
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(245, 245, 240, 0.1)',
      border: '1px solid rgba(245, 245, 240, 0.5)',
      mixBlendMode: 'difference' as any,
    },
    project: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      width: 120,
      height: 120,
      backgroundColor: '#FF3333',
      color: '#050505',
      mixBlendMode: 'normal' as any,
    },
    image: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: 'rgba(255, 51, 51, 0.15)',
      border: '1px solid rgba(255, 51, 51, 0.6)',
      mixBlendMode: 'difference' as any,
    }
  };

  const textVariants = {
    project: "VIEW",
    image: "",
    default: "",
    link: "",
    hidden: ""
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-display font-bold text-sm tracking-widest"
      variants={variants}
      animate={cursorVariant}
      transition={{ 
        type: 'spring', 
        stiffness: 700, 
        damping: 35, 
        mass: 0.5 
      }}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'project' ? 1 : 0 }}
      >
        {textVariants[cursorVariant] || ""}
      </motion.span>
    </motion.div>
  );
}
