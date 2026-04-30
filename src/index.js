import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutingApp from './RoutingApp';

// إعداد الترجمة مباشرة هنا
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: {} },
      ar: { translation: {} }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RoutingApp />
    </I18nextProvider>
  </React.StrictMode>
);
