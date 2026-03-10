import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus('idle');

    emailjs.send(
      "service_7pcv6v9",
      "template_zq6pz13",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      "gyIPO0bYCJU-ZWV8a"
    ).then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }).finally(() => {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    });
  };

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
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -8, 
                borderColor: "rgba(0, 243, 255, 0.5)", 
                boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card p-8 rounded-2xl relative z-10"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.form 
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "rgba(188, 19, 254, 0.5)", 
                boxShadow: "0 0 20px rgba(188, 19, 254, 0.2)" 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card p-8 rounded-2xl space-y-6 relative z-10" 
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#00f3ff", boxShadow: "0 0 15px rgba(0,243,255,0.3)" }}
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-gray-400">Email</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#bc13fe", boxShadow: "0 0 15px rgba(188,19,254,0.3)" }}
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400">Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.01, borderColor: "#00f3ff", boxShadow: "0 0 15px rgba(0,243,255,0.3)" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none transition-colors resize-none"
                  placeholder="Hello Suvadip, I would like to discuss..."
                ></motion.textarea>
              </div>
              
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.6)", borderColor: "rgba(0, 243, 255, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#050505] font-display rounded-xl focus:outline-none border border-white/10 relative z-20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-[#00f3ff] text-sm font-medium"
                    >
                      <CheckCircle2 size={16} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-red-400 text-sm font-medium"
                    >
                      <XCircle size={16} />
                      <span>Failed to send message. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
