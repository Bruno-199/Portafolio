import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-gray-800">
          Portfolio
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Inicio</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">Sobre Mí</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Proyectos</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contacto</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Bruno-199" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-gray-900">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/bruno-bazan-93828428a/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-gray-900">
            <Linkedin size={20} />
          </a>
          <a href="mailto:tu@email.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={20} />
          </a>
        </div>

        <button className="md:hidden text-gray-600">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}