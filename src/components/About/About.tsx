import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import { personal, stats } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [val, setVal] = useState('0');
  const { ref, isVisible } = useScrollAnimation();
  const ran = useRef(false);

  useEffect(() => {
    if (!isVisible || ran.current) return;
    ran.current = true;
    const num = parseInt(target.replace(/\D/g, ''), 10);
    if (isNaN(num)) { setVal(target); return; }
    let start = 0;
    const step = Math.ceil(num / 40);
    const iv = setInterval(() => {
      start = Math.min(start + step, num);
      setVal(target.replace(/\d+/, String(start)));
      if (start >= num) clearInterval(iv);
    }, 40);
    return () => clearInterval(iv);
  }, [isVisible, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const { ref, isVisible } = useScrollAnimation();

  const statItems = [
    { value: stats.yearsEN, label: t('about.stat.years') },
    { value: stats.projects, label: t('about.stat.projects') },
    { value: stats.commits, label: t('about.stat.commits') },
    { value: stats.coffee, label: t('about.stat.coffees') },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className={`section__header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="section__label">01</span>
          <h2 className="section__title">{t('about.title')}</h2>
        </div>

        <div className={`about__grid fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
          {/* Text */}
          <div className="about__text">
            <p>{lang === 'tr' ? personal.bioTR : personal.bioEN}</p>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              {t('about.text')}
            </p>

            <div className="about__meta">
              <div className="about__meta-item">
                <MapPin size={16} />
                <span>{personal.location}</span>
              </div>
              <div className="about__meta-item">
                <Mail size={16} />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="about__meta-item">
                <FaGithub size={16} />
                <a href={personal.github} target="_blank" rel="noreferrer">burakalemun</a>
              </div>
              <div className="about__meta-item">
                <FaLinkedin size={16} />
                <a href={personal.linkedin} target="_blank" rel="noreferrer">burak-kaya</a>
              </div>

            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {statItems.map(({ value, label }) => (
              <div key={label} className="stat-card glass">
                <div className="stat-card__value">
                  <Counter target={value} />
                </div>
                <div className="stat-card__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
