import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { DecoCirclesGroup } from './DecoraCircles';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-24 pt-28 relative overflow-hidden">
      <DecoCirclesGroup count={3} />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#22C55E] mb-3 sm:mb-4 text-sm sm:text-base">Hola, soy</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9FAFB] leading-tight text-balance">
                Sebastian López
                <br />
                <span className="text-[#22C55E]">Benavides</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-[#9CA3AF] leading-relaxed">
                Estudiante de Ingeniería de Software | Desarrollador Full Stack
              </h2>
              <p className="text-lg text-[#9CA3AF] max-w-xl">
                "Dedicado a dominar el ecosistema digital a través del aprendizaje práctico."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#proyectos">
                <Button>
                  Ver proyectos
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contacto">
                <Button variant="outline">
                  Contactar
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/seba4s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-lopez-benavides-259644355/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jlopezbenavides73@gmail.com"
                className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/20 via-[#3B82F6]/20 to-transparent rounded-full blur-3xl"></div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyQzU1RSIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#22C55E] rounded-lg rotate-12 opacity-20"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-[#3B82F6] rounded-full opacity-20"></div>
              
              {/* Central focus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-2 border-[#22C55E] flex items-center justify-center">
                  <div className="text-6xl text-[#22C55E] font-bold">&lt;/&gt;</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
