// Home.js
import React from 'react';
import './Home.scss'; // Importa los estilos de la página principal
import fotoPerfil from '../../assets/fotoPerfil.jpeg';

const Home = ({ isDarkMode }) => {
  console.log(isDarkMode);
  return (
    <section id='home' className={`col-12 main-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className='container-image col-lg-7 col-md-12 m-auto'>
        <img src={fotoPerfil} alt="Tu foto" className="main-image" />
        <h2 className="job-title">Desarrollador Web Full Stack</h2>
      </div>
      <div className="col-lg-9 col-md-11 col-sm-11  description m-auto mt-5">
          <p >
            Mi nombre es Lucas Leiro y tengo 22 años. Soy un apasionado programador graduado como técnico en programación por la Universidad Tecnológica Nacional (UTN) en Tucumán, Argentina.

            Actualmente, formo parte del equipo de desarrolladores en Fina Partner, donde he tenido el privilegio de adquirir una valiosa experiencia en el mundo del desarrollo de software y el trabajo en equipo. Soy una persona práctica y meticulosa, enfocada en alcanzar la excelencia desde el inicio y siempre buscando maneras de optimizar y mejorar nuestros procesos para obtener resultados aún mejores.

            Mi enfoque se centra en la eficiencia y la calidad. Creo firmemente en la importancia de generar soluciones que sean no solo efectivas, sino también innovadoras y creativas. Es por eso que disfruto enormemente creando aplicaciones y desarrollando soluciones que marquen la diferencia.

            Estoy en la búsqueda de una nueva oportunidad laboral que me permita seguir creciendo profesionalmente y aplicar mis habilidades en un entorno dinámico y desafiante. Estoy convencido de que puedo agregar un gran valor a su equipo con mi experiencia, dedicación y mentalidad creativa.

            Agradezco sinceramente su tiempo y consideración. Estoy disponible para una entrevista en cualquier momento que sea conveniente para usted. ¡Espero poder trabajar juntos y crear algo extraordinario!
          </p>
      </div>
   
    </section>
  );
};

export default Home;
