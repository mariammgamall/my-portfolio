import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaEye, FaTimes, FaExternalLinkAlt, FaAward as FaAwardIcon } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<{ title: string; image: string; pdf?: string } | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const { t } = useLanguage();
  const certificates = t.certifications.items;

  // Display only first 3 certificates on main page
  const displayedCerts = certificates.slice(0, 3);

  const openCertModal = (cert: { title: string; image: string; pdf?: string }) => {
    setActiveCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertModal = () => {
    setActiveCert(null);
    if (!showAllModal) {
      document.body.style.overflow = '';
    }
  };

  const openAllCertsModal = () => {
    setShowAllModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAllCertsModal = () => {
    setShowAllModal(false);
    if (!activeCert) {
      document.body.style.overflow = '';
    }
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
            {t.certifications.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Grid (3 items max) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCerts.map((cert, idx) => (
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
                  onClick={() => openCertModal(cert)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <FaEye size={14} />
                  {t.certifications.viewCert}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="mt-16 text-center">
          <button
            onClick={openAllCertsModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-teal hover:opacity-95 text-white shadow-xl hover:shadow-accent-indigo/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
          >
            <FaAwardIcon size={16} />
            <span>{t.certifications.viewAll}</span>
          </button>
        </div>
      </div>

      {/* All Certificates Page Modal (z-[100] above fixed navbar) */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllCertsModal}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-6xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent-indigo/10 dark:bg-accent-teal/10 text-accent-indigo dark:text-accent-teal">
                    <FaAward size={18} />
                  </div>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white">
                    {t.certifications.allModalTitle}
                  </h3>
                </div>
                <button
                  onClick={closeAllCertsModal}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Grid Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 dark:bg-slate-950/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className="glass-card p-6 flex flex-col h-full border-slate-200/50 dark:border-slate-800/40 relative bg-white dark:bg-slate-900"
                    >
                      <div className="p-3 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 text-accent-indigo dark:text-accent-teal mb-4">
                        <FaAward size={18} />
                      </div>
                      <h4 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6">
                        {cert.issuer}
                      </p>
                      <button
                        onClick={() => openCertModal(cert)}
                        className="mt-auto w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs md:text-sm font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-all cursor-pointer"
                      >
                        <FaEye size={14} />
                        {t.certifications.viewCert}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Single Certificate Image Preview Modal (z-[110] above fixed navbar) */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 md:p-6 pt-20 md:pt-24 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCertModal}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10">
                <h3 className="font-display font-bold text-sm md:text-base text-slate-900 dark:text-white truncate pr-4">
                  {activeCert.title}
                </h3>
                <div className="flex items-center gap-2">
                  {activeCert.pdf && (
                    <a
                      href={activeCert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-indigo/10 dark:bg-accent-teal/10 text-accent-indigo dark:text-accent-teal text-xs font-bold hover:bg-accent-indigo/20 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span className="hidden sm:inline">{t.certifications.openPdf}</span>
                    </a>
                  )}
                  <button
                    onClick={closeCertModal}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              {/* Image Preview Container */}
              <div className="flex-1 bg-slate-950 flex items-center justify-center p-3 md:p-6 overflow-auto min-h-[300px]">
                <img 
                  src={activeCert.image} 
                  alt={activeCert.title} 
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
