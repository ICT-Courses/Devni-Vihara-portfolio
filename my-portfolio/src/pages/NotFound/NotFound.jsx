
import { Link } from 'react-router-dom'; //import Link for navigation
import { motion } from 'framer-motion'; //import motion from framer motion
import { FiHome, FiArrowLeft } from 'react-icons/fi'; // import icons from react library
import './NotFound.scss'; // import NotFound.scss for styling

// define NotFound component
const NotFound = () => {
  return (
    <div className="not-found"> 
      <div className="container"> 
        
        {/* main content */}
        <motion.div
          className="not-found__content"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          {/* 404 error with animation*/}
          <motion.div
            className="not-found__illustration"
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }} 
          >
            <div className="not-found__number">404</div> 
            <div className="not-found__glitch"></div> 
          </motion.div>

          {/* title of the NotFound page */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Error 404! Page Not Found
          </motion.h1>

          {/* description of the page */}
          <motion.p
            className="not-found__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Error 404 ! Sorry, the page you are looking for cannot be found.
          </motion.p>

          {/* action buttons in the page */}
          <motion.div
            className="not-found__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Home button */}
            <Link to="/" className="btn-primary">
              <FiHome /> 
              Back to Home
            </Link>

            {/* Back button */}
            <button 
              onClick={() => window.history.back()} 
              className="btn-secondary"
            >
              <FiArrowLeft /> 
              Go Back
            </button>
          </motion.div>

          {/* Suggestions about the other pages */}
          <motion.div
            className="not-found__suggestions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h3>You might be looking for:</h3>
            <div className="suggestions-links">
              <Link to="/about">About Me</Link>
              <Link to="/projects">My Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; // Export component to use in other pages and components
