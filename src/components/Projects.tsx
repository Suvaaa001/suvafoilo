import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Arduino Weather Station",
    description: "A comprehensive weather monitoring system using Arduino, DHT11, BMP180, and an OLED display to track real-time environmental data.",
    image: "https://picsum.photos/seed/arduino/800/600",
    tags: ["Arduino", "C++", "Sensors", "IoT"],
    github: "#"
  },
  {
    title: "AI Robot using Raspberry Pi",
    description: "An autonomous robot powered by Raspberry Pi, featuring computer vision for object detection and path planning algorithms.",
    image: "https://picsum.photos/seed/robotics/800/600",
    tags: ["Raspberry Pi", "Python", "OpenCV", "AI"],
    github: "#"
  },
  {
    title: "Telegram Reminder Bot",
    description: "A smart Telegram bot built with Python that schedules reminders, manages tasks, and integrates with external APIs for daily updates.",
    image: "https://picsum.photos/seed/bot/800/600",
    tags: ["Python", "Telegram API", "Automation"],
    github: "#"
  },
  {
    title: "Radar Tracking System",
    description: "A miniature radar system using ultrasonic sensors and a servo motor, visualizing detected objects on a Processing-based UI.",
    image: "https://picsum.photos/seed/radar/800/600",
    tags: ["Arduino", "Processing", "Hardware"],
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work in hardware, software, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-[#00f3ff] transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-[#bc13fe] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#00f3ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-[#bc13fe] bg-[#bc13fe]/10 rounded-full border border-[#bc13fe]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
