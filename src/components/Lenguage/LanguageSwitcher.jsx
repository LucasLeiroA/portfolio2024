import React from 'react';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ handleLanguageChange, language }) => {
  return (
    <div className='text-center'>
      <span className='mb-1 text-language'>{language === 'es' ? 'Idioma' : 'Language'}</span>
      <div className="language-selector">
        <button className={`btn-language ${language === 'es' ? 'active' : ''}`} onClick={() => handleLanguageChange('es')}>ES <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="24" height="24">
          <g fillRule="evenodd" strokeWidth="1pt">
            <path fill="#aa151b" d="M0 0h640v160H0zm0 320h640v160H0z"/>
            <path fill="#f1bf00" d="M0 160h640v160H0z"/>
          </g>
        </svg></button>
        <button className={`btn-language ${language === 'eng' ? 'active' : ''}`} onClick={() => handleLanguageChange('eng')}>ENG <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" width="24" height="24">
          <path fill="#b22234" d="M0 0h7410v3900H0z"/>
          <path stroke="#fff" strokeWidth="300" d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"/>
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z"/>
          <path fill="#fff" d="m247 208 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm-2470 650 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm-2470 650 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288zm494 0 90 275h288l-233 170 90 275-233-170-233 170 90-275-233-170h288z"/>
        </svg>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
