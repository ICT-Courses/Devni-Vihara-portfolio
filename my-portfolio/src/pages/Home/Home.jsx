import { Link } from 'react-router-dom'; //import Link for navigation
import { motion } from 'framer-motion'; //import motion 
import { FiDownload, FiArrowRight } from 'react-icons/fi';//import react icons 
import './Home.scss'; //import Home.scss

const Home = () => {
  return (
    <div className="home">
      {/* Main Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <motion.div 
              className="hero__text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="hero__greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="hero__name text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Devni Vihara
              </motion.h1>
              <motion.p 
                className="hero__tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                an undergraduate in university of Sri Jayawardenepura
              </motion.p>
              <motion.p 
                className="hero__description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I create attractive and  responsive web applications using modern technologies. 
                Passionate about web development and continuous learning.
              </motion.p>
              <motion.div 
                className="hero__actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link to="/projects" className="btn-primary">
                  View My Work
                  <FiArrowRight />
                </Link>
                <a 
                  href="/path-to-your-resume.pdf" 
                  className="btn-secondary"
                  download
                >
                  <FiDownload />
                  Download CV
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero__image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero__image-container">
                <img 
                  src="/images/hero-photo.jpg" 
                  alt="Your Name - Professional Photo"
                  
                />
                <div className="hero__image-bg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* my skills */}
      <section className="skills-preview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center">Technologies I Love</h2>
            <div className="skills-preview__grid">
              {['React', 'JavaScript', 'Node.js', 'SASS', 'MongoDB', 'Git'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skills-preview__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* final */}
      <section className="cta">
        <div className="container">
          <motion.div 
            className="cta__content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to work together?</h2>
            <p>Let's create something amazing together. I'm always open to discussing new opportunities.</p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;