import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Bookshelf from './pages/Bookshelf';
import Blog from './pages/Blog';
import BlogPost from "./pages/BlogPost"; 
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
          <Route path="/bookshelf" element = {<Bookshelf />} />
          <Route path="/blog" element = {<Blog />} />
          <Route path="/blog/:fileName" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
