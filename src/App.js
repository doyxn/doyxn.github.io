import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
//import Error404 from "./components/Error404"
import './stylesheets/App.css';
import { Route, Routes} from "react-router-dom"


function App() {
  return ( 
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route  path="/" element={ <Home />} />
          <Route  path="/pages/Home" element={ <Home />} />
          <Route  path="/pages/About" element={ <About />} />
          <Route  path="/pages/Projects" element={ <Projects />} />
          <Route  path="/pages/Experience" element={ <Experience />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
