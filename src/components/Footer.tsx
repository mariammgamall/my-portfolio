interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-900 bg-white/60 dark:bg-dark-bg/60 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo & Subtitle */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              Mariam <span className="text-accent-indigo dark:text-accent-teal">Gamal</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Computer Science Engineer specializing in Full-Stack Web Development & Applied AI.
            </p>
          </div>

          {/* Quick Links Grouped into a clean flex grid */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Navigation</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 max-w-md">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-accent-indigo dark:hover:text-accent-teal transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Mariam Gamal. All rights reserved.</p>
          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-accent-indigo dark:hover:text-accent-teal transition-colors font-semibold cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
