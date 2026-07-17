import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaGraduationCap, 
  FaPalette, 
  FaBrain, 
  FaRobot, 
  FaServer, 
  FaIndustry 
} from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack .NET Web Developer',
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      period: 'July 2026 - Present',
      desc: 'Collaborating in an intensive professional training track to architect, develop, and test scalable web architectures using .NET Core, C#, Web APIs, and React. Refining database design using SQL Server and implementing security best practices.',
      icon: <FaLaptopCode size={18} />,
      color: 'text-accent-indigo bg-accent-indigo/10 border-accent-indigo/30'
    },
    {
      title: 'Front-End Development Student',
      company: 'Route Academy',
      period: 'June 2026 - Present',
      desc: 'Enrolled in Route\'s Front-End Development Diploma focusing on React.js, modern state management (Redux/Context API), advanced JavaScript, Tailwind CSS, responsive layouts, and performance optimization techniques.',
      icon: <FaGraduationCap size={18} />,
      color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'SyntecxHub Company',
      period: 'June - July 2026',
      desc: 'Collaborated on user research, created wireframes, and drafted high-fidelity responsive UI designs using Figma. Conducted interactive user journey mapping and aligned layouts with product specifications.',
      icon: <FaPalette size={18} />,
      color: 'text-pink-500 bg-pink-500/10 border-pink-500/30'
    },
    {
      title: 'AI Internship',
      company: 'Decode Labs Company',
      period: 'June - July 2026',
      desc: 'Designed and deployed machine learning pipelines, ran exploratory data analysis (EDA), implemented deep learning modeling using PyTorch, and tuned hyperparameters to optimize inference metrics.',
      icon: <FaBrain size={18} />,
      color: 'text-accent-purple bg-accent-purple/10 border-accent-purple/30'
    },
    {
      title: 'Generative AI Internship Program',
      company: 'Tips Hindawi',
      period: 'December 2025 - February 2026',
      desc: 'Developed Retrieval-Augmented Generation (RAG) engines. Configured similarity searches using FAISS, orchestrated components with LangChain, and applied structured prompt engineering to mitigate output hallucinations.',
      icon: <FaRobot size={18} />,
      color: 'text-accent-teal bg-accent-teal/10 border-accent-teal/30'
    },
    {
      title: 'Online Training Intern',
      company: 'SASEC',
      period: 'July - August 2025',
      desc: 'Acquired hands-on knowledge in software engineering principles, database structures (SQL/NoSQL), object-oriented programming (OOP) paradigms, and algorithmic optimization.',
      icon: <FaServer size={18} />,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      title: 'Industrial Intern',
      company: 'Alexandria Mineral Oils Company (AMOC)',
      period: 'September 2024',
      desc: 'Gained on-site exposure to industrial operations, IT system infrastructures, hardware networking configurations, and relational database monitoring tools.',
      icon: <FaIndustry size={18} />,
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/30'
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="glow-orb top-1/3 right-1/10 w-80 h-80 bg-accent-teal/5 dark:bg-accent-teal/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative ml-4 md:ml-0">
          {/* Vertical Timeline Gradient Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-indigo via-accent-purple to-accent-teal rounded-full -translate-x-[1.5px]" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-20 last:mb-0 min-h-[120px] flex flex-col md:flex-row items-start md:items-center">
                
                {/* Large Icon Node Container on the line */}
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className={`absolute left-6 md:left-1/2 -translate-x-[20px] w-10 h-10 rounded-full flex items-center justify-center border z-20 shadow-xl ${exp.color} bg-white dark:bg-slate-950`}
                >
                  {exp.icon}
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 55 : -55 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, type: 'spring', damping: 15 }}
                  className={`w-full pl-16 md:pl-0 md:w-[calc(50%-32px)] ${
                    isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  } relative`}
                >
                  <div className="glass-card p-6 md:p-8 border-slate-205 dark:border-slate-800/40 hover:-translate-y-1 hover:border-accent-indigo/35 shadow-lg group relative overflow-hidden transition-all duration-350 bg-white/60 dark:bg-slate-950/40 backdrop-blur-md">
                    {/* Glowing card border on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo/5 to-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <span className="inline-block text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-500 dark:text-slate-400 mb-4 select-none">
                      {exp.period}
                    </span>

                    <h3 className="font-display font-bold text-lg md:text-2xl text-slate-900 dark:text-white leading-snug group-hover:text-accent-indigo dark:group-hover:text-accent-teal transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="font-semibold text-sm md:text-base text-slate-500 dark:text-slate-400 mt-1 mb-4">
                      {exp.company}
                    </h4>

                    <p className={`text-slate-650 dark:text-slate-400 text-sm md:text-base leading-relaxed ${isEven ? 'md:text-right text-left' : 'text-left'}`}>
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
