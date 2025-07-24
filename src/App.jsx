import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Contact from "./pages/contact"
import Fotos from "./pages/fotos"
import Home from "./pages/home"
import OurStory from "./pages/ourStory"
import Products from "./pages/products"
import RecentProjects from "./pages/projects"
import 'animate.css';
import { Toaster } from 'sonner'
import Video from "./pages/video"
import StickyContactBar from "./components/stickyContactBar/StickyContactBar"

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Products/>
      <Video/>
      <OurStory/>
      <Contact/>
      <RecentProjects/>
      <Fotos/>
      <StickyContactBar/>
      <Footer/>
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
