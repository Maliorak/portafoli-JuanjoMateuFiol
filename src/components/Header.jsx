import { Link } from 'react-router-dom';
import './Header.css';
//Link se usa para crear enlaces de naveghación a otras páginas
//Luego lo uso en el componente App.jsx para que sea visible en todas las páginas

export default function Header(){
  return (
    <header className="header">
      <nav>
        <ul className="link-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
        </ul>
      </nav>
    </header>
  );
};
