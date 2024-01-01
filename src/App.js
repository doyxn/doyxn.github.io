import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
//import Error404 from "./components/Error404"
import './stylesheets/App.css';
import { Route, Routes} from "react-router-dom"


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Navbar />
  //       <p>
  //         Hello! My name is Adedoyin Famuyiwa. I'm a student at Purdue University, majoring in Mathematics and Computer Science. My fascination with the beauty of mathematics has always driven my passion for problem-solving. I bring those solutions to life through computer science, transforming ideas into tangible creations.
  //       </p>
  //       <p>
  //         Find my current projects and experiences below.
  //       </p>
        
  //     </header>
  //   </div>
  // );
  return ( 
    <>
      <Navbar />
      <div className = "container">
        <Routes>
          <Route  path="/pages/Home" element={ <Home />} />
          <Route  path="/pages/About" element={ <About />} />
          <Route  path="/pages/Projects" element={ <Projects />} />
          <Route  path="/pages/Experience" element={ <Experience />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
