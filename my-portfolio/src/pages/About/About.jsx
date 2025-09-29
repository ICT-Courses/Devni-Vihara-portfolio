import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import './About.scss';   //import icons from react library, motion from framer-motion and About.scss for styling

const About = () => {
  const skills = {                                    // languages and teachnologies i know
    technical: [
      { name: 'JavaScript', level: 60 },
      { name: 'React.js', level: 50 },
      { name: 'Node.js', level: 40 },
      { name: 'HTML', level: 80 },
      { name: 'SASS/SCSS', level: 50 },
      { name: 'MongoDB', level: 40 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Responsive Design', level: 50 }
    ],
    soft: [
      
      
      'Communication',                               //soft skills i have
      'Time Management',
      'Leadership',
      'Critical Thinking',
      'Continuous Learning'
    ]
  };

  const experience = [
    {                                              //experiences i have
      title: 'Banking Intern',
      company: 'HNB Company',
      period: '2023',
      description: 'Improved knowledge about banking sector'
    }
   
  ];


  const education = [                                                //educational qualifications i have
    {
      degree: 'Bachelor of Information and Communication Technology',
      institution: 'University of Sri Jayawardenepura',
      period: '2024 - Present',
      description: 'Studies in department of ICT'
    },
    {
      degree: 'NVQ level 03',
      institution: 'VTA',
      period: '2020',
      description: 'Qualified computer application assistant'
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
        {/* main section */}
        <motion.section 
          className="about__hero"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          <motion.p className="about__intro" variants={itemVariants}>
            I'm a passionate to be a  web developer with a love for creating beautiful, 
            functional web applications. 
          </motion.p>
        </motion.section>

        {/* my story */}
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
               I'm an undergraduate in university of Sri Jayawardenepura
              </p>
              <p>
                I 'm studying' in department of ICT
              </p>
              <p>
                My goal is to create web applications for real-world concequences.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* my skills section */}
        <motion.section 
          className="about__skills"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>Skills & Expertise</motion.h2>
          
          <div className="skills__container">
            {/* technical skills i have */}
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

            {/* soft skills i have */}
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

        {/* my experiences section */}
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

        {/* educational qualification section */}
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

export default About;  //export to use in other pages