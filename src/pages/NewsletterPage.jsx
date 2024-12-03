import { useState } from 'react';
import './NewsletterPage.css';

export default function NewsletterPage() {
  //Creamos estados para email, nombre y mensaje usando useState
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  //Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (e) => {
    //Prevenimos el comportamiento por defecto del formulario
    e.preventDefault();

    //Validación básica para comprobar que los campos no estén vacíos
    if (!name.trim() || !email.trim()) {
      setMessage('Por favor, completa todos los campos.');
      return; //Si están vacíos, terminamos la función aquí
    }

    //Si la validación pasa, procesamos el formulario
    console.log('Suscripción procesada:', { name, email });
    //Actualizamos el mensaje de confirmación
    setMessage(`¡Gracias ${name} por suscribirte a nuestro newsletter!`);
    setMessage('¡Ahora cada mes recibirás las noticias más frescas!');
    //Limpiamos los campos del formulario
    setEmail('');
    setName('');
  };

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h1>Suscríbete a nuestro Newsletter</h1>
        <p>Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada mensualmente.</p>
        {/*Formulario de suscripción */}
        <form onSubmit={handleSubmit}>
          {/*Cada vez que el usuario escribe algo en el campo name, se actualiza en name*/}
          <input
            type="text"
            placeholder="Tu Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/*Cada vez que el usuario escribe algo en el campo setEmail, se actualiza en email*/}
          <input
            type="email"
            placeholder="Tu Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Suscribirse</button>
        </form>
        {/*Mostramos el mensaje de confirmación o error si existe */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

