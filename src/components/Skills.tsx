import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Arduino', level: 95 },
  { name: 'Embedded Systems', level: 80 },
  { name: 'Robotics', level: 85 },
  { name: 'Linux', level: 75 },
  { name: 'C/C++', level: 85 },
  { name: 'React', level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8, 
                borderColor: "rgba(188, 19, 254, 0.5)", 
                boxShadow: "0 0 20px rgba(188, 19, 254, 0.2)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group z-10"
            >
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] transition-all duration-500" style={{ width: `${skill.level}%`, opacity: 0.5 }} />
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] transition-all duration-500 w-0 group-hover:w-full opacity-100" style={{ maxWidth: `${skill.level}%` }} />
              
              <h3 className="text-lg font-mono font-medium text-white mt-2">{skill.name}</h3>
              <div className="mt-4 flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>Proficiency</span>
                <span className="text-[#00f3ff]">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
