import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/themeToggle';
import './Navbar.scss';
import LanguageSwitcher from '../Lenguage/LanguageSwitcher';

const Navbar = ({ handleLanguageChange, language , theme, handleThemeChange}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsNavVisible(false); // Cerrar la barra de navegación después de hacer clic en un enlace
  };

  return (
    <nav className={`nav ${theme ? 'dark-mode' : ''}`}>
      <div className="logo">Logo</div>
     
      <ul className={`nav-links ${isNavVisible ? 'visible' : ''}`}>

        <li>
          <button onClick={toggleNavVisibility} className='close-button'>&#10006;</button>
        </li>
        {/* <li>
          <a href="#home" onClick={() => handleSectionClick('home')} className={activeSection === 'home' ? 'active' : ''}>
            {language === 'es' ? 'Inicio' : 'Home'}
          </a>
        </li> */}
        <li>
          <a href="#about" onClick={() => handleSectionClick('about')} className={activeSection === 'about' ? 'active' : ''}>
            {language === 'es' ? 'Sobre mí' : 'About Me'}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleSectionClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleSectionClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            {language === 'es' ? 'Contacto' : 'Contact'}
          </a>
        </li>
        <li>
          <LanguageSwitcher handleLanguageChange={handleLanguageChange} language={language} />
        </li>
        <li>
        <ThemeSwitcher theme={theme} handleThemeChange={handleThemeChange} />
        </li>
      </ul>
      <button onClick={toggleNavVisibility} className="toggle-button">
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
