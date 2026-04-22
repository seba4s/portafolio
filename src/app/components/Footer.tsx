import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslations } from '../i18n/translations';

export function Footer() {
  const t = useTranslations();
  const cvFileName = 'Sebastian-Lopez-Benavides-CV.pdf';

  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-[#22C55E] mb-2">SLB</div>
            <p className="text-[#9CA3AF] text-sm flex items-center gap-1 justify-center md:justify-start">
              {t.footer.madeWith} <Heart size={16} className="text-[#22C55E] fill-current" /> {t.footer.by} Sebastian Lopez Benavides
            </p>
            <p className="text-[#9CA3AF] text-sm mt-1">© 2026 {t.footer.rights}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/seba4s"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-lopez-benavides-259644355/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jlopezbenavides73@gmail.com"
              className="p-3 bg-[#111827] rounded-lg border border-gray-800 hover:border-[#22C55E] text-[#9CA3AF] hover:text-[#22C55E] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/cv.pdf"
            download={cvFileName}
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#22C55E] px-6 py-3 font-medium text-[#22C55E] transition-colors duration-300 hover:bg-[#22C55E] hover:text-white"
          >
            {t.footer.downloadCv}
          </a>
        </div>
      </div>
    </footer>
  );
}