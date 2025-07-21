import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import StickyContactBar from "./components/stickyContactBar/StickyContactBar"
import Contact from "./pages/contact"
import Home from "./pages/home"
import OurStory from "./pages/ourStory"
import Products from "./pages/products"
import RecentProjects from "./pages/projects"
import Responsibility from "./pages/responsibility"
import 'animate.css';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Products/>
      <OurStory/>
      <RecentProjects/>
      <Contact/>
      {/* <Responsibility/> */}
      {/* <StickyContactBar/> */}
      <Footer/>
    </>
  )
}

export default App
