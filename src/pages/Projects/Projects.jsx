import React from 'react';
import './Projects.scss'
import MundoCelular from '../../assets/mundoCelular.jpeg';
import rickAndMory from '../../assets/rickMorty.jpeg';
import dbzList from '../../assets/dbzList.jpeg'

const Projects = ({ language, theme }) => {


  return (
    <section id='projects' className={`container-projects w-full py-12 md:py-24 lg:py-32 ${theme==='dark' ? 'dark-mode' : ''}`}>
    
      {/* <div className="container max-w-6xl px-4 md:px-6 "> */}
      <div className="container col-12">
        <div className="mb-8 text-center">
          <h2 className="text-6xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{language==='es'?'Mis proyectos':'My projects' }</h2>
          <p className="paraf mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          
            {language==='es'?'  Aquí puedes ver algunos de los proyectos en los que he trabajado.':'Here you can see some of the projects he worked on.'}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:h-300px lg:grid-cols-2 xl:grid-cols-3 ">

          <div className="project relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <img
              src={MundoCelular}
              alt="mundoCelular.netlify.app"
              width={300}
              height={300}
              className="object-cover w-full  h-md-300px"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">{language === 'es'?'Proyecto 1':'Project 1'}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{language==='es'?'Descripción del proyecto Mundo Celular':'Description of the cellular world project'}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  React
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Tailwind CSS
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Node.js
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href="https://mundocel.netlify.app/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Ver más':'See more'}
                </a>
                
                <a
                  href="https://github.com/LucasLeiroA/pag-muendo-celular-v.1"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Codigo':'Code'}
                </a>
              </div>
            </div>
          </div>
          <div className="project relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <img
              src={rickAndMory}
              alt="mundoCelular.netlify.app"
              width={300}
              height={300}
              className="object-cover w-full  h-md-300px"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">{language === 'es'?'Proyecto 1':'Project 1'}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{language==='es'?'Descripción del proyecto Mundo Celular':'Description of the cellular world project'}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  React
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Tailwind CSS
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Node.js
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href="https://mundocel.netlify.app/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Ver más':'See more'}
                </a>
                
                <a
                  href="https://github.com/LucasLeiroA/pag-muendo-celular-v.1"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Codigo':'Code'}
                </a>
              </div>
            </div>
          </div>
          <div className="project relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <img
              src={dbzList}
              alt="mundoCelular.netlify.app"
              width={300}
              height={300}
              className="object-cover w-full  h-md-300px"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-bold text-xl">{language === 'es'?'Proyecto 1':'Project 1'}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{language==='es'?'Descripción del proyecto Mundo Celular':'Description of the cellular world project'}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  React
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Tailwind CSS
                </span>
                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                  Node.js
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href="https://wondrous-medovik-8a7553.netlify.app/"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Ver más':'See more'}
                </a>
                
                <a
                  href="https://github.com/LucasLeiroA/HeroApp-Angular"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  {language==='es'?'Codigo':'Code'}
                </a>
              </div>
            </div>
          </div>
         


        </div>
      </div>
      
      
    </section>
  );
};

export default Projects;