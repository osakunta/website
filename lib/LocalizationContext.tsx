import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

// Create a default value for the context
const defaultContextValue: LanguageContextType = {
  language: "fi", // Default language
  setLanguage: () => {}, // Default no-op function
};

// Create the context
const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
