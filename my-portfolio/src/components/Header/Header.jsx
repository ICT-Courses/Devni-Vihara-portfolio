
import { Link, useLocation } from "react-router-dom"; //import link and useLocation from library
import { useState } from "react"; //import useState from library
import { FiMenu, FiX } from "react-icons/fi"; //import react icons
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle"; //import DarkModeToggle.jsx
import "./Header.scss";  //import Header.scss

const Header = ({ darkMode, toggleDarkMode }) => {
  // identify whether mobile menu is opened or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // find current page to underline the page 
  const location = useLocation();

  // toggole menu for open and close
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // after click a link 
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // check whether link is match with current path
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header_content">
        {/* Logo  of the website*/}
        <Link to="/" className="logo" onClick={closeMenu}>
          Portfolio
        </Link>

        {/* For navigations in desktops */}
        <nav className="nav_links">
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>  {/*Navigate to Home page*/}
          <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link> {/*Navigate to About page*/}
          <Link to="/projects" className={isActive("/projects") ? "active" : ""}>Projects</Link> {/*Navigate to Projects page*/}
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link> {/*Navigate to Contact page*/}
        </nav>

        {/* Mobile menu button with dark mode */}
        <div className="header_actions">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Create a menu button for menu in mobiles */}
          <button className="menu_button" onClick={handleMenu}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* For navigations in mobiles */}
      <nav className={`mobile_nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>Home</Link> {/*Navigate to Home page*/}
        <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}>About</Link> {/*Navigate to About page*/}
        <Link to="/projects" className={isActive("/projects") ? "active" : ""} onClick={closeMenu}>Projects</Link> {/*Navigate to Projects page*/}
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link> {/*Navigate to Contact page*/}
      </nav>
    </header>
  );
};

export default Header; //Export component to use in other components and pages 
