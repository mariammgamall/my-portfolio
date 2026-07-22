import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-900 bg-white/60 dark:bg-dark-bg/60 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
        
        {/* Top Row: Logo & Subtitle */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start gap-4">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight">
              {t.footer.logoTitle} <span className="text-accent-indigo dark:text-accent-teal">{t.footer.logoTitle2}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              {t.footer.sub}
            </p>
          </div>

          <button 
            onClick={() => scrollToSection('home')}
            className="hover:text-accent-indigo dark:hover:text-accent-teal transition-colors font-semibold text-xs text-slate-500 dark:text-slate-400 cursor-pointer"
          >
            {t.footer.top}
          </button>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/20" />

        {/* Bottom Row: Copyright */}
        <div className="flex justify-center items-center text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
}
