// Home.js
import React from 'react';
import './Home.scss'; // Importa los estilos de la página principal
import fotoPerfil from '../../assets/fotoPerfil.jpeg';

const Home = ({ language, theme }) => {
  return (
    <section id='home' className={`col-12 main-section ${theme==='dark' ? 'dark-mode' : ''}`}>
      <div className='container-image col-lg-7 col-md-12 m-auto'>
        <img src={fotoPerfil} alt="Tu foto" className="main-image" />
        <h2 className={`job-title ${language === 'es' ? 'es' : 'd-none'}`}>Desarrollador Web Full Stack</h2>
        <h2 className={`job-title ${language === 'eng' ? 'eng' : 'd-none'}`}>Full Stack Web Developer</h2>
      </div>
      <div className={`col-lg-9 col-md-11 col-sm-11  description m-auto mt-5  ${language === 'es' ? 'es' : 'd-none'}`}>
        <p >
          Mi nombre es Lucas Leiro y tengo 22 años. Soy un apasionado programador graduado como técnico en programación por la Universidad Tecnológica Nacional (UTN) en Tucumán, Argentina.

          Actualmente, formo parte del equipo de desarrolladores en Fina Partner, donde he tenido el privilegio de adquirir una valiosa experiencia en el mundo del desarrollo de software y el trabajo en equipo. Soy una persona práctica y meticulosa, enfocada en alcanzar la excelencia desde el inicio y siempre buscando maneras de optimizar y mejorar nuestros procesos para obtener resultados aún mejores.

          Mi enfoque se centra en la eficiencia y la calidad. Creo firmemente en la importancia de generar soluciones que sean no solo efectivas, sino también innovadoras y creativas. Es por eso que disfruto enormemente creando aplicaciones y desarrollando soluciones que marquen la diferencia.

          Estoy en la búsqueda de una nueva oportunidad laboral que me permita seguir creciendo profesionalmente y aplicar mis habilidades en un entorno dinámico y desafiante. Estoy convencido de que puedo agregar un gran valor a su equipo con mi experiencia, dedicación y mentalidad creativa.

          Agradezco sinceramente su tiempo y consideración. Estoy disponible para una entrevista en cualquier momento que sea conveniente para usted. ¡Espero poder trabajar juntos y crear algo extraordinario!
        </p>
      </div>
      <div className={`col-lg-9 col-md-11 col-sm-11  description m-auto mt-5 ${language === 'eng' ? 'eng' : 'd-none'}`}>
        <p >
          My name is Lucas Leiro, and I am 22 years old. I am a passionate programmer, holding a degree as a programming technician from the Universidad Tecnológica Nacional (UTN) in Tucumán, Argentina. Currently, I am part of the development team at Fina Partner, where I have had the privilege of gaining valuable experience in the field of software development and teamwork. I am a practical and meticulous person, focused on achieving excellence from the outset and always seeking ways to optimize and improve our processes to achieve even better results.

          My focus is on efficiency and quality. I firmly believe in the importance of creating solutions that are not only effective but also innovative and creative. That's why I greatly enjoy creating applications and developing solutions that make a difference. I am actively seeking a new job opportunity that will allow me to continue growing professionally and apply my skills in a dynamic and challenging environment. I am confident that I can add significant value to your team with my experience, dedication, and creative mindset.

          I sincerely appreciate your time and consideration. I am available for an interview at your convenience. I look forward to the possibility of working together and creating something extraordinary!
        </p>
      </div>
      <div className='cont-contact'>
        <a href='#contact' className='btn-contact'>{language==='es'?'Contactame':'Contac Me'}</a>
      </div>

    </section>
  );
};

export default Home;
