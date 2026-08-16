import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaLayerGroup, FaInfoCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

interface ProjectItem {
  id: number;
  title: string;
  year: string;
  categories?: string[];
  tech: string[];
  description: string;
  demoLink: string;
  image: string;
}

interface CategoryFilter {
  id: string;
  label: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t } = useLanguage();

  const projects = (t.projects.items as ProjectItem[]) || [];
  const displayedProjects = projects.slice(0, 3);

  const categories: CategoryFilter[] = (t.projects.categories as CategoryFilter[]) || [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'aiml', label: 'AI/ML' },
  ];

  const modalFilteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.categories?.includes(activeCategory);
  });

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    if (!showAllModal) {
      document.body.style.overflow = '';
    }
  };

  const openAllProjectsModal = () => {
    setActiveCategory('all');
    setShowAllModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAllProjectsModal = () => {
    setShowAllModal(false);
    if (!selectedProject) {
      document.body.style.overflow = '';
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="glow-orb top-1/2 left-0 w-96 h-96 bg-accent-indigo/5 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.projects.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Main Projects Grid - 3 items featured */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => openProjectDetails(project)}
              className="glass-card flex flex-col h-full border-slate-200 dark:border-slate-800/40 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-accent-indigo/10 transition-all duration-300 cursor-pointer bg-white dark:bg-slate-900"
            >
              {/* Card image header - Edge-to-edge image cover */}
              <div className="w-full h-48 sm:h-56 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                  draggable="false"
                  loading="lazy"
                />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-accent-indigo dark:group-hover:text-accent-teal transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tItem, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] md:text-xs px-2.5 py-0.5 font-semibold rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-350 border border-slate-200/40 dark:border-slate-800/40"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between mt-auto border-t border-slate-100 dark:border-slate-800/60 pt-4">
                  <span className="flex items-center gap-2 text-xs md:text-sm font-bold text-accent-indigo dark:text-accent-teal group-hover:underline">
                    <FaInfoCircle size={14} />
                    {t.projects.viewDetails}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <button
            onClick={openAllProjectsModal}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-teal hover:opacity-95 text-white shadow-xl hover:shadow-accent-indigo/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
          >
            <FaLayerGroup size={16} />
            <span>{t.projects.viewAll}</span>
          </button>
        </div>
      </div>

      {/* All Projects Page Modal (z-[100] above fixed navbar) */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 pt-20 sm:pt-24 pb-4 sm:pb-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAllProjectsModal}
              className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-6xl max-h-[80vh] sm:max-h-[82vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-5 md:px-8 py-4 md:py-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 gap-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="p-2.5 rounded-xl bg-accent-indigo/10 dark:bg-accent-teal/10 text-accent-indigo dark:text-accent-teal flex-shrink-0">
                    <FaLayerGroup size={18} />
                  </div>
                  <h3 className="font-display font-extrabold text-lg md:text-2xl text-slate-900 dark:text-white truncate">
                    {t.projects.allModalTitle}
                  </h3>
                </div>
                <button
                  onClick={closeAllProjectsModal}
                  className="flex-shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content / All Projects Grid */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-8 bg-slate-50/50 dark:bg-slate-950/50 [will-change:scroll-position]">
                {/* Category Filter Tabs inside Modal */}
                <div className="flex justify-center items-center mb-6 md:mb-8 px-2">
                  <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`relative px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-colors duration-200 cursor-pointer select-none ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="modalActiveCategoryTab"
                              className="absolute inset-0 bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-teal rounded-xl -z-10 shadow-md shadow-accent-indigo/20"
                              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                            />
                          )}
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[300px]">
                  <AnimatePresence mode="popLayout">
                    {modalFilteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, scale: 0.92, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: -15 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={() => openProjectDetails(project)}
                        className="glass-card flex flex-col h-full border-slate-200 dark:border-slate-800/40 overflow-hidden group shadow-md hover:shadow-xl hover:shadow-accent-indigo/10 transition-all duration-300 bg-white dark:bg-slate-900 cursor-pointer"
                      >
                        <div className="w-full h-48 sm:h-52 relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                            draggable="false"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex flex-col flex-1">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 self-start mb-3">
                            {project.year}
                          </span>
                          <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-accent-indigo dark:group-hover:text-accent-teal transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.map((tItem, tIdx) => (
                              <span 
                                key={tIdx}
                                className="text-[10px] px-2 py-0.5 font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350"
                              >
                                {tItem}
                              </span>
                            ))}
                          </div>
                          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                            <span className="flex items-center gap-2 text-xs font-bold text-accent-indigo dark:text-accent-teal">
                              <FaInfoCircle size={12} />
                              {t.projects.viewDetails}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Details Modal / Tab (z-[110] above all) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 pb-4 sm:pb-8 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeProjectDetails}
              className="absolute inset-0 bg-slate-900/50 dark:bg-slate-950/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[80vh] sm:max-h-[82vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 [backface-visibility:hidden] [transform:translate3d(0,0,0)]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900 flex-shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 min-w-0 flex-1">
                  <span className="w-fit text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {selectedProject.year}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-white leading-snug break-words">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeProjectDetails}
                  className="flex-shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-5 md:p-8 space-y-6 text-start [will-change:scroll-position]">
                {/* Project Cover Image - Edge to Edge Image Display */}
                <div className="w-full h-56 sm:h-72 md:h-80 relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 shadow-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-top select-none"
                    draggable="false"
                  />
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-slate-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                    {t.projects.techStackTitle || 'Technologies & Tools'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tItem, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs px-3 py-1 font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-350 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    {t.projects.overviewTitle || 'Overview'}
                  </h4>
                  <p className="text-slate-650 dark:text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Actions */}
                {selectedProject.demoLink && (
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end">
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-accent-indigo to-accent-purple hover:opacity-95 text-white shadow-lg hover:scale-105 transition-all text-sm cursor-pointer"
                    >
                      <FaExternalLinkAlt size={14} />
                      {t.projects.liveDemo}
                    </a>
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
