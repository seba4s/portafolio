import { motion } from 'motion/react';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import { DecoCirclesGroup } from '../components/DecoraCircles';
import { useTranslations } from '../i18n/translations';

export function ExperiencePage() {
  const t = useTranslations();

  const techGroups = [
    {
      title: t.experience.groupFrontend,
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'],
    },
    {
      title: t.experience.groupBackendData,
      items: ['Node.js', 'Java', 'Python', 'SQL', 'MongoDB'],
    },
    {
      title: t.experience.groupTools,
      items: ['GitHub'],
    },
  ];

  const timeline = [
    {
      type: 'education',
      title: t.experience.timeline1Title,
      organization: t.experience.timeline1Org,
      period: t.experience.timeline1Period,
      description: t.experience.timeline1Description,
    },
    {
      type: 'work',
      title: t.experience.timeline2Title,
      organization: t.experience.timeline2Org,
      period: t.experience.timeline2Period,
      description: t.experience.timeline2Description,
    },
    {
      type: 'work',
      title: t.experience.timeline3Title,
      organization: t.experience.timeline3Org,
      period: t.experience.timeline3Period,
      description: t.experience.timeline3Description,
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
            {t.sections.experienceTitle} <span className="text-[#22C55E]">{t.sections.experienceAccent}</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-6 sm:mb-8">{t.experience.timelineTitle}</h3>
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
            <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-6 sm:mb-8">{t.experience.stackTitle}</h3>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card hover={false} className="h-full">
                <div className="space-y-6">
                  <p className="text-[#9CA3AF]">
                    {t.experience.stackIntro}
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
                        <span className="text-[#F9FAFB]">{t.experience.skillFrontend}</span>
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
                        <span className="text-[#F9FAFB]">{t.experience.skillBackend}</span>
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
                        <span className="text-[#F9FAFB]">{t.experience.skillDatabase}</span>
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
