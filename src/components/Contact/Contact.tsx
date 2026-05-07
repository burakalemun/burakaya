import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

import { personal } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulated send — integrate Formspree or EmailJS here
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className={`section__header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="section__label">06</span>
          <h2 className="section__title">{t('contact.title')}</h2>
          <p className="section__subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className={`contact__grid fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
          {/* Info */}
          <div className="contact__info">
            <div className="contact__info-item">
              <MapPin size={18} />
              <span>{personal.location}</span>
            </div>
            <div className="contact__email-row">
              <Mail size={18} />
              <span>{personal.email}</span>
              <button className="contact__copy-btn" onClick={copyEmail}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? t('contact.copied') : t('contact.copy')}
              </button>
            </div>

            <div className="contact__socials">
              {[
                { href: personal.github, icon: <FaGithub size={20} />, label: 'GitHub' },
                { href: personal.linkedin, icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
                { href: personal.instagram, icon: <FaInstagram size={20} />, label: 'Instagram' },
              ].map(({ href, icon, label }) => (

                <a key={label} href={href} target="_blank" rel="noreferrer"
                  aria-label={label} className="contact__social">
                  {icon}
                </a>
              ))}
            </div>

            <div className="contact__available">
              <span className="contact__available-dot" />
              {t('contact.available')}
            </div>
          </div>

          {/* Form */}
          <form className="contact__form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('contact.form.name')}</label>
              <input
                type="text"
                placeholder={t('contact.form.name')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.form.email')}</label>
              <input
                type="email"
                placeholder={t('contact.form.email')}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>{t('contact.form.message')}</label>
              <textarea
                rows={5}
                placeholder={t('contact.form.message')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit" disabled={sending || sent}>
              {sent ? '✓ Gönderildi!' : sending ? t('contact.sending') : t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
