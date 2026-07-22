import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = '', duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref} className="font-display font-extrabold text-4xl md:text-5xl text-accent-indigo dark:text-accent-teal">{count}{suffix}</span>;
}

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { target: 4, suffix: t.about.stat1Suffix, label: t.about.stat1Label },
    { target: 12, suffix: t.about.stat2Suffix, label: t.about.stat2Label },
    { target: 7, suffix: t.about.stat3Suffix, label: t.about.stat3Label },
    { target: 30, suffix: t.about.stat4Suffix, label: t.about.stat4Label }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden">
      {/* Glow Blur Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent-teal/5 dark:bg-accent-teal/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.about.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent-indigo to-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio block */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-start"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
              {t.about.heading}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              {t.about.p1}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 md:p-8 flex flex-col justify-center items-center text-center glass-card-hover border-slate-200/50 dark:border-slate-800/40"
              >
                <Counter target={stat.target} suffix={stat.suffix} />
                <span className="text-xs md:text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 mt-2 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
