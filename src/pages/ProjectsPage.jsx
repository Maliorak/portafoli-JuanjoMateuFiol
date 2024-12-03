import{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

export default function ProjectsPage() {
  //Creamos estados para projects, isLoading y error usando useState
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Perdón por dar énfasis al useEffect para mi es algo complicado de entender si no lo sobre explico y mas usando mas parámetros de los que solemos usar
  useEffect(() => {
    //El código dentro de esta función se ejecutará después de que el componente se monte
    
    fetch('/data/projects.json')
      //'fetch' es una función que hace una petición HTTP para obtener datos
      //Aquí estamos solicitando un archivo JSON local llamado 'projects.json'
  
      .then(response => {
        //Este es el primer 'then' que se ejecuta cuando la petición se completa
        if (!response.ok) {
          //Comprobamos si la respuesta es exitosa
          throw new Error('Network response was not ok');
          //Si no es exitosa, lanzamos un error
        }
        return response.json();
        //Si la respuesta es exitosa, convertimos la respuesta a formato JSON
      })
  
      .then(data => {
        //Este segundo 'then' se ejecuta cuando los datos JSON están listos
        setProjects(data);
        //Actualizamos el estado 'projects' con los datos obtenidos
        setIsLoading(false);
        //Cambiamos 'isLoading' a false porque ya hemos terminado de cargar
      })
  
      .catch(error => {
        //Si ocurre algún error en cualquier parte del proceso, se ejecuta el catch
        console.error('Error fetching projects:', error);
        //Mostramos el error en la consola para debuggearla
        setError('Failed to load projects. Please try again later.');
        //Actualizamos el estado 'error' con un mensaje para el usuario
        setIsLoading(false);
        //Cambiamos 'isLoading' a false
      });
  
  }, []); //Este efecto solo se ejecutará una vez, cuando el componente se monte por estar vacio

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div 
      className="projects-page"
      style={{
        backgroundImage: `url('/assets/img/tu-imagen-de-fondo-proyectos.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <div className="content-overlay">
        <h1>Nuestros Proyectos</h1>
        <p className="projects-intro">Descubre nuestras innovadoras soluciones digitales.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            //Creamos una tarjeta para cada proyecto
            //La key es necesaria para React cuando se renderizan listas, usamos index como key por ser unico
            //Usa la información del Projects.json para obtener la información del proyecto
            <div key={index} className="project-card">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />

              <div className="project-info">
                <h2>{project.title}</h2>

                <p className="project-description">{project.description}</p>

                <div className="project-details">

                  <span className="project-tech">
                    Tecnologías: {project.technologies.join(', ')}
                  </span>

                  <span className="project-date">Fecha: {project.date}</span>
                </div>
                
                {/*Usa Link de react-router para navegación interna */}
                <Link to={project.link} className="project-link">
                  Ver Proyecto
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

