import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background color on scroll
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = 'home';
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-navbar py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo('home')}
          className="cursor-pointer font-display text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 group"
        >
          <span>Mariam</span>
          <span className="text-accent-indigo dark:text-accent-teal group-hover:animate-pulse">Gamal</span>
          <span className="inline-block w-2 h-2 rounded-full bg-accent-indigo dark:bg-accent-teal animate-pulse"></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent-indigo dark:hover:text-accent-teal ${
                activeSection === link.id
                  ? 'text-accent-indigo dark:text-accent-teal font-semibold'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="/my resume/mariam_gamal_cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-transparent dark:border-slate-750 transition-all hover:scale-105"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Navbar Controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-modal border-t-0 p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-accent-indigo/10 dark:bg-accent-teal/10 text-accent-indigo dark:text-accent-teal'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="/my resume/mariam_gamal_cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-left py-2 px-4 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent dark:border-slate-800"
          >
            Resume (PDF)
          </a>
        </div>
      )}
    </nav>
  );
}
