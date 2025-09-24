import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './Header.scss';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo" onClick={closeMenu}>
            <span className="header__logo-text">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <Link 
              to="/" 
              className={`header__nav-link ${isActiveLink('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`header__nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`header__nav-link ${isActiveLink('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`header__nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="header__actions">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            
            <button 
              className="header__menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`header__mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`header__mobile-link ${isActiveLink('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`header__mobile-link ${isActiveLink('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`header__mobile-link ${isActiveLink('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`header__mobile-link ${isActiveLink('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;