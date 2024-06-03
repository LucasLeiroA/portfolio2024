import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';
import CV from '../../assets/CV.pdf';

const Contact = ({ language, theme }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
   
  };



  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      console.error('Todos los campos son obligatorios.');
      return;
    }

    const serviceId ='service_slxky9b';
    const templateId= 'template_9zu8n3b';
    const publicKey='BrlJNsPl27qygISG_';

    
    const template_params = {
      from_name:form.name,
      from_email:form.email,
      to_name:'Lucas Leiro',
      message:form.message,
    }

    emailjs.send(serviceId,templateId,template_params,publicKey)
    .then((response)=>{
      console.log("Éxito",response);
      setForm({ name: '', email: '', message: '' }); // Restablecer el formulario

    })
    .catch((error)=>{
      console.log("Error",error);
    })
  
  };


  return (
    <section id='contact' className={`container-contact w-full py-12 md:py-24 lg:py-32 ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctame</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Si tienes alguna pregunta o quieres trabajar juntos, no dudes en enviarme un mensaje.
            </p>
          </div>
          <form className="mx-auto w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base p-3"
                  placeholder="Ingresa tu nombre"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base p-3"
                  placeholder="Ingresa tu correo"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Escribe tu mensaje"
                value={form.message}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </form>
          <div className="mx-auto grid max-w-md gap-6 text-left">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Información de contacto</h3>
              <div className="space-y-1 text-gray-500 dark:text-gray-400">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 inline-block h-5 w-5 align-middle"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  123 Avenida Principal, Ciudad, País
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 inline-block h-5 w-5 align-middle"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  +1 (123) 456-7890
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 inline-block h-5 w-5 align-middle"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  example@email.com
                </p>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 011.036-1.036l1.171-1.171a.375.375 0 00-.298-.639l-.28.17a.375.375 0 01-.398-.643l.280-.17c.383-.232.816-.314 1.226-.204.409.109.71.467.804.938.05.297-.01.600-.162.885l-.204.38c-.175.32.046.682.389.682h.001c.193 0 .385-.121.465-.308l1.444-2.882a.75.75 0 00-.416-1.06l-.115-.034c-.581-.172-1.154.214-1.338.958l-.257 1.194-.095 1.805c.719.771 1.416 1.362 2.185 1.743a.75.75 0 00.677-1.344l-.098-.088c-.31-.268-.461-.643-.39-1.018a1.943 1.943 0 011.221-1.249c1.254-.531 2.56.966 1.96 2.17l-.149.355c-.272.646-.702 1.094-1.197 1.357-.492.256-1.033.334-1.563.186a4.108 4.108 0 01-1.667-.931z"
                      />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                      />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Descargar CV</h3>
              <a
                href={CV}
                download="CV.pdf"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
