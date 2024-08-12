import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/lib/LanguageContext";

const App = ({ Component, pageProps }: AppProps) => 
  (
    <LanguageProvider>
      { /* eslint-disable react/jsx-props-no-spreading -- Disabled because prop spread here is typical for Next.js projects */ }
               <Component {...pageProps} />
    </LanguageProvider>
  );


export default App;