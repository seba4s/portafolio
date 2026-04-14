import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Quote, User, Briefcase, Code } from 'lucide-react';
import { DecoCirclesGroup } from '../components/DecoraCircles';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Miguel Angel Mendoza Jaramillo',
      role: 'Compañero de equipo - Universidad',
      testimonial: 'Tuve el placer de trabajar con Sebastian en el desarrollo de ONE GAME y otros proyectos universitarios. Su habilidad para resolver problemas complejos, su dedicación al código limpio y su capacidad de trabajo en equipo son excepcionales. Sebastian siempre aporta ideas innovadoras y se compromete al 100% con cada proyecto. Es un desarrollador talentoso y un excelente compañero de equipo.',
      icon: User,
      color: 'text-[#22C55E]',
    },
    {
      name: 'Angela Liliana Benavides Castillo',
      role: 'Jefa - Veterinaria Clinican',
      testimonial: 'Sebastian se encargó de manera excepcional de la administración de nuestra base de datos y el desarrollo de la página principal de nuestra veterinaria Clinican. Su trabajo en el sistema de gestión de mascotas para el servicio de peluquería fue impecable, demostrando profesionalismo, responsabilidad y gran capacidad técnica. Es un desarrollador confiable y comprometido con la excelencia.',
      icon: Briefcase,
      color: 'text-[#3B82F6]',
    },
    {
      name: 'Juan Pablo Gallardo Rojas',
      role: 'Colaborador - Proyectos Universitarios',
      testimonial: 'Colaborar con Sebastian en diversos proyectos universitarios ha sido una experiencia muy valiosa. Su profesionalismo, conocimiento técnico y habilidad para trabajar bajo presión lo destacan. Siempre está dispuesto a compartir su conocimiento y apoyar al equipo. Su enfoque metódico y atención al detalle garantizan resultados de alta calidad en cada proyecto.',
      icon: Code,
      color: 'text-[#22C55E]',
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <DecoCirclesGroup count={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4 text-balance">
            Testimonios & <span className="text-[#22C55E]">Recomendaciones</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full mb-4"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Lo que dicen quienes han trabajado conmigo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false} className="h-full">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                      <Quote className="text-[#22C55E]" size={24} />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#9CA3AF] italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#111827] to-[#0F172A] border-2 flex-shrink-0 ${testimonial.color === 'text-[#22C55E]' ? 'border-[#22C55E]/30' : 'border-[#3B82F6]/30'}`}>
                        <IconComponent className={testimonial.color} size={24} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-[#F9FAFB] text-sm sm:text-base leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#22C55E] mt-0.5 leading-snug">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
