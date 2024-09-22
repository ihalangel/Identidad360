'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { sendEvent } from '@/utils/analytic'; // Importa la función para enviar eventos

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contacto: React.FC = () => {
  // Estado del formulario
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Estado para mensajes de éxito o error
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false); // Estado para controlar si se muestra el formulario

  // Maneja cambios en los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Llamada a EmailJS
    emailjs.send('service_6pxd8j7', 'template_whz4otd', data, 'QmNoMSufAjUqdXE-e')
      .then((response: EmailJSResponseStatus) => {
        setSuccessMessage('Envío exitoso. Revisa tu correo electrónico para más información.');
        setFormData({ name: '', email: '', message: '' });

        // Enviar evento a Google Analytics
        sendEvent('form_submit', {
          event_category: 'Contacto',
          event_label: 'Formulario de contacto enviado Next',
          value: 1
        });
      })
      .catch((error: Error) => {
        setErrorMessage('Error al enviar el correo. Por favor, inténtalo de nuevo.');

        // Enviar evento a Google Analytics en caso de error
        sendEvent('form_error', {
          event_category: 'Contacto',
          event_label: 'Error en el formulario de contacto',
          value: 1
        });
      });
  };

  return (
    <section id="contacto" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                sendEvent('form_open', {
                  event_category: 'Contacto',
                  event_label: 'Formulario de contacto abierto Next',
                  value: 1
                });
              }}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
            >
              Contáctanos 📧
            </button>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md mt-6">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                Enviar
              </button>

              {successMessage && (
                <p className="mt-4 bg-green-100 text-green-700 p-3 rounded-lg">{successMessage}</p>
              )}

              {errorMessage && (
                <p className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
