import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      setMousePosition({ x: clientX, y: clientY });
      
      // Check if hovering over clickable elements
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
      let isClickable = false;
      
      if (target && target.tagName) {
        try {
          isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                        target.tagName.toLowerCase() === 'a' || 
                        target.tagName.toLowerCase() === 'button' ||
                        !!target.closest('a') || 
                        !!target.closest('button');
        } catch (err) {
          // Ignore errors for SVG elements or text nodes
        }
      }
                          
      setIsHovering(isClickable);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateMousePosition, { passive: true });
    window.addEventListener('touchstart', updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
      window.removeEventListener('touchstart', updateMousePosition);
    };
  }, []);

  const sparkles = [
    { id: 1, x: -25, y: -35, size: 4, delay: 0 },
    { id: 2, x: 30, y: -25, size: 3, delay: 0.2 },
    { id: 3, x: -20, y: 30, size: 5, delay: 0.4 },
    { id: 4, x: 35, y: 20, size: 3, delay: 0.1 },
    { id: 5, x: 0, y: -45, size: 4, delay: 0.5 },
    { id: 6, x: -40, y: 0, size: 3, delay: 0.3 },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
        style={{
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          maskImage: 'radial-gradient(circle, black 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 60%)',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(188,19,254,0.15) 0%, rgba(0,0,0,0) 60%)' 
            : 'radial-gradient(circle, rgba(0,243,255,0.1) 0%, rgba(0,0,0,0) 60%)',
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-[100px] h-[100px] pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
      >
        {isHovering && sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: 50 + sparkle.x,
              top: 50 + sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              boxShadow: '0 0 10px 2px rgba(188,19,254,0.8)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </>
  );
}
