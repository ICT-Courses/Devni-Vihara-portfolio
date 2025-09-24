import { FiSun, FiMoon } from 'react-icons/fi';
import './DarkModeToggle.scss';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="dark-mode-toggle__icon">
        {darkMode ? <FiSun /> : <FiMoon />}
      </div>
    </button>
  );
};

export default DarkModeToggle;