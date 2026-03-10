import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Brain, Code2, Rocket } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-[#00f3ff]" />,
      title: "Artificial Intelligence",
      desc: "Exploring neural networks, deep learning, and intelligent systems."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#bc13fe]" />,
      title: "Embedded Systems",
      desc: "Designing and programming microcontrollers for real-world applications."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#00f3ff]" />,
      title: "Robotics",
      desc: "Building autonomous machines and integrating hardware with software."
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#bc13fe]" />,
      title: "Machine Learning",
      desc: "Developing predictive models and data-driven algorithms."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a BTech student with a profound interest in bridging the gap between software and hardware. 
            My passion lies in Artificial Intelligence, Machine Learning, Robotics, and Embedded Systems. 
            I strive to build intelligent solutions that interact with the physical world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
