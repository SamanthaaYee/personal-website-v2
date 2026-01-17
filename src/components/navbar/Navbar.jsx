import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import logoIcon from '../../assets/icons/s-stamp-grey.png';
import activeLogoIcon from '../../assets/icons/s-stamp-navy.png';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
        <div className="nav-icon">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive ? "active nav-logo": "rise-animation nav-logo"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={closeMenu}
            >
              {({isActive}) => <img src={(isActive || isHovered) ? activeLogoIcon : logoIcon} alt="logo" />}
            </NavLink>
        </div>
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/projects" className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="pink" onClick={closeMenu}>projects</NavLink>
            <NavLink className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="blue" to="https://drive.google.com/file/d/1YgDQOtk9v5009EnWz3_RRlYaheURchhl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">resume</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active nav-link": "nav-link rise-animation"} data-color="yellow" onClick={closeMenu}>contact</NavLink>
        </div>
    </nav>
  );
}

export default Navbar;
