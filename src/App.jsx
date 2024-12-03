
//Importamos componentes de react-router-dom para manejar la navegación
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importamos todas las páginas de nuestra aplicación
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import NewsletterPage from './pages/NewsletterPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
//Componentes
import Header from './components/Header';

export default function App() {
  return (
    //Router envuelve toda nuestra aplicación y habilita la navegación
    <Router>
      <div className="App">
        {/*Header se muestra en todas las páginas*/}
        <Header />
        {/*Routes define las rutas de nuestra aplicación */}
        <Routes>
          {/*Ruta principal  */}
          <Route path="/" element={<LandingPage />} />

          {/*Ruta página de contacto*/}
          <Route path="/contact" element={<ContactPage />} />

          {/*Ruta página de newsletter*/}
          <Route path="/newsletter" element={<NewsletterPage />} />

          {/*Ruta página de proyectos */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/*Ruta para cualquier dirección comodin */}
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}
