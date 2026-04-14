import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Users, Target, Code2 } from 'lucide-react';
import profileImage from '../../assets/fotodeperfil.png';

export function AboutPage() {
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
            Acerca de <span className="text-[#22C55E]">mí</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full"></div>
        </motion.div>

        {/* Profile Image - Debajo del título */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/30 via-[#3B82F6]/30 to-transparent rounded-full blur-2xl"></div>
            <img
              src={profileImage}
              alt="Sebastian Lopez Benavides"
              className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover rounded-full border-4 border-[#22C55E]/20 shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content Cards */}
          <div className="space-y-6">
            <Card hover={false}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                    <Users className="text-[#22C55E]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">Colaboración efectiva</h3>
                  <p className="text-[#9CA3AF]">
                    Orientado a la colaboración efectiva y al fortalecimiento de la dinámica de equipo, 
                    con enfoque en la comunicación clara y el trabajo conjunto para alcanzar objetivos comunes.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
                    <Target className="text-[#3B82F6]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">Crecimiento profesional</h3>
                  <p className="text-[#9CA3AF]">
                    Motivado por integrar equipos de desarrollo para aplicar mis conocimientos y crecer 
                    profesionalmente en entornos desafiantes que impulsen mi desarrollo técnico y personal.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover={false}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                    <Code2 className="text-[#22C55E]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">Aprendizaje continuo</h3>
                  <p className="text-[#9CA3AF]">
                    Comprometido con el aprendizaje continuo y la excelencia en el desarrollo de software, 
                    manteniéndome actualizado con las últimas tecnologías y mejores prácticas del sector.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Summary */}
            <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6">Mi enfoque</h3>
              <div className="space-y-4 text-[#9CA3AF]">
                <p>
                  Como estudiante de Ingeniería de Software y desarrollador Full Stack, me apasiona crear 
                  soluciones digitales innovadoras que combinen funcionalidad, diseño y experiencia de usuario.
                </p>
                <p>
                  Mi formación académica, combinada con proyectos prácticos, me ha permitido desarrollar 
                  habilidades técnicas sólidas en desarrollo web moderno, desde el frontend hasta el backend, 
                  utilizando tecnologías como React, JavaScript, Python y bases de datos.
                </p>
                <p>
                  Creo firmemente en la importancia del código limpio, las mejores prácticas de desarrollo 
                  y el trabajo en equipo. Mi objetivo es contribuir a proyectos significativos donde pueda 
                  aplicar mis conocimientos, aprender de profesionales experimentados y seguir evolucionando 
                  como desarrollador.
                </p>
                <p>
                  La disciplina, la curiosidad técnica y el compromiso con la excelencia son los pilares 
                  que guían mi desarrollo profesional en el ecosistema tecnológico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}