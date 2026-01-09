import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import Projects from './pages/projects/Projects.jsx';
import Contact from './pages/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
