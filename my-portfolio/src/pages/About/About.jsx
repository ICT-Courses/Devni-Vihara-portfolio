import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './About.scss';

const About = () => {
  const skills = {
    technical: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SASS/SCSS', level: 90 },
      { name: 'MongoDB', level: 75 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Responsive Design', level: 90 }
    ],
    soft: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Time Management',
      'Adaptability',
      'Critical Thinking',
      'Attention to Detail',
      'Continuous Learning'
    ]
  };

  const experience = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed responsive web applications using React.js and modern CSS techniques.'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2022 - 2023',
      description: 'Built custom websites for small businesses and startups using various technologies.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information and Communication Technology',
      institution: 'Your University',
      period: '2021 - Present',
      description: 'Specializing in Web Development and Software Engineering'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Online Platform',
      period: '2022',
      description: 'Intensive program covering MERN stack development'
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
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about__hero"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          <motion.p className="about__intro" variants={itemVariants}>
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional web applications. My journey in tech started with curiosity and 
            has evolved into a commitment to building solutions that make a difference.
          </motion.p>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          className="about__story"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div className="about__story-content" variants={itemVariants}>
            <h2>My Journey</h2>
            <div className="about__story-text">
              <p>
                My passion for web development began during my first year at university when 
                I discovered the power of turning ideas into interactive experiences. What started 
                as simple HTML pages quickly evolved into complex applications built with modern 
                frameworks and technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest industry trends. When I'm not coding, you can find me exploring new 
                technologies, contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              <p>
                My goal is to create web applications that not only look great but also provide 
                exceptional user experiences and solve real-world problems.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="about__skills"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          
          <div className="skills__container">
            {/* Technical Skills */}
            <motion.div className="skills__technical" variants={itemVariants}>
              <h3>
                <FiCode />
                Technical Skills
              </h3>
              <div className="skills__list">
                {skills.technical.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-item__header">
                      <span className="skill-item__name">{skill.name}</span>
                      <span className="skill-item__level">{skill.level}%</span>
                    </div>
                    <div className="skill-item__bar">
                      <motion.div 
                        className="skill-item__progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div className="skills__soft" variants={itemVariants}>
              <h3>
                <FiUsers />
                Soft Skills
              </h3>
              <div className="soft-skills__grid">
                {skills.soft.map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    className="soft-skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="about__experience"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>
            <FiTrendingUp />
            Experience
          </motion.h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline__item"
                variants={itemVariants}
              >
                <div className="timeline__marker"></div>
                <div className="timeline__content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="timeline__period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="about__education"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>
            <FiAward />
            Education
          </motion.h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="timeline__item"
                variants={itemVariants}
              >
                <div className="timeline__marker"></div>
                <div className="timeline__content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="timeline__period">{edu.period}</span>
                  <p>{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;