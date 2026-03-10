import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Initiate <span className="text-gradient">Connection</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss AI and Robotics? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="text-[#00f3ff]" /> Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 text-[#bc13fe]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">Email</p>
                    <p className="text-gray-300">suvadipm400@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 text-[#00f3ff]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono mb-1">Location</p>
                    <p className="text-gray-300">Earth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#bc13fe] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors resize-none"
                  placeholder="Hello Suvadip, I would like to discuss..."
                ></textarea>
              </div>
              <button className="glow-effect w-full relative group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center gap-2 w-full px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-[#050505] font-display rounded-xl focus:outline-none border border-white/10">
                  <span>Send Message</span>
                  <Send size={16} />
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
