import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Writing from './pages/Writing/Writing';
import BlogPost from './pages/Writing/BlogPost';
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
          {/* Blog Writing Routing */}
          <Route path="/writing" element = {<Writing />} />
          <Route path="/blog/:slug" element = {<BlogPost />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
