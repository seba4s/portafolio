import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import { DecoCirclesGroup } from '../components/DecoraCircles';

export function ExperiencePage() {
  const techGroups = [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
    },
    {
      title: 'Backend & Datos',
      items: ['Node.js', 'Java', 'Python', 'SQL', 'MongoDB'],
    },
    {
      title: 'Herramientas',
      items: ['GitHub'],
    },
  ];

  const timeline = [
    {
      type: 'education',
      title: 'Ingeniería de Software',
      organization: 'Universidad',
      period: '2022 - Presente',
      description: 'Formación académica en desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.',
    },
    {
      type: 'work',
      title: 'Desarrollador Frontend',
      organization: 'Proyecto Académico',
      period: '2024',
      description: 'Desarrollo de interfaces de usuario modernas utilizando React y Tailwind CSS para proyectos universitarios.',
    },
    {
      type: 'work',
      title: 'Desarrollador Full Stack',
      organization: 'Freelance',
      period: '2023 - 2024',
      description: 'Desarrollo de aplicaciones web completas para clientes locales, desde la concepción hasta el despliegue.',
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
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4 text-balance">
            Experiencia & <span className="text-[#22C55E]">Tecnologías</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-6 sm:mb-8">Trayectoria</h3>
            <div className="relative space-y-6 pl-4 sm:pl-0">
              <div className="absolute left-10 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/60 via-[#22C55E]/60 to-transparent" />
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <span
                    className={`absolute left-[22px] sm:left-[18px] top-6 h-3 w-3 rounded-full ring-4 ring-[#0F172A] ${
                      item.type === 'education' ? 'bg-[#3B82F6]' : 'bg-[#22C55E]'
                    }`}
                  />
                  <Card hover={false}>
                    <div className="flex gap-3 sm:gap-4 pl-5 py-1">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          item.type === 'education' 
                            ? 'bg-[#3B82F6]/10' 
                            : 'bg-[#22C55E]/10'
                        }`}>
                          {item.type === 'education' ? (
                            <GraduationCap className={item.type === 'education' ? 'text-[#3B82F6]' : 'text-[#22C55E]'} size={24} />
                          ) : (
                            <Briefcase className="text-[#22C55E]" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col xs:flex-row items-start justify-between mb-2.5 gap-1 xs:gap-4">
                          <h4 className="font-semibold text-[1.05rem] leading-tight text-[#F9FAFB]">{item.title}</h4>
                          <span className="text-xs font-semibold tracking-wide text-[#22C55E] whitespace-nowrap bg-[#22C55E]/10 px-2 py-1 rounded-md border border-[#22C55E]/20 flex-shrink-0">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-[#CBD5E1] text-sm font-medium mb-2.5">{item.organization}</p>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-6 sm:mb-8">Stack Tecnológico</h3>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false} className="h-full">
                <div className="space-y-6">
                  <p className="text-[#9CA3AF]">
                    Dominio de tecnologías modernas para el desarrollo de aplicaciones web completas y escalables.
                  </p>
                  
                  <div className="space-y-4">
                    {techGroups.map((group, groupIndex) => (
                      <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: groupIndex * 0.08 }}
                        className="rounded-xl border border-gray-800 bg-[#0B1222] p-4"
                      >
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3B82F6] mb-3">
                          {group.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((tech) => (
                            <Badge key={tech} className="cursor-default">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-800 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#F9FAFB]">Frontend Development</span>
                        <span className="text-[#22C55E]">90%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#F9FAFB]">Backend Development</span>
                        <span className="text-[#3B82F6]">85%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#F9FAFB]">Database Management</span>
                        <span className="text-[#22C55E]">80%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
