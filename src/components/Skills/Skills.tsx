import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  SiSwift, SiTypescript, SiReact, SiNodedotjs, SiGo, SiPython, 
  SiPostgresql, SiFirebase, SiDocker, SiDotnet, SiJavascript
} from 'react-icons/si';
import { FaAws, FaApple, FaAppStore, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa6';
import { skillCategories } from '../../data/content';
import './Skills.css';

const iconMap: Record<string, any> = {
  'Swift': SiSwift,
  'SwiftUI': SiSwift,
  'UIKit': FaAppStore,
  'Xcode': FaApple,
  'React': SiReact,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'Go': SiGo,
  'Python': SiPython,
  '.NET': SiDotnet,
  'PostgreSQL': SiPostgresql,
  'Firebase': SiFirebase,
  'AWS': FaAws,
  'Docker': SiDocker,
  'Git': FaGitAlt,
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
};

export default function Skills() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section__header"
        >
          <span className="section__label">03</span>
          <h2 className="section__title">{t('skills.title')}</h2>
        </motion.div>

        <div className="skills__bento">
          {skillCategories.map((cat, index) => (
            <SkillCard key={index} cat={cat} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, index, lang }: { cat: typeof skillCategories[0]; index: number; lang: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="skill-card"
    >
      <div className="skill-card__glow" />
      <div className="skill-card__header">
        <span className="skill-card__icon">{cat.icon}</span>
        <h3 className="skill-card__title">{lang === 'tr' ? cat.keyTR : cat.keyEN}</h3>
      </div>
      
      <div className="skill-card__list">
        {cat.skills.map((skill, i) => {
          const Icon = iconMap[skill];
          return (
            <motion.span 
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.1) + (i * 0.05) }}
              className="skill-card__badge"
            >
              {Icon && <Icon className="skill-icon" />}
              {skill}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
