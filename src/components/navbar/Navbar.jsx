import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '/src/assets/icons/s-stamp-grey.png';
import activeLogo from '/src/assets/icons/s-stamp-navy.png';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="navbar">
        <div className="nav-icon">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? "active nav-logo": "rise-animation nav-logo"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {({isActive}) => <img src={(isActive || isHovered) ? activeLogo : logo} alt="logo" />}
            </NavLink>
        </div>
        <div className="nav-links">
            <NavLink to="/projects" className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="pink">projects</NavLink>
            <NavLink className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="blue" to="https://drive.google.com/file/d/1YgDQOtk9v5009EnWz3_RRlYaheURchhl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="yellow">contact</NavLink>
        </div>
    </nav>
  );
}

export default Navbar;
