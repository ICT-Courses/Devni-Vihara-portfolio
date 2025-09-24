import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      return 'Name is required';
    }
    if (!formData.email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      return 'Subject is required';
    }
    if (!formData.message.trim()) {
      return 'Message is required';
    }
    if (formData.message.length < 10) {
      return 'Message must be at least 10 characters long';
    }
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus(`Error: ${validationError}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form data:', formData);
      
      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('Error: Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+94 123 456 789',
      href: 'tel:+94123456789'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Negombo, Sri Lanka',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5'
    },
    {
      icon: <FiTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Hero Section */}
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
          {/* Contact Form */}
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
                
                {submitStatus && (
                  <div className={`form-status ${submitStatus.startsWith('Error') ? 'error' : 'success'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </motion.div>
          </motion.section>

          {/* Contact Info */}
          <motion.section 
            className="contact__info-section"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="contact__info" variants={itemVariants}>
              <h2>Let's connect</h2>
              <p>
                I'm always interested in hearing about new opportunities and projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
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

              <div className="contact__social">
                <h3>Follow me</h3>
                <div className="contact__social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
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

export default Contact;