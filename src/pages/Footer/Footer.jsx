// Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-12 footer-content d-flex">
        <section className='col-6 text-center'>
          <ul>
            <li>
              <i className="bi bi-envelope"></i>
              <a href="mailto:tucorreo@example.com">tucorreo@example.com</a>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <span>+1234567890</span>
            </li>
          </ul>
        </section>
        <section className='col-6 text-center'>
          <a className='mx-5' href="https://linkedin.com/tu-perfil" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin icon-lg"></i>
          </a>
          <a className=' mx-5' href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github icon-lg"></i>
          </a>
        </section>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Lucas Leiro - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
