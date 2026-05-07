import { useTranslation } from 'react-i18next';
import { education } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GraduationCap } from 'lucide-react';
import './Education.css';

export default function Education() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div ref={ref} className={`section__header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="section__label">05</span>
          <h2 className="section__title">{t('education.title')}</h2>
        </div>

        <div className={`education__card glass fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="education__icon">
            <GraduationCap size={28} />
          </div>
          <div className="education__info">
            <h3 className="education__school">
              {lang === 'tr' ? education.schoolTR : education.schoolEN}
            </h3>
            <p className="education__department">
              {lang === 'tr' ? education.departmentTR : education.departmentEN}
            </p>
            <span className="education__period">{education.period}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
