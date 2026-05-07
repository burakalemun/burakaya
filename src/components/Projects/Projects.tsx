import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Info, Globe } from 'lucide-react';
import { FaGithub, FaApple, FaGooglePlay } from 'react-icons/fa6';

import { projects } from '../../data/content';
import type { Project } from '../../data/content';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className={`section__header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="section__label">04</span>
          <h2 className="section__title">{t('projects.title')}</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard 
              key={i} 
              project={project} 
              index={i} 
              lang={lang} 
              t={t} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}

function ProjectCard({ project, index, lang, t, onClick }: {
  project: Project; index: number; lang: string; t: (k: string) => string; onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`project-card glass fade-in ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      {/* Banner */}
      <div className="project-card__banner" style={!project.screenshots?.[0] ? { background: project.gradient } : {}}>
        {project.screenshots?.[0] && (
          <img src={project.screenshots[0]} alt={project.nameEN} className="project-card__banner-img" loading="lazy" />
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__name">
          {lang === 'tr' ? project.nameTR : project.nameEN}
        </h3>
        <p className="project-card__desc">
          {lang === 'tr' ? project.descTR : project.descEN}
        </p>

        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="project-card__mini-tag">{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          <button className="project-card__link project-card__link--details" onClick={onClick}>
            <Info size={15} />
            {t('projects.details')}
          </button>
          
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link project-card__link--icon" onClick={(e) => e.stopPropagation()} aria-label="GitHub">
              <FaGithub size={15} />
            </a>
          )}
          {project.web && (
            <a href={project.web} target="_blank" rel="noreferrer" className="project-card__link project-card__link--icon" onClick={(e) => e.stopPropagation()} aria-label="Website">
              <Globe size={15} />
            </a>
          )}
          {project.appStore && (
            <a href={project.appStore} target="_blank" rel="noreferrer" className="project-card__link project-card__link--icon" onClick={(e) => e.stopPropagation()} aria-label="App Store">
              <FaApple size={15} />
            </a>
          )}
          {project.playStore && (
            <a href={project.playStore} target="_blank" rel="noreferrer" className="project-card__link project-card__link--icon" onClick={(e) => e.stopPropagation()} aria-label="Play Store">
              <FaGooglePlay size={15} />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

