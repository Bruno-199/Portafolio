import React from 'react';
import { Code, Database, Globe, GitBranch, Languages, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Sobre Mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://private-user-images.githubusercontent.com/167906529/416260979-625adfa8-bb89-4e2b-b003-3e1510ccc809.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA0MTE1MjQsIm5iZiI6MTc0MDQxMTIyNCwicGF0aCI6Ii8xNjc5MDY1MjkvNDE2MjYwOTc5LTYyNWFkZmE4LWJiODktNGUyYi1iMDAzLTNlMTUxMGNjYzgwOS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIyNFQxNTMzNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iM2I0YmUwOWQ2MGZmNTlmYTNlODU2ODViMTU5YjZhZmJmNTQ1ZGZhMTIyODFiNzg4OGNlZWUwNzBiM2JiNTY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hHkixI4ubvwqT0yYe9sKqpzJdg-07ye6tzvhD-A5W8E" 
              alt="Profile" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Educación</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Universidad Tecnológica Nacional (UTN)</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Tucumán, Argentina</span>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Lenguajes de Programación</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Python</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">C#</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">CSS</span>
                </div>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Bases de Datos</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">MySQL</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Microsoft SQL Server</span>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Deployment</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Render</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Railway</span>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Control de Versiones</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">GitHub</span>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="text-blue-600" size={24} />
                  <h3 className="font-semibold dark:text-white">Idiomas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Español (Nativo)</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm text-gray-600 dark:text-gray-300 rounded-full">Inglés (Básico)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}