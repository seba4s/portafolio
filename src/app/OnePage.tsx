import { Hero } from './components/Hero';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from './context/theme-context';

// Helper for scroll-into-view smooth
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

function OnePage() {
  const { theme } = useTheme();

  // Siempre ir al inicio al cargar/recargar la página y limpiar el hash de la URL
  useEffect(() => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F9FAFB] flex flex-col">
      <Navbar onePageScroll />
      <main className="flex-1 pt-16">
        <section id="inicio">
          <Hero />
        </section>
        <SectionFadeIn id="sobre-mi">
          <AboutPage />
        </SectionFadeIn>
        <SectionFadeIn id="proyectos">
          <ProjectsPage />
        </SectionFadeIn>
        <SectionFadeIn id="experiencia">
          <ExperiencePage />
        </SectionFadeIn>
        <SectionFadeIn id="testimonios">
          <TestimonialsPage />
        </SectionFadeIn>
        <SectionFadeIn id="contacto">
          <ContactPage />
        </SectionFadeIn>
      </main>
      <Footer />
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#111827' : '#FFFFFF',
            color: theme === 'dark' ? '#F9FAFB' : '#0F172A',
            border: '1px solid #22C55E',
          },
        }}
      />
    </div>
  );
}

// Animación de fade-in y slide-up al hacer scroll
function SectionFadeIn({ id, children }: { id: string; children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id={id} ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

export default OnePage;
