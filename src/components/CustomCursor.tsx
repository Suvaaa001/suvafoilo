import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') || 
                          target.closest('button');
                          
      setIsHovering(!!isClickable);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 mix-blend-screen"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        style={{
          background: 'radial-gradient(circle, rgba(0,243,255,0.08) 0%, rgba(188,19,254,0.03) 40%, rgba(0,0,0,0) 70%)',
        }}
      />
      
      {/* Small cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-screen bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? '#bc13fe' : '#00f3ff',
          boxShadow: isHovering ? '0 0 15px #bc13fe' : '0 0 10px #00f3ff'
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
      />
    </>
  );
}
