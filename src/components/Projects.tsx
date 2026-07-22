import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaLayerGroup, FaInfoCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

interface ProjectItem {
  id: number;
  title: string;
  year: string;
  tech: string[];
  description: string;
  demoLink: string;
  image: string;
}

export default function Projects() {
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { t } = useLanguage();

  const projects = t.projects.items as ProjectItem[];
  const displayedProjects = projects.slice(0, 3);

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

        {/* Projects Grid - 3 items max */}
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
              className="glass-card flex flex-col h-full border-slate-200 dark:border-slate-800/40 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-accent-indigo/10 transition-all duration-300 cursor-pointer"
            >
              {/* Card image header */}
              <div className="w-full h-48 relative overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAllProjectsModal}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-6xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent-indigo/10 dark:bg-accent-teal/10 text-accent-indigo dark:text-accent-teal">
                    <FaLayerGroup size={18} />
                  </div>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white">
                    {t.projects.allModalTitle}
                  </h3>
                </div>
                <button
                  onClick={closeAllProjectsModal}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Modal Content / All Projects Grid */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 dark:bg-slate-950/50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => openProjectDetails(project)}
                      className="glass-card flex flex-col h-full border-slate-200 dark:border-slate-800/40 overflow-hidden group shadow-md hover:shadow-xl hover:shadow-accent-indigo/10 transition-all duration-300 bg-white dark:bg-slate-900 cursor-pointer"
                    >
                      <div className="w-full h-44 relative overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-center">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
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
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Project Details Modal / Tab (z-[110] above all) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {selectedProject.year}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white truncate max-w-xs md:max-w-md">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeProjectDetails}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-start">
                {/* Project Cover Image */}
                <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <div>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tItem, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs px-3 py-1 font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    Overview
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
