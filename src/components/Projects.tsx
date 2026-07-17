import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Full-Stack Learning Management System (LMS)',
      year: '2026',
      tech: ['Next.js 15', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL (Neon)', 'Vercel'],
      description: 'Production-grade monorepo LMS with a Next.js 15 App Router frontend and Express + TypeScript + Prisma backend, deployed on Vercel with live Neon PostgreSQL. Implemented 5 specialized user roles (Admin, Doctor, TA, Student, Support Agent), full Arabic/English RTL/LTR switching, and a custom glassmorphic design system with micro-animations.',
      demoLink: 'https://mariam-lms-portal-pink.vercel.app/',
      githubLink: 'https://github.com/mariammgamall/Learning-Management-System',
      image: '/images/projects-images/lms-project-image.png'
    },
    {
      id: 2,
      title: 'Aura — Customer Ordering System',
      year: '2026',
      tech: ['Flask', 'Python', 'Bootstrap', 'REST APIs', 'SQLAlchemy'],
      description: 'Full-stack ordering platform with dynamic menu, real-time order tracking, and admin dashboard, built with RESTful Flask routes following MVC and OOP principles. Clean state-controlled user inputs and responsive menu visual structures.',
      demoLink: 'https://customer-ordering-system.onrender.com/',
      githubLink: 'https://github.com/mariammgamall/Customer-Ordering-System',
      image: '/images/projects-images/cos-project-image.png'
    },
    {
      id: 3,
      title: 'AI Knowledge & Reasoning Engine',
      year: '2025',
      tech: ['Python', 'LangChain', 'FAISS', 'Hugging Face', 'PyTorch', 'Embeddings'],
      description: 'RAG pipeline over multi-document PDF corpora using PyPDFLoader, Hugging Face Sentence Transformers, and FAISS for low-latency similarity search, orchestrated with LangChain. Applied prompt engineering and iterative testing to improve answer grounding and reduce hallucinations.',
      demoLink: '', // No live demo link
      githubLink: 'https://github.com/mariammgamall/Smart-RAG',
      image: '/images/projects-images/smart-rag-project-image.png'
    }
  ];

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
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card flex flex-col h-full border-slate-205 dark:border-slate-800/40 relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-accent-indigo/5 transition-all duration-300"
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

                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] md:text-xs px-2.5 py-0.5 font-semibold rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-350 border border-slate-200/40 dark:border-slate-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-800/60 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-650 dark:text-slate-400 hover:text-accent-indigo dark:hover:text-accent-teal transition-colors"
                  >
                    <FaGithub size={16} />
                    GitHub Repo
                  </a>
                  {project.demoLink && project.demoLink !== '#' && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-650 dark:text-slate-400 hover:text-accent-indigo dark:hover:text-accent-teal transition-colors"
                    >
                      <FaExternalLinkAlt size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
