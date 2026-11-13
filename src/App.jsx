import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./pages/contact";
import Fotos from "./pages/fotos";
import Home from "./pages/home";
import OurStory from "./pages/ourStory";
import Products from "./pages/products";
import RecentProjects from "./pages/projects";
import Faq from "./pages/faq";
import Features from "./components/features/Features";
import "animate.css";
import { Toaster } from "sonner";
import FloatingButton from "./components/floatingButton/FloatingButton";
import { LanguageProvider } from "./contexts/LanguageContext";

function App({ lang }) {
  return (
    <LanguageProvider lang={lang}>
      <Header />
      <main>
        <Home />
        <Products />
        <Features />
        <OurStory />
        <RecentProjects />
        <Fotos />
        <Faq />
        <Contact />
      </main>
      <FloatingButton />
      <Footer />
      <Toaster position="top-center" richColors />
    </LanguageProvider>
  );
}

export default App;
