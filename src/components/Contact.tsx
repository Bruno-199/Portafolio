import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'default_service', // Reemplaza con tu SERVICE_ID
        'template_9578ybp', // Tu TEMPLATE_ID del ejemplo
        formRef.current,
        'GGYJwn-DQ7gT3IGfY' // Tu PUBLIC_KEY
      );
      toast.success('¡Mensaje enviado con éxito!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 dark:text-white">¡Hablemos!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Estoy interesado en oportunidades freelance y posiciones full-time.
              Si tienes alguna pregunta, no dudes en contactarme.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 dark:text-gray-300">
                <MapPin className="text-blue-600" size={20} />
                <span>San Miguel de Tucumán, Argentina</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300">
                <Phone className="text-blue-600" size={20} />
                <span>+54 3814018898</span>
              </div>
              <div className="flex items-center gap-3 dark:text-gray-300">
                <Mail className="text-blue-600" size={20} />
                <span>bazanbruno199@gmail.com</span>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-300"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}