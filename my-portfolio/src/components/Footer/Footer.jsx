import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Social Links */}
          <div className="footer__social">
            <a 
              href="https://github.com/Devni-Hewasundara" 
              target="_blank" 
              
              className="footer__social-link"
              
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/DevniVihara" 
              target="_blank" 
              
              className="footer__social-link"
              
            >
              <FiLinkedin />
            </a>
            <a 
              href="mailto:devnivihara52@gmail.com"
              className="footer__social-link"
              aria-label="Email Contact"
            >
              <FiMail />
            </a>
          </div>

          {/* Copyright */}
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

export default Footer;