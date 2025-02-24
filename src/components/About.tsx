import React, { lazy, Suspense } from 'react';
import { Code, Database, Globe, GitBranch, Languages, GraduationCap } from 'lucide-react';

// Optimizar la carga de la imagen con lazy loading
const ProfileImage = lazy(() => import('./ProfileImage'));

const ImageLoadingFallback = () => (
  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Sobre Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Suspense fallback={<ImageLoadingFallback />}>
              <ProfileImage />
            </Suspense>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Educación",
                items: ["Universidad Tecnológica Nacional (UTN)", "Tecnicatura Universitaria En Programación"]
              },
              {
                icon: Code,
                title: "Lenguajes de Programación",
                items: ["Python", "C#", "JavaScript", "HTML", "CSS"]
              },
              {
                icon: Database,
                title: "Bases de Datos",
                items: ["MySQL", "Microsoft SQL Server"]
              },
              {
                icon: Globe,
                title: "Deployment",
                items: ["Render", "Railway"]
              },
              {
                icon: GitBranch,
                title: "Control de Versiones",
                items: ["GitHub"]
              },
              {
                icon: Languages,
                title: "Idiomas",
                items: ["Español (Nativo)", "Inglés (Básico)"]
              }
            ].map((section, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <section.icon className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}