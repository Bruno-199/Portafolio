import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "E-commerce App",
    description: "Plataforma de comercio electrónico construida con React y Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Manager",
    description: "Aplicación de gestión de tareas con autenticación y tiempo real",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
    gallery: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
    ],
    technologies: ["React", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Blog Platform",
    description: "Plataforma de blog con editor rico y sistema de comentarios",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    gallery: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32"
    ],
    technologies: ["Next.js", "PostgreSQL", "GraphQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mis Proyectos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-colors duration-300"
            >
              <div 
                className="relative overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(index)}
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
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedProject(null)}
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
                  src={projects[selectedProject].gallery[0]}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {projects[selectedProject].gallery.map((img, index) => (
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
        )}
      </AnimatePresence>
    </section>
  );
}