import React from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const profiles = [
  {
    id: 1,
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    buttonText: 'View Profile',
    link: 'https://www.linkedin.com/in/suvadip-mandal-49ab27301',
    icon: <div className="text-[#00f3ff]"><FaLinkedin size={32} /></div>,
  },
  {
    id: 2,
    title: 'GitHub',
    description: 'Explore my main coding repositories',
    buttonText: 'View GitHub',
    link: 'https://github.com/Suvaaa001',
    icon: <div className="text-[#bc13fe]"><FaGithub size={32} /></div>,
  },
  {
    id: 3,
    title: 'GitHub Experiments',
    description: 'Side projects and experiments',
    buttonText: 'View Profile',
    link: 'https://github.com/suva390',
    icon: <div className="text-[#00f3ff]"><FaGithub size={32} /></div>,
  },
  {
    id: 4,
    title: 'LeetCode',
    description: 'My coding practice and problem solving',
    buttonText: 'View Profile',
    link: 'https://leetcode.com/u/Suva001/',
    icon: <div className="text-[#bc13fe]"><SiLeetcode size={32} /></div>,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100 } 
  },
};

export default function Connect() {
  return (
    <section id="connect" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Connect With <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find me across the web on these professional platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {profiles.map((profile) => (
            <motion.div variants={itemVariants} key={profile.id} className="h-full">
              <motion.a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8, 
                  borderColor: "rgba(188, 19, 254, 0.5)", 
                  boxShadow: "0 0 20px rgba(188, 19, 254, 0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group relative overflow-hidden h-full w-full z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f3ff]/5 to-[#bc13fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10, filter: "drop-shadow(0 0 10px rgba(188,19,254,0.8))" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mb-6 p-4 rounded-full bg-white/5 relative z-10"
                >
                  {profile.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold text-white mb-3 relative z-10 group-hover:text-[#00f3ff] transition-colors">
                  {profile.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                  {profile.description}
                </p>
                
                <div className="mt-auto relative z-10">
                  <span className="inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-200 bg-white/5 rounded-full group-hover:bg-white/10 border border-white/10 group-hover:border-[#bc13fe]/50">
                    {profile.buttonText}
                  </span>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
