import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import StickyContactBar from "./components/stickyContactBar/StickyContactBar"
import Home from "./pages/home"
import OurStory from "./pages/ourStory"
import Products from "./pages/products"
import Responsibility from "./pages/responsibility"

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Products/>
      <OurStory/>
      <Responsibility/>
      <StickyContactBar/>
      <Footer/>
    </>
  )
}

export default App
