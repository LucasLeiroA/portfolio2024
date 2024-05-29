import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/themeToggle';
import './Navbar.scss';

const Navbar = ({ isDarkMode, toggleTheme }) => {
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
    <nav className={`nav ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">Logo</div>
      <ul className={`${isNavVisible ? 'visible' : ''}`}>
        <li>
          <a href="#home" onClick={() => handleSectionClick('home')} className={activeSection === 'home' ? 'active' : ''}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleSectionClick('about')} className={activeSection === 'about' ? 'active' : ''}>
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => handleSectionClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleSectionClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            Contacto
          </a>
        </li>
        <li>
          <ThemeSwitcher toggleTheme={toggleTheme} />
        </li>
      </ul>
      <button onClick={toggleNavVisibility} className="toggle-button">
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
