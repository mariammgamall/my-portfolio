import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaExternalLinkAlt, FaAward as FaAwardIcon, FaSearch } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<{ title: string; image: string; pdf?: string } | null>(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const { t } = useLanguage();
  const certificates = t.certifications.items;

  // Display first 6 certificates on main page (2 rows of 3 columns)
  const displayedCerts = certificates.slice(0, 6);

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

        {/* Certifications Grid (3 columns layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => openCertModal(cert)}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Top Certificate Image Container */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-800/80 overflow-hidden border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-center">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                    draggable="false"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-slate-400">
                    <FaAward size={48} className="text-slate-300 dark:text-slate-700 mb-2" />
                  </div>
                )}

                {/* Hover Overlay with Magnifying Glass / View Certificate button */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                  <div className="px-4 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-bold text-xs md:text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <FaSearch className="text-accent-indigo dark:text-accent-teal text-xs md:text-sm" />
                    <span>{t.certifications.viewCert}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Certificate Info Box */}
              <div className="p-5 md:p-6 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-center">
                <h3 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1.5 leading-snug line-clamp-1 group-hover:text-accent-indigo dark:group-hover:text-accent-teal transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button if more certificates exist */}
        {certificates.length > 6 && (
          <div className="mt-16 text-center">
            <button
              onClick={openAllCertsModal}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-teal hover:opacity-95 text-white shadow-xl hover:shadow-accent-indigo/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
            >
              <FaAwardIcon size={16} />
              <span>{t.certifications.viewAll}</span>
            </button>
          </div>
        )}
      </div>

      {/* All Certificates Page Modal (z-[100] above fixed navbar) */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAllCertsModal}
              className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-6xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0">
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
              <div className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 bg-slate-50/50 dark:bg-slate-950/50 [will-change:scroll-position]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      onClick={() => openCertModal(cert)}
                      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                    >
                      <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-800/80 overflow-hidden border-b border-slate-100 dark:border-slate-800/60 flex items-center justify-center">
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                            draggable="false"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-6 text-slate-400">
                            <FaAward size={48} className="text-slate-300 dark:text-slate-700 mb-2" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                          <div className="px-4 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-bold text-xs md:text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <FaSearch className="text-accent-indigo dark:text-accent-teal text-xs md:text-sm" />
                            <span>{t.certifications.viewCert}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 md:p-6 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-center">
                        <h4 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white mb-1.5 leading-snug line-clamp-1 group-hover:text-accent-indigo dark:group-hover:text-accent-teal transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                          {cert.issuer}
                        </p>
                      </div>
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
              transition={{ duration: 0.2 }}
              onClick={closeCertModal}
              className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 flex-shrink-0 z-10">
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
                      <span>{t.certifications.openPdf}</span>
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

              {/* Image / PDF Preview Container */}
              <div className="flex-1 bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-3 md:p-6 overflow-auto overscroll-contain min-h-[350px]">
                {activeCert.image ? (
                  <img 
                    src={activeCert.image} 
                    alt={activeCert.title} 
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl select-none"
                    draggable="false"
                    loading="eager"
                  />
                ) : activeCert.pdf ? (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <iframe
                      src={`${activeCert.pdf}#view=FitH`}
                      title={activeCert.title}
                      className="w-full h-[60vh] md:h-[70vh] rounded-lg shadow-2xl border-0 bg-white"
                    />
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-12">
                    <p>No preview image or PDF available.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
