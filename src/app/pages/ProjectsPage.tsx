import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ExternalLink, Github } from 'lucide-react';
import oneGameImage from '../../assets/f0d790da1127d43640d81f248eb39a3b572ee768.png';
import { DecoCirclesGroup } from '../components/DecoraCircles';

export function ProjectsPage() {
  const projects = [
    {
      title: 'ONE GAME',
      description: 'Es una réplica completa y fiel del clásico juego de cartas UNO, desarrollada con Next.js 15, TypeScript y Tailwind CSS. Incluye soporte para 2-4 jugadores (con IA para bots), todas las cartas especiales (+2, +4, Saltar, Invertir y Comodín), animaciones 3D suaves y un diseño visual espectacular con efecto glassmorphism y fondo galáctico.',
      image: oneGameImage,
      tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'IA'],
      github: 'https://github.com/seba4s/ONE-GAME.git',
      demo: 'https://one-game-iota.vercel.app/',
      featured: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <DecoCirclesGroup count={3} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4 text-balance">
            Mis <span className="text-[#22C55E]">Proyectos</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full mb-4"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo Full Stack
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-[#22C55E]/50">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900 border border-gray-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-[#22C55E] text-[#0F172A] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        Destacado
                      </div>
                    )}
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#3B82F6]">Proyecto Full Stack</p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB]">{project.title}</h3>
                    </div>

                    <p className="text-[#9CA3AF] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-[#F9FAFB] hover:border-[#22C55E] hover:text-[#22C55E] transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Ver código</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#22C55E] text-[#0F172A] hover:bg-[#4ADE80] transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-semibold">Ver demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
