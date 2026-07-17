import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Synchronize state with document element class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-light-bg text-slate-800 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 relative overflow-hidden tech-grid">
      {/* Background Floating Globs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-indigo/5 dark:bg-accent-indigo/[0.04] blur-[150px] animate-float-slow" />
        <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-purple/5 dark:bg-accent-purple/[0.04] blur-[180px] animate-float-medium" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent-teal/5 dark:bg-accent-teal/[0.04] blur-[150px] animate-float-slow" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <Hero scrollToSection={scrollToSection} />
        
        <div className="space-y-12">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
