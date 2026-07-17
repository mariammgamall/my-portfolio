import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Tagline cycling strings
  const taglines = ["Full-Stack Developer", "AI Engineer", "RAG Systems Builder"];
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [taglineText, setTaglineText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    let timer: number;
    const currentFullText = taglines[currentTaglineIndex];

    if (isDeleting) {
      // Deleting text
      timer = window.setTimeout(() => {
        setTaglineText(prev => prev.slice(0, -1));
        setTypingSpeed(40); // Faster delete
      }, typingSpeed);
    } else {
      // Typing text
      timer = window.setTimeout(() => {
        setTaglineText(currentFullText.slice(0, taglineText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Check if word is fully typed
    if (!isDeleting && taglineText === currentFullText) {
      // Pause before deleting
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && taglineText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentTaglineIndex(prev => (prev + 1) % taglines.length);
      setTypingSpeed(150); // Pause before next word
    }

    return () => clearTimeout(timer);
  }, [taglineText, isDeleting, currentTaglineIndex]);

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Move particle
        p1.x += p1.speedX;
        p1.y += p1.speedY;

        // Bounce on borders
        if (p1.x < 0 || p1.x > canvas.width) p1.speedX *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.speedY *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p1.opacity})`; // Indigo color with transparency
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Canvas Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-accent-indigo/10 dark:bg-accent-indigo/15 blur-[100px] animate-float-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-accent-teal/10 dark:bg-accent-teal/15 blur-[120px] animate-float-medium -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-indigo/10 dark:bg-accent-indigo/20 border border-accent-indigo/20 dark:border-accent-indigo/35 text-xs md:text-sm font-semibold text-accent-indigo dark:text-indigo-300"
          >
            <span className="w-2 h-2 rounded-full bg-accent-indigo animate-ping"></span>
            Available for Internships & Full-Stack / AI Opportunities
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-accent-indigo via-accent-purple to-accent-teal bg-clip-text text-transparent">Mariam Gamal</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300"
            >
              Computer Science Engineer | Software Engineering & AI
            </motion.p>
            
            {/* Tagline Typewriter container */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-8 flex items-center justify-center lg:justify-start"
            >
              <span className="text-base md:text-lg font-mono text-slate-600 dark:text-slate-400">
                &gt; <span className="text-slate-800 dark:text-slate-200 font-bold border-r-2 border-accent-indigo dark:border-accent-teal pr-1 animate-pulse-cursor">{taglineText}</span>
              </span>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Specializing in Full-Stack Web Development & Applied Artificial Intelligence. Building performant monorepo ecosystems and low-latency RAG systems.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-indigo to-accent-purple hover:from-accent-indigo/90 hover:to-accent-purple/90 text-white font-semibold shadow-lg hover:shadow-accent-indigo/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="/my resume/mariam_gamal_cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white font-semibold hover:scale-105 active:scale-95 transition-all text-sm md:text-base border border-transparent dark:border-slate-700/50 flex items-center justify-center"
            >
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 text-slate-800 dark:text-white font-semibold hover:scale-105 active:scale-95 transition-all text-sm md:text-base cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-5"
          >
            <a 
              href="https://github.com/mariammgamall" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-accent-indigo dark:hover:text-accent-teal hover:scale-110 transition-all border border-transparent dark:border-slate-800"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mariam-gamal-3b2408281" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-accent-indigo dark:hover:text-accent-teal hover:scale-110 transition-all border border-transparent dark:border-slate-800"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:maryamgamal188@gmail.com" 
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:text-accent-indigo dark:hover:text-accent-teal hover:scale-110 transition-all border border-transparent dark:border-slate-800"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 select-none cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.03 }}
          >
            {/* Ambient background glows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-indigo to-accent-teal rounded-full blur-[15px] opacity-40 animate-pulse-slow" />
            
            {/* Outer border container */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-indigo via-accent-purple to-accent-teal p-1.5 shadow-2xl">
              {/* Inner crop image */}
              <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative">
                <img 
                  src="/images/profile-image/mariam.jpeg" 
                  alt="Mariam Gamal" 
                  className="w-full h-full object-cover object-center select-none"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Chevron indicator */}
      <div 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 text-slate-400 hover:text-accent-indigo dark:hover:text-accent-teal animate-bounce transition-colors"
      >
        <FaChevronDown size={24} />
      </div>
    </section>
  );
}
