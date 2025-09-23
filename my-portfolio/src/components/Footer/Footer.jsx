import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'; //import  social mediaicons from react library
import './Footer.scss';  //import Footer.scss for styling 

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer_content">  {/*Apply styles for whole footer content*/}
        <div className="footer_info">
          
          
          <div className="social_media">
            {/* Navigate to my GitHub profile */}
            <a
              href="https://github.com/Devni-Hewasundara"
              target="_blank"
              className="footer_links"
              
            >
              <FiGithub />
            </a>

            {/* Navigate to my Linkedin profile*/}
            <a
              href="https://linkedin.com/in/DevniVihara"
              target="_blank"
              className="footer_links"
              
            >
              <FiLinkedin />
            </a>

            {/* My Email account */}
            <a
              href="mailto:devnivihara52@gmail.com"
              className="footer_links"
              
            >
              <FiMail />
            </a>
          </div>

          {/*Display a copyright message*/}
          <div className="footer__copyright">
            <p>
              Made with <FiHeart className="footer__heart" /> by Devni Vihara © {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;  //Export the component to use in another pages and components
