import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const trailX = useSpring(0, { damping: 30, stiffness: 200 });
  const trailY = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card-hover') ||
        target.closest('.card-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card-hover') ||
        target.closest('.card-hover')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY, trailX, trailY, isVisible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-screen"
        style={{ x: trailX, y: trailY }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
          style={{
            width: isHovering ? 48 : 24,
            height: isHovering ? 48 : 24,
            background: 'radial-gradient(circle, rgba(62,207,142,0.18) 0%, transparent 70%)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 8,
            height: 8,
            backgroundColor: '#3ecf8e',
            boxShadow: isHovering
              ? '0 0 24px rgba(62,207,142,0.72), 0 0 48px rgba(62,207,142,0.28)'
              : '0 0 12px rgba(62,207,142,0.45)',
          }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div
          className="rounded-full -translate-x-1/2 -translate-y-1/2 border border-accent-green/30"
          style={{
            width: 32,
            height: 32,
            boxShadow: '0 0 0 1px rgba(62,207,142,0.06), inset 0 0 18px rgba(62,207,142,0.04)',
          }}
        />
      </motion.div>
    </>
  );
}
