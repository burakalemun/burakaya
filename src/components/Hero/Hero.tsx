import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { useTypewriter } from '../../hooks/useTypewriter';

import { personal } from '../../data/content';
import './Hero.css';

// ─── Canvas Particle Network ──────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 60;
    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const getColor = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      return theme === 'light' ? '37,99,235' : '96,165,250';
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getColor();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},0.6)`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color},${0.2 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language === 'tr' ? 'tr' : 'en';
  const roles = lang === 'tr' ? personal.rolesTR : personal.rolesEN;
  const typedText = useTypewriter(roles, 90, 2200);

  const scrollDown = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <ParticleCanvas />

      <div className="hero__inner">
        <div className="hero__content">
          {/* Terminal prompt */}
          <div className="hero__terminal">
            <span className="hero__terminal-prompt">$ whoami</span>
            <span className="hero__terminal-res"> → {personal.name}</span>
          </div>

          {/* Name */}
          <h1 className="hero__name">{personal.name}</h1>

          {/* Typewriter role */}
          <div className="hero__role">
            <span className="hero__role-text">{typedText}</span>
            <span className="hero__cursor">|</span>
          </div>

          {/* Bio */}
          <p className="hero__bio">
            {lang === 'tr' ? personal.bioTR : personal.bioEN}
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href={`mailto:${personal.email}`} className="btn btn--primary">
              <Mail size={16} />
              {t('hero.cta.contact')}
            </a>
            <a href="#projects" className="btn btn--outline"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Download size={16} />
              {t('hero.cta.projects')}
            </a>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hero__social-link">
              <FaGithub size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero__social-link">
              <FaLinkedin size={20} />
            </a>
            <a href={personal.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hero__social-link">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero__avatar-container">
          <div className="hero__avatar-wrapper">
            <img src={personal.avatar} alt={personal.name} className="hero__avatar" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero__scroll" onClick={scrollDown} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
