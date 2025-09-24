
import { useState } from 'react'; //import useState hook

import { motion } from 'framer-motion'; //import motion from framer-motion

import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'; //import icons from react-icons

import './Contact.scss'; //import Contact.scss for styling

const Contact = () => {
  // store input values
  const [formData, setFormData] = useState({
    name: '',     // name of the company or person
    email: '',    // email address of the company or person
    subject: '',  // subject of the message 
    message: ''   // content of the message
  });

  // check whether the form is submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  // store success/error message
  const [submitStatus, setSubmitStatus] = useState('');

  // control input changes in the form 
  const handleInputChange = (e) => {
    const { name, value } = e.target; // filed name and value
    setFormData(prev => ({
      ...prev,       
      [name]: value  //update the value
    }));
  };

  // Validate fileds in the form
  const validateForm = () => {
    // validate emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    if (!formData.subject.trim()) return 'Subject is required';
    if (!formData.message.trim()) return 'Message is required';
    if (formData.message.length < 10) return 'Message must be at least 10 characters long';
    
    return null; 
  };

  //handle the submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload the page
    
    const validationError = validateForm(); // check validation
    if (validationError) {
      setSubmitStatus(`Error: ${validationError}`);
      return;
    }

    setIsSubmitting(true);  
    setSubmitStatus('');    

    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 
      console.log('Form data:', formData);

      // message of successful submission
      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');

      // after submission reset fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // if submission fails display an error message
      setSubmitStatus('Error: Something went wrong. Please try again.');
    } finally {
      
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FiMail />,                  
      label: 'Email',
      value: 'devnivihara52@gmail.com',  
      href: 'mailto:devnivihara52@gmail.com' 
    },
    {
      icon: <FiPhone />,                 
      label: 'Phone',
      value: '+94 779 472 526',          
      href: 'tel:+94779472526'           
    },
    {
      icon: <FiMapPin />,                
      label: 'Location',
      value: 'Gangodawila,Nugegoda',       
      href: 'Gangodawila,Nugegoda'                         
    }
  ];

  // Navigate to my social media accounts
  const socialLinks = [
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com/Devni-Hewasundara',
      color: '#333'
    },
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/DevniVihara',
      color: '#0077b5'
    }
    
  ];

  // Apply animations
  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,           
      transition: { staggerChildren: 0.2 } 
    }
  };

  // Animations for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },      
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Main section of the page */}
        <motion.section 
          className="contact__hero"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>Get In Touch</motion.h1>
          <motion.p className="contact__subtitle" variants={itemVariants}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.section>

        <div className="contact__content">
          {/* contact form section */}
          <motion.section 
            className="contact__form-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="contact__form-container" variants={itemVariants}>
              <h2>Send me a message</h2>
              
              <form className="contact__form" onSubmit={handleSubmit}>
                
            
                <div className="form-row">
                  {/*Enter your name*/}
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
            {/*Enter email address*/}
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
        {/*Enter subject of the message*/}
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
        {/*Enter the contact message*/}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    minLength="10"
                  ></textarea>
                </div>
                
        {/*form submission button*/}
                <button 
                  type="submit" 
                  className="btn-primary contact__submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
                
        {/*display form status message*/}
                {submitStatus && (
                  <div className={`form-status ${submitStatus.startsWith('Error') ? 'error' : 'success'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </motion.div>
          </motion.section>

    {/*contact info section*/}
          <motion.section 
            className="contact__info-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="contact__info" variants={itemVariants}>
              <h2>Let's connect with me</h2>
              
              
            {/*list of contact information*/}
              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="contact__info-item"
                    variants={itemVariants}
                  >
                    
                    <div className="contact__info-icon">
                      {info.icon}
                    </div>
                    
                    <div className="contact__info-content">
                      <h3>{info.label}</h3>
                      {info.href ? (
                        <a href={info.href}>{info.value}</a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

        {/*social media links*/}
              <div className="contact__social">
                <h3>Follow me</h3>
                <div className="contact__social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      
                      className="contact__social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Follow me on ${social.name}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};


export default Contact; //export component to use in other pages and components
