//Importamos useState que nos permite manejar el estado en componentes funcionales
import{ useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  //Creamos un estado para almacenar los datos del formulario
  //Inicialmente, todos los campos están vacíos
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  //Esta función se ejecuta cada vez que el usuario escribe en un campo del formulario
  const handleChange = (e) => {
    //Actualizamos el estado con el nuevo valor del campo
    //...formData es para copiar todos los valores actuales
    //e.target.value actualiza el campo específico que cambió
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    //Prevenimos el comportamiento por defecto del formulario
    e.preventDefault();
    //Mostramos un mensaje de alerta al usuario
    alert('Mensaje enviadon. ¡Gracias por contactarnos!');
  };

  return (
    <div className="contact" style={{ backgroundImage: 'url(assets/img/tu-imagen-de-fondo-contacto.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1>Contacto</h1>
      {/* Creamos un formulario que ejecutará handleSubmit cuando se envíe */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Tu Nombre" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Tu Correo Electrónico" 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Tu Mensaje" 
          onChange={handleChange} 
          required 
        />
        {/*Botón para enviar el formulario */}
        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}
