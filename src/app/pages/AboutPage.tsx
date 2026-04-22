import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Users, Target, Code2 } from 'lucide-react';
import profileImage from '../../assets/fotodeperfil.png';
import { DecoCirclesGroup } from '../components/DecoraCircles';
import { useTranslations } from '../i18n/translations';

export function AboutPage() {
  const t = useTranslations();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <DecoCirclesGroup count={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-4 text-balance">
            {t.sections.aboutTitle} <span className="text-[#22C55E]">{t.sections.aboutAccent}</span>
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
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{t.about.card1Title}</h3>
                  <p className="text-[#9CA3AF]">
                    {t.about.card1Text}
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
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{t.about.card2Title}</h3>
                  <p className="text-[#9CA3AF]">
                    {t.about.card2Text}
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
                  <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">{t.about.card3Title}</h3>
                  <p className="text-[#9CA3AF]">
                    {t.about.card3Text}
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
              <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6">{t.about.summaryTitle}</h3>
              <div className="space-y-4 text-[#9CA3AF]">
                <p>{t.about.summaryP1}</p>
                <p>{t.about.summaryP2}</p>
                <p>{t.about.summaryP3}</p>
                <p>{t.about.summaryP4}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
