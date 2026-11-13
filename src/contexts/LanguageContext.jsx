import React, { createContext, useContext } from "react";
import translations, { DEFAULT_LANG } from "../i18n/translations";

const LanguageContext = createContext();

// Til URL orqali aniqlanadi (/, /uz/, /en/), shuning uchun qidiruv tizimlari
// har bir til uchun alohida va barqaror sahifani ko'radi.
export const LanguageProvider = ({ lang = DEFAULT_LANG, children }) => {
  const language = translations[lang] ? lang : DEFAULT_LANG;
  return (
    <LanguageContext.Provider value={{ language, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
