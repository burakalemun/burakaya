import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { personal } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img 
          src={theme === 'dark' ? '/logo.png' : '/logo-light.png'} 
          alt="Logo" 
          className="footer__logo-img" 
        />

        <p className="footer__text">

          © {year} {personal.name} — {t('footer.rights')}
        </p>
        <p className="footer__made">
          {t('footer.made')} <Heart size={13} fill="currentColor" /> in İstanbul
        </p>
      </div>
    </footer>
  );
}

