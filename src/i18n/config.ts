import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      "nav.about": "Hakkımda",
      "nav.experience": "Deneyim",
      "nav.skills": "Yetenekler",
      "nav.projects": "Projeler",
      "nav.education": "Eğitim",
      "nav.contact": "İletişim",
      "hero.greeting": "Merhaba, ben",
      "hero.name": "Burak Kaya",
      "hero.roles": ["Yazılım Geliştirici", "Full-Stack Developer", "Problem Çözücü"],
      "hero.bio": "Modern web teknolojileri ile kullanıcı odaklı ve yüksek performanslı çözümler üretiyorum.",
      "hero.cta.cv": "CV İndir",
      "hero.cta.contact": "İletişime Geç",
      "hero.cta.projects": "Projelerimi Gör",
      "about.title": "Hakkımda",

      "about.text": "Yazılım dünyasına olan tutkumla, her zaman en güncel teknolojileri takip ederek kendimi geliştiriyorum. Temiz kod prensipleri ve kullanıcı deneyimi benim için önceliktir.",
      "about.stat.years": "Yıl Deneyim",
      "about.stat.projects": "Proje",
      "about.stat.commits": "Commit",
      "about.stat.coffees": "Fincan Kahve",
      "skills.title": "Yetenekler",
      "experience.title": "Deneyim",
      "projects.title": "Projeler",
      "projects.github": "GitHub",
      "projects.live": "Canlı Demo",
      "projects.details": "Detayları Gör",
      "education.title": "Eğitim",
      "contact.title": "İletişim",
      "contact.subtitle": "Bir projeniz mi var? Konuşalım.",
      "contact.form.name": "Adınız",
      "contact.form.email": "E-posta Adresiniz",
      "contact.form.message": "Mesajınız",
      "contact.form.send": "Gönder",
      "contact.available": "Yeni fırsatlara açığım",
      "contact.copy": "Kopyala",
      "contact.copied": "Kopyalandı",
      "contact.sending": "Gönderiliyor...",
      "footer.rights": "Tüm haklar saklıdır.",
      "footer.made": "ile yapıldı"
    }
  },
  en: {
    translation: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm",
      "hero.name": "Burak Kaya",
      "hero.roles": ["Software Developer", "Full-Stack Developer", "Problem Solver"],
      "hero.bio": "Building user-centric and high-performance solutions with modern web technologies.",
      "hero.cta.cv": "Download CV",
      "hero.cta.contact": "Get in Touch",
      "hero.cta.projects": "See My Projects",
      "about.title": "About Me",

      "about.text": "With a passion for software, I constantly improve myself by following the latest technologies. Clean code principles and user experience are my priorities.",
      "about.stat.years": "Years of Exp.",
      "about.stat.projects": "Projects",
      "about.stat.commits": "Commits",
      "about.stat.coffees": "Cups of Coffee",
      "skills.title": "Skills",
      "experience.title": "Experience",
      "projects.title": "Projects",
      "projects.github": "GitHub",
      "projects.live": "Live Demo",
      "projects.details": "View Details",
      "education.title": "Education",
      "contact.title": "Contact",
      "contact.subtitle": "Have a project? Let's talk.",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Your Message",
      "contact.form.send": "Send",
      "contact.available": "Open to new opportunities",
      "contact.copy": "Copy",
      "contact.copied": "Copied",
      "contact.sending": "Sending...",
      "footer.rights": "All rights reserved.",
      "footer.made": "made with"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });


export default i18n;
