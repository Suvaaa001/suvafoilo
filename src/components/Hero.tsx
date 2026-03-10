import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const roles = ["AI Developer", "Robotics Enthusiast", "Embedded Systems Engineer"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#00f3ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-[#bc13fe] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-96 h-96 bg-[#4a00e0] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#00f3ff] font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
            Welcome to my universe
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient">Suvadip Mandal</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-3xl text-gray-300 font-light">
              I am a <span className="font-medium text-white">{currentText}</span>
              <span className="animate-pulse text-[#bc13fe]">|</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 243, 255, 0.6)", borderColor: "rgba(0, 243, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[#050505] font-display rounded-full border border-white/10 z-20"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(188, 19, 254, 0.6)", borderColor: "rgba(188, 19, 254, 0.8)", backgroundColor: "rgba(188, 19, 254, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-8 py-4 text-sm font-bold text-white bg-transparent font-display rounded-full border border-white/10 z-20"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
