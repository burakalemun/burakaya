import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.contact', href: '#contact' },
];


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        {/* Logo */}
        <a className="navbar__logo" href="#hero" onClick={() => handleNavClick('#hero')}>
          <img 
            src={theme === 'dark' ? '/logo.png' : '/logo-light.png'} 
            alt="Burak Kaya Logo" 
            className="navbar__logo-img" 
          />
        </a>



        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="navbar__controls">
          <button
            className="navbar__btn navbar__lang"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {i18n.language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            className="navbar__btn navbar__theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="navbar__btn navbar__hamburger"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="navbar__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
