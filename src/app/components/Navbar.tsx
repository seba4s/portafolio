import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/theme-context';

// onePageScroll: si true, navega por scroll a secciones, si false usa react-router
export function Navbar({ onePageScroll = false }: { onePageScroll?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // IDs para scroll y hrefs para router
  const navItems = [
    { label: 'Inicio', href: onePageScroll ? '#inicio' : '/' },
    { label: 'Sobre mí', href: onePageScroll ? '#sobre-mi' : '/sobre-mi' },
    { label: 'Proyectos', href: onePageScroll ? '#proyectos' : '/proyectos' },
    { label: 'Experiencia', href: onePageScroll ? '#experiencia' : '/experiencia' },
    { label: 'Testimonios', href: onePageScroll ? '#testimonios' : '/testimonios' },
    { label: 'Contacto', href: onePageScroll ? '#contacto' : '/contacto' },
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
      }
    }
  };

  // No hay rutas activas en modo onePageScroll
  const isActive = (_: string) => false;

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
          <div className="hidden md:flex items-center gap-8">
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
                    onClick={e => handleNavClick(e, item.href)}
                    className={
                      'transition-colors duration-300 text-[#9CA3AF] hover:text-[#22C55E]'
                    }
                  >
                    {item.label}
                  </a>
                ) : (
                  // ...existing code for router mode...
                  null
                )}
              </motion.div>
            ))}

            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-[#111827] px-3 py-2 text-sm text-[#F9FAFB] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
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
                aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
              </button>

              {navItems.map((item) => (
                onePageScroll ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={e => {
                      // Scroll suave y cerrar menú
                      e.preventDefault();
                      const id = item.href.replace('#', '');
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }
                    }}
                    className={'block w-full text-left py-2 transition-colors duration-300 text-[#9CA3AF] hover:text-[#22C55E]'}
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