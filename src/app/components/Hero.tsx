import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { DecoCirclesGroup } from './DecoraCircles';
import { useTranslations } from '../i18n/translations';
import profileImage from '../../assets/fotodeperfil.jpg';


export function Hero() {
  const t = useTranslations();

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
              <div className="text-[#22C55E] mb-3 sm:mb-4 text-sm sm:text-base">{t.hero.intro}</div>
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
                {t.hero.role}
              </h2>
              <p className="text-lg text-[#9CA3AF] max-w-xl">
                "{t.hero.quote}"
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
                  {t.hero.projectsCta}
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contacto">
                <Button variant="outline">
                  {t.hero.contactCta}
                </Button>
              </a>
              <a href="/Sebastian%20Lopez%20CV.pdf" download="sebastian lopez cv.pdf">
                <Button variant="outline">
                  {t.footer.downloadCv}
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

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22C55E]/30 via-[#3B82F6]/30 to-transparent rounded-full blur-2xl"></div>
              <img
                src={profileImage}
                alt="Sebastian Lopez Benavides"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-[#22C55E]/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
