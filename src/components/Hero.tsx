import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-500 mb-6">
            Hola, soy <span className="text-blue-600">Tu Nombre</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desarrollador Full Stack apasionado por crear experiencias web excepcionales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" 
               className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Ver Proyectos
            </a>
            <a href="#contact"
               className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition">
              Contactar
            </a>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}