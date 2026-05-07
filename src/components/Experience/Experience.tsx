import { useTranslation } from 'react-i18next';
import { experiences } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref} className={`section__header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="section__label">02</span>
          <h2 className="section__title">{t('experience.title')}</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index, lang }: {
  exp: typeof experiences[0]; index: number; lang: string;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const tasks = lang === 'tr' ? exp.tasksTR : exp.tasksEN;

  return (
    <div
      ref={ref}
      className={`timeline__item fade-in ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Dot */}
      <div className="timeline__dot">
        <div className={`timeline__dot-inner ${exp.current ? 'timeline__dot-inner--pulse' : ''}`} />
      </div>

      {/* Card */}
      <div className="timeline__card glass">
        <div className="timeline__card-header">
          <div>
            <h3 className="timeline__role">{lang === 'tr' ? exp.roleTR : exp.roleEN}</h3>
            <div className="timeline__company">{exp.company}</div>
          </div>
          <span className="timeline__period">{exp.period}</span>
        </div>

        <ul className="timeline__tasks">
          {tasks.map((task, ti) => (
            <li key={ti}>{task}</li>
          ))}
        </ul>

        <div className="timeline__tech">
          {exp.tech.map((t) => (
            <span key={t} className="skill-badge skill-badge--sm">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
