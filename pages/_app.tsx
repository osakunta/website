import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/lib/LanguageContext";

const App = ({ Component, pageProps }: AppProps) => 
  (
    <LanguageProvider>
               <Component {...pageProps} />
    </LanguageProvider>
  );


export default App;