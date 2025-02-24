import React, { useState, useCallback, memo } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import type { Project, ProjectCardProps, ModalProps } from '../types';

// Constantes para animaciones
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

// Datos de proyectos optimizados
const projects: Project[] = [
  {
    title: "Hospital Web App",
    description: "Aplicación web para gestión hospitalaria con React y Express",
    video: "/videos/hospitalweb.mp4",
    poster: "/videos/hospitalweb-poster.jpg",
    technologies: ["React", "Express", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Hospital Desktop C#",
    description: "Sistema de escritorio para administración hospitalaria",
    video: "/videos/hospitalc.mp4",
    poster: "/videos/hospitalc-poster.jpg",
    technologies: ["C#", ".NET", "SQL Server"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Hospital API REST",
    description: "API REST para servicios hospitalarios",
    video: "/videos/hospitalr.mp4",
    poster: "/videos/hospitalr-poster.jpg",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

// Componentes memorizados para mejor rendimiento
const ProjectCard = memo(({ project, index, onClick }: ProjectCardProps) => (
  <motion.div 
    {...fadeInUp}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-colors duration-300"
  >
    {project.video ? (
      <VideoPlayer
        src={project.video}
        poster={project.poster}
        title={project.title}
      />
    ) : project.image ? (
      <div 
        className="relative overflow-hidden cursor-pointer group"
        onClick={() => onClick(index)}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ver galería
          </span>
        </div>
      </div>
    ) : null}
    
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <Github size={20} />
          <span>Código</span>
        </a>
        <a 
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ExternalLink size={20} />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
));

const Modal = memo(({ project, onClose }: ModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button
      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
      onClick={onClose}
    >
      <X size={24} />
    </button>
    <div className="w-full max-w-4xl">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.gallery[0]}
          alt={project.title}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {project.gallery.map((img, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                const imgElement = e.currentTarget.parentElement?.parentElement?.querySelector('img');
                if (imgElement) {
                  imgElement.src = img;
                }
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </motion.div>
));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = useCallback((index: number) => {
    setSelectedProject(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          {...fadeInUp}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Mis Proyectos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={() => handleProjectClick(index)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <Modal
            project={projects[selectedProject]}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}