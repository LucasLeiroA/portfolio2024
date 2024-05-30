import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import './App.scss'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es'); // Estado para el idioma seleccionado

  // const [isDarkMode, setIsDarkMode] = useState(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   return savedTheme === 'dark'; // Usa el estado guardado del almacenamiento local
  // });

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // const toggleTheme = () => {
  //   const newTheme = isDarkMode ? 'light' : 'dark';
  //   localStorage.setItem('theme', newTheme);
  //   setIsDarkMode(!isDarkMode);
  // };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <div>
      <Navbar language={language} handleLanguageChange={handleLanguageChange} theme={theme} handleThemeChange={handleThemeChange} />
      <div className='app-container'>
          <Home id="home" language={language} theme={theme}/>
          <About id="about" language={language} />
          <Projects id="projects" language={language} />
          <Contact id="contact" language={language} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
