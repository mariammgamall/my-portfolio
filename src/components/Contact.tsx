import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg('Please fill out all fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending email api call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden">
      {/* Background blobs */}
      <div className="glow-orb top-1/3 left-0 w-80 h-80 bg-accent-indigo/5 dark:bg-accent-indigo/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white leading-tight">
                Let's discuss your next project!
              </h3>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                Whether you want to recruit me for a software development internship, discuss retrieval-augmented reasoning models, or simply chat about tech, feel free to reach out. I'm always open to new connections and collaborations.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 my-8 lg:my-0">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-accent-indigo dark:text-accent-teal border border-slate-200/40 dark:border-slate-800">
                  <FaPhone size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Phone</h4>
                  <p className="text-sm md:text-base font-semibold text-slate-850 dark:text-slate-250">+20 128 087 3442</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-accent-indigo dark:text-accent-teal border border-slate-200/40 dark:border-slate-800">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Email</h4>
                  <a 
                    href="mailto:maryamgamal188@gmail.com" 
                    className="text-sm md:text-base font-semibold text-slate-850 dark:text-slate-250 hover:text-accent-indigo dark:hover:text-accent-teal transition-colors"
                  >
                    maryamgamal188@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-accent-indigo dark:text-accent-teal border border-slate-200/40 dark:border-slate-800">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Location</h4>
                  <p className="text-sm md:text-base font-semibold text-slate-850 dark:text-slate-250">Alexandria, Egypt</p>
                </div>
              </div>
            </div>

            {/* Social profiles row */}
            <div className="flex items-center space-x-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-6">
              <a
                href="https://github.com/mariammgamall"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-accent-indigo dark:hover:text-accent-teal transition-all border border-transparent dark:border-slate-800 hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/mariam-gamal-3b2408281"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-accent-indigo dark:hover:text-accent-teal transition-all border border-transparent dark:border-slate-800 hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form / Success Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden min-h-[420px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-semibold">
                        {errorMsg}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="glow-input"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="glow-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Hi Mariam, let's talk about..."
                        className="glow-input resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-accent-indigo to-accent-purple hover:opacity-95 text-white shadow-lg shadow-accent-indigo/10 disabled:opacity-50 hover:scale-[1.01] active:scale-95 transition-all text-sm md:text-base cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane size={14} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="text-accent-teal dark:text-accent-teal"
                    >
                      <FaCheckCircle size={60} />
                    </motion.div>
                    <div className="space-y-2 max-w-sm">
                      <h3 className="font-display font-extrabold text-2xl text-slate-905 dark:text-white">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        Thank you for reaching out, your message has been transmitted successfully. I will get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-350 text-xs md:text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:scale-105 active:scale-95 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
