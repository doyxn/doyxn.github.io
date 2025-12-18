import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
// import Blog from './pages/Blog/Blog';
import './stylesheets/card.css';
import './stylesheets/App.css';
import './stylesheets/index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element = {<About />} />
          <Route path="/about" element = {<About />} />
          <Route path="/projects" element = {<Projects />} />
          {/* <Route path="/blog" element = {<Blog />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
