import { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import Skills from './components/Home/Skills';
import Projects from './components/Home/Projects';
import Contact from './components/Home/Contact';
import Footer from './components/Layout/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-700">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
