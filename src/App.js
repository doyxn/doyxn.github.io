import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
//import Error404 from "./components/Error404"
import "./stylesheets/Carousel.css"
import './stylesheets/App.css'


function App() {
  return ( 
    <>
      <Navbar />
      <div id = "home"><Home/></div>
      <div id = "about"><About /></div>
      <div id = "projects"><Projects /></div>
      <div id = "experience"><Experience /></div>
      <Footer />
    </>
  )
}

export default App;
