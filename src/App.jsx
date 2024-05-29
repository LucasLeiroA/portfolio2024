import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import './App.scss'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Usa el estado guardado del almacenamiento local
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className='app-container'>
          <Home id="home" isDarkMode={isDarkMode} />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
      </div>

      <Footer />
    </div>
  );
};

export default App;
