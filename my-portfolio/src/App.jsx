import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  //Import React Library
import { useState } from "react"; //Import React useState hool
import Header from "./components/Header/Header";  //Import Header component
import Footer from "./components/Footer/Footer";  //Import Footer component
import Home from "./pages/Home/Home";              //Import Home page
import About from "./pages/About/About";           //Import About page
import Projects from "./pages/Projects/Projects";  //Import Projects page
import Contact from "./pages/Contact/Contact";     //Import contact page
import NotFound from "./pages/NotFound/NotFound";  //Import NotFound page
import "./App.scss";    //Import App.scss

function App() {               //function component named App
  
  const [isDark, setIsDark] = useState(false);  //State variable for dark mode

  // arrow function to change dark and light themes
  const handlethemeDark = () => {
    // whether app mode is dark displays Dark Mode in console
    console.log("Dark mode:", !isDark);
    setIsDark(!isDark);
  };

  return (
    <div className={`full-app-content ${isDark ? "dark-mode" : "light-mode"}`}>
     
      <Router>     {/* for navigation between pages */}
        <Header darkTheme={isDark} toggleDarkMode={handlethemeDark} />  {/*Header with Theme changing toggle*/}

        <main className="main-section">
          <Routes>
            
            <Route path="/" element={<Home />} />  {/*navigate to Home page*/}
            <Route path="/about" element={<About />} /> {/*navigate to About page*/}
            <Route path="/projects" element={<Projects />} /> {/*navigate to Projects page*/}
            <Route path="/contact" element={<Contact />} /> {/*navigate to Contact page*/}
            <Route path="*" element={<NotFound />} />  {/*When user add a wrong URL displays NotFound page*/}
          </Routes>
        </main>

        <Footer />  {/*Add footer*/}
      </Router>
    </div>
  );
}

export default App;
