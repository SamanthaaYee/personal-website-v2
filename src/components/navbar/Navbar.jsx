import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <NavLink to="/" className={({isActive}) => isActive ? "active nav-link": "nav-link"}>S</NavLink>
        </div>
        <div className="nav-right">
            <NavLink to="/projects" className={({isActive}) => isActive ? "active nav-link": "nav-link"}>projects</NavLink>
            <NavLink to="https://drive.google.com/file/d/1HCnLJqj6lG-N1_6yeYmKEbeLHwYDCXiu/view?usp=sharing" target="_blank" rel="noopener noreferrer">resume</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active nav-link": "nav-link"}>contact</NavLink>
        </div>
    </nav>
  );
}

export default Navbar;
