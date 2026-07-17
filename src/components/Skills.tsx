import { motion } from 'framer-motion';
import { FaCode, FaGlobe, FaDatabase, FaBrain, FaTools } from 'react-icons/fa';

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      icon: <FaCode className="text-accent-indigo" size={24} />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Web & Frameworks',
      icon: <FaGlobe className="text-accent-blue" size={24} />,
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Databases & ORMs',
      icon: <FaDatabase className="text-accent-teal" size={24} />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Prisma ORM']
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain className="text-accent-purple" size={24} />,
      skills: [
        'PyTorch',
        'LangChain',
        'FAISS',
        'Hugging Face Embeddings',
        'Sentence Transformers',
        'PyPDFLoader',
        'Prompt Engineering'
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <FaTools className="text-slate-500 dark:text-slate-400" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'REST API Design', 'MVC Architecture', 'Monorepos']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } }
  } as const;

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-orb top-1/4 right-0 w-80 h-80 bg-accent-purple/10 -z-10" />
      <div className="glow-orb bottom-1/4 left-1/10 w-96 h-96 bg-accent-indigo/10 -z-10" />

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
            Technical Expertise
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="glass-card p-6 md:p-8 glass-card-hover border-slate-200/50 dark:border-slate-800/40 relative group overflow-hidden flex flex-col h-full"
            >
              {/* Decorative hover card glow */}
              <div className="absolute -inset-px bg-gradient-to-tr from-accent-indigo/10 via-transparent to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

              {/* Title & Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-205 dark:border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-lg md:text-xl text-slate-800 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Chips container */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="tech-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
