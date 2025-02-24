import React, { lazy, Suspense, useState, useMemo } from 'react';
import { Code, Database, Globe, GitBranch, Languages, GraduationCap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileImage = lazy(() => import('./ProfileImage'));

const ImageLoadingFallback = () => (
  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
);

export default function About() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const sections = useMemo(() => [
    {
      icon: GraduationCap,
      title: "Educación",
      items: [
        { name: "Universidad Tecnológica Nacional (UTN)" },
        { name: "Tecnicatura Universitaria En Programación" }
      ]
    },
    {
      icon: Code,
      title: "Lenguajes de Programación",
      items: [
        { name: "Python" },
        { name: "C#" },
        { name: "JavaScript" },
        { name: "HTML/CSS" }
      ]
    },
    {
      icon: Database,
      title: "Bases de Datos",
      items: [
        { name: "MySQL" },
        { name: "Microsoft SQL Server" }
      ]
    },
    {
      icon: Globe,
      title: "Deployment",
      items: [
        { name: "Render" },
        { name: "Railway" }
      ]
    },
    {
      icon: GitBranch,
      title: "Control de Versiones",
      items: [
        { name: "GitHub" }
      ]
    },
    {
      icon: Languages,
      title: "Idiomas",
      items: [
        { name: "Español (Nativo)" },
        { name: "Inglés (Básico)" }
      ]
    }
  ], []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          Sobre Mí
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <Suspense fallback={<ImageLoadingFallback />}>
              <ProfileImage />
            </Suspense>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <section.icon className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">{section.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}