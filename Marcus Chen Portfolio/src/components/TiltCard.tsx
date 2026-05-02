import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export default function TiltCard({ children, className = '', tiltAmount = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX(((y - centerY) / centerY) * -tiltAmount);
    setRotateY(((x - centerX) / centerX) * tiltAmount);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={className}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(62,207,142,0.15) 0%, transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
