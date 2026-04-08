import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { ExternalLink, Github } from 'lucide-react';
import oneGameImage from '../../assets/f0d790da1127d43640d81f248eb39a3b572ee768.png';

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
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4">
            Mis <span className="text-[#22C55E]">Proyectos</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full mb-4"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo Full Stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:col-span-2 lg:col-span-3"
            >
              <Card className="border-[#22C55E]/50">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-[#22C55E] text-[#0F172A] px-3 py-1 rounded-full text-sm font-bold">
                      Proyecto Destacado
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#F9FAFB]">{project.title}</h3>
                  
                  <p className="text-[#9CA3AF] text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex}>{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#22C55E] transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm">Código</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </a>
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