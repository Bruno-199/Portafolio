import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hola, soy <span className="text-blue-600 dark:text-blue-400">Bruno Bazan</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Desarrollador Full Stack apasionado por crear experiencias web excepcionales
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contact"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-all hover:scale-105 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            >
              Contactar
            </a>
          </motion.div>
          
          <motion.a 
            href="#about" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.2
            }}
          >
            <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}