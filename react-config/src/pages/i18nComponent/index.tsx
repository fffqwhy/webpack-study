import React from 'react';
import { useTranslation } from 'react-i18next';

const Globalization = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default Globalization;
