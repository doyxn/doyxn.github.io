import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Experience from "./components/pages/Experience"
//import Error404 from "./components/Error404"
import './stylesheets/App.css';

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
      // let Component 
      // switch(window.location.pathname) {
      //   case "/":
      //     Component = App;
      //     break
      //   case "/Home":
      //     Component = Home;
      //     break
      //   case "/About":
      //     Component = About;
      //     break
      //   case "/Projects":
      //     Component = Projects;
      //     break
      //   case "/Experience":
      //     Component = Experience;
      //     break
      // }
  return ( 
    <Navbar />
  )
}

export default App;
