import React, { createContext, useState, useEffect } from "react";
import en from "../assets/translations/en.json";
import es from "../assets/translations/es.json";

// Crear el contexto
export const LanguageContext = createContext();

const translations = { en, es };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Idioma por defecto
  const [translation, setTranslation] = useState(translations[language]);

  // Cambia las traducciones cuando cambie el idioma
  useEffect(() => {
    setTranslation(translations[language]);
  }, [language]);

  const switchLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    } else {
      console.warn(`Idioma no soportado: ${lang}`);
    }
  };

  return (
    <LanguageContext.Provider value={{ translation, switchLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};