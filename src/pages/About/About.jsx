import React from 'react';
import './About.scss';
import fotoPerfil from '../../assets/fotoPerfil.jpeg';

const About = ({ language, theme }) => {



  function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }


  return (
    <section id='about' className={`container-about py-12 md:py-16 lg:py-20  ${theme==='dark' ? 'dark-mode' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <img
                src={fotoPerfil}
                alt="John Doe"
                width={256}
                height={256}
                className="h-full w-full object-cover"
              />

            </div>
          </div>
          <div className="description space-y-6">
            <div>
              <h2 className={`animation text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl ${language === 'eng' ? 'eng' : 'd-none'}`}>
                About Me
              </h2>
              <h2 className={`animation text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl ${language === 'es' ? 'es' : 'd-none'}`}>
                Sobre mí
              </h2>
              <p className={`animation mt-4 text-lg text-gray-600 dark:text-gray-400 ${language === 'eng' ? 'eng' : 'd-none'}`}>
                My name is Lucas Leiro, and I am 22 years old. I am a passionate programmer, holding a degree as a programming technician from the Universidad Tecnológica Nacional (UTN) in Tucumán, Argentina. Currently, I am part of the development team at Fina Partner, where I have had the privilege of gaining valuable experience in the field of software development and teamwork. I am a practical and meticulous person, focused on achieving excellence from the outset and always seeking ways to optimize and improve our processes to achieve even better results.

                My focus is on efficiency and quality. I firmly believe in the importance of creating solutions that are not only effective but also innovative and creative. That's why I greatly enjoy creating applications and developing solutions that make a difference. I am actively seeking a new job opportunity that will allow me to continue growing professionally and apply my skills in a dynamic and challenging environment. I am confident that I can add significant value to your team with my experience, dedication, and creative mindset.

                I sincerely appreciate your time and consideration. I am available for an interview at your convenience. I look forward to the possibility of working together and creating something extraordinary!
              </p>
              <p className={`animation mt-4 text-lg text-gray-600 dark:text-gray-400 ${language === 'es' ? 'es' : 'd-none'}`}>
                Mi nombre es Lucas Leiro y tengo 22 años. Soy un apasionado programador graduado como técnico en programación por la Universidad Tecnológica Nacional (UTN) en Tucumán, Argentina.

                Actualmente, formo parte del equipo de desarrolladores en Fina Partner, donde he tenido el privilegio de adquirir una valiosa experiencia en el mundo del desarrollo de software y el trabajo en equipo. Soy una persona práctica y meticulosa, enfocada en alcanzar la excelencia desde el inicio y siempre buscando maneras de optimizar y mejorar nuestros procesos para obtener resultados aún mejores.

                Mi enfoque se centra en la eficiencia y la calidad. Creo firmemente en la importancia de generar soluciones que sean no solo efectivas, sino también innovadoras y creativas. Es por eso que disfruto enormemente creando aplicaciones y desarrollando soluciones que marquen la diferencia.

                Estoy en la búsqueda de una nueva oportunidad laboral que me permita seguir creciendo profesionalmente y aplicar mis habilidades en un entorno dinámico y desafiante. Estoy convencido de que puedo agregar un gran valor a su equipo con mi experiencia, dedicación y mentalidad creativa.

                Agradezco sinceramente su tiempo y consideración. Estoy disponible para una entrevista en cualquier momento que sea conveniente para usted. ¡Espero poder trabajar juntos y crear algo extraordinario!
              </p>
            </div>
            <div>
              <h3 className={`animation text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ${language === 'eng' ? 'eng' : 'd-none'}`}>
                Skills and Expertise
              </h3>
              <h3 className={`animation text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ${language === 'es' ? 'es' : 'd-none'}`}>
                Habilidades y experiencia
              </h3>
              <ul className="animation mt-4 grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-400" >
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>React.js</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>Node.js</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>TypeScript</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>SQL</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>Git</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                    <span>AWS</span>
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className='text-center mt-5 pt-5 col-md-12 col-lg-12 col-sm-12 col-xl-6'>
          <a href='#contact' className='btn-contact p-2'>{language==='es'?'Contactame':'Contac Me'}</a>
        </div>
      </div>
    </section>
  );
};

export default About;