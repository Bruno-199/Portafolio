import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="text-yellow-500" size={24} />
          ) : (
            <Moon className="text-gray-700" size={24} />
          )}
        </button>
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Bruno Bazan. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;