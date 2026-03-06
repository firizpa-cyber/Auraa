import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface BackgroundTextProps {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  opacity?: number;
  scale?: number;
  speed?: number;
}

export default function BackgroundText({ 
  text, 
  top, 
  left, 
  right, 
  bottom, 
  rotate = 0, 
  opacity = 0.08,
  scale = 1,
  speed = 0.2
}: BackgroundTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150 * speed, -150 * speed]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, 5]);

  return (
    <div 
      ref={ref}
      className="absolute pointer-events-none select-none z-10 overflow-hidden"
      style={{ top, left, right, bottom, transform: `rotate(${rotate}deg)` }}
    >
      <motion.div
        style={{ y, scale, opacity, filter: `blur(${blur}px)` }}
        className="text-[18vw] font-display font-black text-aura-navy/10 leading-none whitespace-nowrap"
      >
        {text}
      </motion.div>
    </div>
  );
}
