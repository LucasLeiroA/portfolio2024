import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import './App.scss'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es'); // Estado para el idioma seleccionado


  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <div className={`app ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <Navbar language={language} handleLanguageChange={handleLanguageChange} theme={theme} handleThemeChange={handleThemeChange} />
      <div className='app-container'>
          {/* <Home id="home" language={language} theme={theme}/> */}
          <About id="about" language={language} theme={theme}/>
          <Projects id="projects" language={language} theme={theme}/>
          <Contact id="contact" language={language} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
