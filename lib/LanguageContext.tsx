import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "fi" | "sv" | "en";

// Define the context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);

  if (ctx === null) {
    throw new Error("could not find LanguageContext");
  }

  return ctx;
};

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
