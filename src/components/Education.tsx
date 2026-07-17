import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      institution: 'Egypt-Japan University of Science and Technology (E-JUST)',
      degree: 'B.Sc. in Computer Science and Engineering',
      period: '2024 - 2028',
      icon: <FaGraduationCap className="text-accent-indigo" size={24} />,
      details: [
        'Specializing in Intelligent Systems and Software Engineering.',
        'Rigorous engineering foundation in Data Structures, Advanced Algorithms, Object-Oriented Analysis, and Discrete Mathematics.',
        'Extensive research and practice in Deep Learning, Applied Neural Networks, and NLP architectures.'
      ]
    },
    {
      institution: 'El Zahraa International Schools (American Department)',
      degree: 'High School Diploma',
      period: '2020 - 2023',
      icon: <FaSchool className="text-accent-teal" size={24} />,
      details: [
        'Graduated with an outstanding GPA of 3.98 / 4.00.',
        'Active participant in scientific research exhibits, coding groups, and mathematics competitions.',
        'Maintained high honors distinction across all academic terms.'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow background */}
      <div className="glow-orb bottom-1/4 right-0 w-80 h-80 bg-accent-purple/5 dark:bg-accent-purple/10 blur-[100px] pointer-events-none -z-10" />

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
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-8 border-slate-200/50 dark:border-slate-800/40 flex flex-col h-full glass-card-hover"
            >
              {/* Institution and Period */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 text-slate-800 dark:text-white">
                  {edu.icon}
                </div>
                <div>
                  <span className="inline-block text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mb-2">
                    {edu.period}
                  </span>
                  <h3 className="font-display font-bold text-lg md:text-xl text-slate-900 dark:text-white leading-snug">
                    {edu.institution}
                  </h3>
                  <h4 className="font-semibold text-sm text-accent-indigo dark:text-accent-teal mt-1">
                    {edu.degree}
                  </h4>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3.5 flex-1">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <FaBook className="text-slate-400 dark:text-slate-650 mt-1 flex-shrink-0" size={12} />
                    <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
