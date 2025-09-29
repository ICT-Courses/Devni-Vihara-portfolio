import { FiSun, FiMoon } from 'react-icons/fi';
import './DarkModeToggle.scss'; //import DarkModeToggle.scss for styling and icons from react library
//define a component for darkmodetoggle
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button                                    //create a button for switching
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="dark-mode-toggle__icon">  {/*icons for sun and moon*/}
        {darkMode ? <FiSun /> : <FiMoon />}
      </div>
    </button>
  );
};

export default DarkModeToggle;