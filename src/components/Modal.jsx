import './Modal.css';
/*Decidí crear este modal al principio del proyecto para forzar el uso de useState
 en la LandingPage, pero a medida que fui desarrollando el proyecto, terminé utilizando otros estados y dejé este más como una anécdota que por otra razón*/
//Este componente recibe cuatro propiedades: isOpen, onClose, title, y content
export default function Modal({ isOpen, onClose, title, content }) {
  //Si isOpen es falso (es decir, si el modal no debe estar abierto),
  //no renderizamos nada (retornamos null)
  if (!isOpen) return null;

  //Si isOpen es verdadero, renderizamos el modal
  return (
    // Cuando se hace clic en este fondo, se cierra el modal (onClose)
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}



