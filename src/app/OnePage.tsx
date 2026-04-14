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

// Helper for scroll-into-view smooth
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

function OnePage() {
  // Opcional: scroll al hash si hay uno en la URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
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
            background: '#111827',
            color: '#F9FAFB',
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
    <section id={id} ref={ref} className="min-h-screen flex items-center py-24 px-4 sm:px-6 lg:px-8">
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
