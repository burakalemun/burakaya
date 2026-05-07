import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, ShieldCheck, Zap, Cpu, Globe } from 'lucide-react';
import { FaGithub, FaApple, FaGooglePlay, FaInstagram, FaAws, FaAppStore, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa6';
import { 
  SiSwift, SiTypescript, SiReact, SiNodedotjs, SiGo, SiPython, 
  SiPostgresql, SiFirebase, SiDocker, SiDotnet, SiJavascript
} from 'react-icons/si';

import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/content';
import './ProjectModal.css';

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
  'Combine': SiSwift,
  'CoreData': FaApple,
  'CloudKit': FaApple,
  'Charts': SiSwift,
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const heroImage = project.screenshots?.[0];
  const secondaryImages = project.screenshots?.slice(1) || [];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-backdrop"
      >
        <motion.div 
          ref={modalRef}
          initial={{ scale: 0.95, y: 10, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 10, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="modal-content glass" 
        >
          <div className="modal-scroll-area">
            
            {/* Header / Hero Section */}
            <div className="modal-hero-section" style={!heroImage ? { background: project.gradient } : {}}>
              {heroImage && (
                <img src={heroImage} alt={project.nameEN} className="modal-hero-bg" />
              )}
              <div className="modal-hero-overlay"></div>

              {/* Top Actions: Links & X */}
              <div className="modal-actions-top">
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="modal-btn-top modal-btn-git">
                      <FaGithub size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.web && (
                    <a href={project.web} target="_blank" rel="noreferrer" className="modal-btn-top">
                      <Globe size={18} />
                      <span>{lang === 'tr' ? 'Web Sitesi' : 'Website'}</span>
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noreferrer" className="modal-btn-top">
                      <FaApple size={18} />
                      <span>App Store</span>
                    </a>
                  )}
                  {project.playStore && (
                    <a href={project.playStore} target="_blank" rel="noreferrer" className="modal-btn-top">
                      <FaGooglePlay size={18} />
                      <span>Play Store</span>
                    </a>
                  )}
                </div>
                
                <button className="modal-btn-top modal-btn-close" onClick={onClose} aria-label="Close modal">
                  <X size={20} />
                </button>
              </div>

              {/* Title & Type */}
              <div className="modal-title-container">
                <h2 className="modal-main-title">{lang === 'tr' ? project.nameTR : project.nameEN}</h2>
                <span className="modal-type-tag">{lang === 'tr' ? project.typeTR : project.typeEN}</span>
              </div>
            </div>

            <div className="modal-body-content">
              
              {/* Proje Hikayesi */}
              <div className="modal-section-box full-width">
                <h3 className="modal-box-title">
                  <Zap size={16} /> {lang === 'tr' ? 'Proje Hikayesi' : 'Project Story'}
                </h3>
                <p className="modal-box-text">{lang === 'tr' ? project.storyTR : project.storyEN}</p>
              </div>

              <div className="modal-grid-cols">
                {/* Temel Özellikler */}
                <div className="modal-section-box">
                  <h3 className="modal-box-title">
                    <ShieldCheck size={16} /> {lang === 'tr' ? 'Temel Özellikler' : 'Key Features'}
                  </h3>
                  <ul className="modal-box-list">
                    {(lang === 'tr' ? project.featuresTR : project.featuresEN).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Teknik Detaylar */}
                <div className="modal-section-box">
                  <h3 className="modal-box-title">
                    <Cpu size={16} /> {lang === 'tr' ? 'Teknik Detaylar' : 'Technical Specs'}
                  </h3>
                  <ul className="modal-box-list">
                    {(lang === 'tr' ? project.technicalTR : project.technicalEN).map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Teknoloji Yığını */}
              <div className="modal-section-box full-width">
                <h3 className="modal-box-title">{lang === 'tr' ? 'Teknoloji Yığını' : 'Tech Stack'}</h3>
                <div className="modal-tags-container">
                  {project.tech.map((tech) => {
                    const Icon = iconMap[tech];
                    return (
                      <span key={tech} className="modal-tag">
                        {Icon && <Icon className="tag-icon" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Case Study Images (Dikey Görsel Akışı) */}
              {secondaryImages.length > 0 && (
                <div className="modal-case-study-images">
                  {secondaryImages.map((src, i) => (
                    <div key={i} className="modal-case-study-item">
                      <img src={src} alt={`${project.nameEN} ${i+1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              )}


              {/* Bottom Actions */}
              {(project.live || project.instagram) && (
                <div className="modal-bottom-actions">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn--primary modal-live-btn">
                      <ExternalLink size={18} />
                      <span>{lang === 'tr' ? 'Canlı Önizleme' : 'Live Preview'}</span>
                    </a>
                  )}
                  {project.instagram && (
                    <a href={project.instagram} target="_blank" rel="noreferrer" className="btn btn--primary modal-live-btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', border: 'none' }}>
                      <FaInstagram size={18} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

