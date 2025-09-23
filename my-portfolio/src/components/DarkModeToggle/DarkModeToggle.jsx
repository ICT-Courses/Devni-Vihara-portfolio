import { FiSun, FiMoon } from "react-icons/fi";  //import dark and light icons from react icons
import "./DarkModeToggle.scss"; //import DarkModeToggle.scss for styling

// button component to switch between dark and light themes darkMode and toggleDarkMode are props and darkMode use to store the current theme and toggleDarkMode use to change the theme

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    // Button to change the theme
    <button
      className="dark-mode-toggle" //define a CSS class named dark-mode-toggle
      onClick={toggleDarkMode} // when user clicks the button call the function to switch themes
      
    >
      <div className="dark-mode-toggle__icon">
        {/* Whether dark mode is true display sun icon and otherwise display moon icon*/}
        {darkMode ? <FiSun /> : <FiMoon />}
      </div>
    </button> //close the button
  );
};


export default DarkModeToggle; //Export this component to use in other components and pages
