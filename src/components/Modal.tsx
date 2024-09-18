'use client'; // Directiva para indicar que este componente es del lado del cliente

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Convertir formData en un objeto plano
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (window.gtag) {
      window.gtag('event', 'submit', {
        event_category: 'Formulario',
        event_label: 'Solicitud de Cotización',
        value: 1,
      });
    }

    emailjs
      .send('service_6pxd8j7', 'template_whz4otd', data, 'QmNoMSufAjUqdXE-e')
      .then(
        () => {
          emailjs
            .send('service_6pxd8j7', 'template_6v2nsne', data, 'QmNoMSufAjUqdXE-e')
            .then(() => {
              setSuccessMessage('Envío exitoso. Revisa tu correo electrónico para más información.');
              setErrorMessage('');
              setFormData({
                name: '',
                email: '',
                message: '',
              });
            })
            .catch(() => {
              setErrorMessage('Error al enviar la confirmación al cliente.');
              setSuccessMessage('');
            })
            .finally(() => {
              setIsSubmitting(false);
            });
        },
        () => {
          setErrorMessage('Error al enviar el correo.');
          setSuccessMessage('');
          setIsSubmitting(false);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>X</button>
        <div className={styles.modalHeader}>
          <h2>Datos para un Primer Contacto</h2>
          <p>Queremos conocer mejor tu idea para ofrecerte la mejor solución posible</p>
        </div>

        <form className="contact__form bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-column">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          <button
            type="submit"
            className={`contact__button w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
