
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'; //import icons from react icons library
import './Footer.scss'; //import Footer.scss for styling

// Define a function for footer component
const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer_content">
        <div className="footer__info">

          
          <div className="social-links">
            {/* Connect to my GitHub profile */}
            <a 
              href="https://github.com/Devni-Hewasundara"  
              target="_blank"                         
              className="footer_links"
                          
            >
              <FiGithub /> {/* GitHub Icon */}
            </a>

            {/* Connect to my Linkedin profile */}
            <a 
              href="https://linkedin.com/in/DevniVihara" 
              target="_blank"
              className="footer_links"
              
            >
              <FiLinkedin /> 
            </a>

            {/* My Email account address */}
            <a 
              href="mailto:devnivihara52@gmail.com"   
              className="footer_links"
              
            >
              <FiMail /> {/* Mail Icon */}
            </a>
          </div>

          {/*Copyright Section  at the end of the footer*/}
          <div className="copyright">
            <p>
              
              Made with <FiHeart className="heart_icon" /> by Devni Vihara © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;  //Export footer component to use in other pages and components
