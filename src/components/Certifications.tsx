import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaEye, FaTimes } from 'react-icons/fa';

export default function Certifications() {
  const [activeCertUrl, setActiveCertUrl] = useState<string | null>(null);
  const [activeCertTitle, setActiveCertTitle] = useState<string>('');

  const certifications = [
    { title: "Elements of AI", issuer: "University of Helsinki & MinnaLearn", file: "/certificates/Elements of AI - University of Helsinki & MinnaLearn.png" },
    { title: "EF SET C2 Proficient (77/100)", issuer: "EF SET", file: "/certificates/EF SET C2 Proficient Certificate.pdf" },
    { title: "Industrial Training Certificate", issuer: "AMOC", file: "/certificates/Industrial Training Certificate - AMOC.jpeg" },
    { title: "SASEC CS Internship Certificate", issuer: "SASEC", file: "/certificates/SASEC CS Internship Certificate.pdf" },
    { title: "Generative AI Internship Certificate", issuer: "Tips Hindawi", file: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
    { title: "Decode Labs AI Internship Certificate", issuer: "Decode Labs", file: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" }, // Fallback to Tips Hindawi
    { title: "Syntecx Hub UI/UX Design Internship Certificate", issuer: "SyntecxHub", file: "/certificates/Syntecx Hub UIUX Design Internship Certificate.pdf" }
  ];

  const openCertModal = (fileUrl: string, title: string) => {
    setActiveCertUrl(fileUrl);
    setActiveCertTitle(title);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closeCertModal = () => {
    setActiveCertUrl(null);
    setActiveCertTitle('');
    document.body.style.overflow = ''; // Unlock background scrolling
  };

  return (
    <section id="certifications" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden">
      {/* Background blobs */}
      <div className="glow-orb top-1/4 left-1/10 w-80 h-80 bg-accent-teal/5 dark:bg-accent-teal/10 blur-[100px] pointer-events-none -z-10" />

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
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col h-full border-slate-200/50 dark:border-slate-800/40 relative group overflow-hidden"
            >
              {/* Top Row: Award badge icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-accent-indigo dark:text-accent-teal border border-slate-200/40 dark:border-slate-800">
                  <FaAward size={20} />
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="font-display font-bold text-lg md:text-xl text-slate-900 dark:text-white mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                {cert.issuer}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center mt-auto w-full">
                <button
                  onClick={() => openCertModal(encodeURI(cert.file), cert.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <FaEye size={14} />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View Modal Overlay */}
      <AnimatePresence>
        {activeCertUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCertModal}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 dark:border-slate-800/80">
                <h3 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white truncate pr-8">
                  {activeCertTitle}
                </h3>
                <button
                  onClick={closeCertModal}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Iframe or Image content */}
              <div className="flex-1 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4 overflow-auto">
                {activeCertUrl && activeCertUrl.match(/\.(jpeg|jpg|png|gif)$/i) ? (
                  <img 
                    src={activeCertUrl} 
                    alt={activeCertTitle} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                  />
                ) : (
                  <iframe
                    src={activeCertUrl || ''}
                    title={activeCertTitle}
                    className="w-full h-full border-none"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
