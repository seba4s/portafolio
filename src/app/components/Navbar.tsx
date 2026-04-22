import { useState } from 'react';
import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/theme-context';
import { Language, useLanguage } from '../context/language-context';
import { useTranslations } from '../i18n/translations';

// onePageScroll: si true, navega por scroll a secciones, si false usa react-router
export function Navbar({ onePageScroll = false }: { onePageScroll?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const languageOptions: Array<{ value: Language; label: string }> = [
    { value: 'es', label: t.language.es },
    { value: 'en', label: t.language.en },
    { value: 'pt', label: t.language.pt },
    { value: 'fr', label: t.language.fr },
  ];

  // IDs para scroll y hrefs para router
  const navItems = [
    { label: t.nav.home, href: onePageScroll ? '#inicio' : '/' },
    { label: t.nav.about, href: onePageScroll ? '#sobre-mi' : '/sobre-mi' },
    { label: t.nav.projects, href: onePageScroll ? '#proyectos' : '/proyectos' },
    { label: t.nav.experience, href: onePageScroll ? '#experiencia' : '/experiencia' },
    { label: t.nav.testimonials, href: onePageScroll ? '#testimonios' : '/testimonios' },
    { label: t.nav.contact, href: onePageScroll ? '#contacto' : '/contacto' },
  ];

  // Scroll suave a sección
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onePageScroll && href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setIsLanguageMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href={onePageScroll ? '#inicio' : '/'} className="text-xl font-bold text-[#22C55E]">
              SLB
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {onePageScroll ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="transition-colors duration-300 text-[#9CA3AF] hover:text-[#22C55E]"
                    >
                      {item.label}
                    </a>
                  ) : null}
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111827] px-3 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]"
              aria-label={theme === 'dark' ? t.theme.switchToLight : t.theme.switchToDark}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? t.theme.light : t.theme.dark}</span>
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((currentValue) => !currentValue)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111827] px-3 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]"
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen}
                aria-label={t.language.label}
              >
                <Languages size={16} />
                <span>{languageOptions.find((option) => option.value === language)?.label}</span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 min-w-40 rounded-lg border border-gray-700 bg-[#111827] p-2 shadow-2xl"
                  >
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setLanguage(option.value);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          language === option.value
                            ? 'bg-[#22C55E]/15 text-[#22C55E]'
                            : 'text-[#F9FAFB] hover:bg-[#22C55E]/10 hover:text-[#22C55E]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setIsLanguageMenuOpen(false);
            }}
            className="md:hidden text-[#F9FAFB] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111827] border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111827] px-3 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]"
                aria-label={theme === 'dark' ? t.theme.switchToLight : t.theme.switchToDark}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? t.theme.light : t.theme.dark}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((currentValue) => !currentValue)}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111827] px-3 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]"
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen}
                aria-label={t.language.label}
              >
                <Languages size={16} />
                <span>{languageOptions.find((option) => option.value === language)?.label}</span>
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-lg border border-gray-700 bg-[#0F172A] p-2"
                  >
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setLanguage(option.value);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          language === option.value
                            ? 'bg-[#22C55E]/15 text-[#22C55E]'
                            : 'text-[#F9FAFB] hover:bg-[#22C55E]/10 hover:text-[#22C55E]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navItems.map((item) => (
                onePageScroll ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.href.replace('#', '');
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                        setIsLanguageMenuOpen(false);
                      }
                    }}
                    className="block w-full text-left py-2 transition-colors duration-300 text-[#9CA3AF] hover:text-[#22C55E]"
                  >
                    {item.label}
                  </a>
                ) : null
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}