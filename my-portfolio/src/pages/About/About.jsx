
import { motion } from 'framer-motion'; //import framer-motion
import { FiCode, FiUsers, FiBookOpen, FiAward } from 'react-icons/fi'; //import react-icons from library
import './AboutStudent.scss'; //import About.scss for styling

const AboutStudent = () => {
  // Skills (teachical skills and soft skills)
  const mySkills = {
    technical: [
      { name: 'C#', level: 85 },
      
      { name: 'Python', level: 85},
      { name: 'HTML / CSS', level: 90 },
      { name: 'JavaScript ', level: 55},
      { name: 'React (Learning)', level: 50},
      { name: 'MySQL / Databases', level: 80 },
      { name: 'Git & GitHub', level: 75 }
    ],
    soft: [
      
      'Problem Solving',
      'Time Management',
      'Adaptability',
      'Creative Thinking',
      'Self-Learning',
      'Leadership (Student Projects)'
    ]
  };

  // My projects
  const projects = [
    {
      title: 'Event Planner Desktop App',
      role: 'Personal Project',
      period: '2025 ',
      description:
        'Developed a standalone event planner with WPF and MySQL for event management'
    },
    {
      title: 'Portfolio Website',
      role: 'Personal Project',
      period: '2025 (Ongoing)',
      description:
        'Building my own protfolio website to showcase my skills'
    }
  ];

  // Education simplified for student
  const studies = [
    {
      degree: 'BSc. in Information and Commiunication Technology',
      institution: 'University of Sri Jayewardenepura, Sri Lanka',
      period: '2024-Present',
      description: 'Studies in Department of ICT in Humanities and Social Sciences'
    },
    {
      degree: 'NVQ Level 3',
      institution: 'VTA',
      period: '2021',
      description: 'Studied computer apllication assistant'
    }
  ];

  // Animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-student">
      <div className="about-wrapper">
        {/* Introduction*/}
        <motion.section
          className="about-intro"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.h1 variants={itemVariants}>About Me</motion.h1>
          <motion.p className="intro-text" variants={itemVariants}>
            Hello  I’m an undergraduate student passionate about coding,
            learning new technologies, and building projects that make life
            easier. I enjoy turning ideas into real applications and working
            with friends on group projects.
          </motion.p>
        </motion.section>

        {/* My skills*/}
        <motion.section
          className="about-skills"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>My Skills</motion.h2>
          <div className="skills-box">
            {/* Technical skills*/}
            <motion.div className="skills-tech" variants={itemVariants}>
              <h3>
                <FiCode /> Technical Skills
              </h3>
              <div className="skills-list">
                {mySkills.technical.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={itemVariants}
                  >
                    <div className="skill-head">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft skills*/}            <motion.div className="skills-soft" variants={itemVariants}>
              <h3>
                <FiUsers /> Soft Skills
              </h3>
              <div className="soft-list">
                {mySkills.soft.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="soft-card"
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

        {/* My projects*/}
        <motion.section
          className="about-projects"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>
            <FiBookOpen /> Projects & Activities
          </motion.h2>
          <div className="timeline">
            {projects.map((proj, idx) => (
              <motion.div key={idx} className="timeline-card" variants={itemVariants}>
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <h3>{proj.title}</h3>
                  <h4>{proj.role}</h4>
                  <span>{proj.period}</span>
                  <p>{proj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education qualifications*/}
        <motion.section
          className="about-edu"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants}>
            <FiAward /> Education
          </motion.h2>
          <div className="timeline">
            {studies.map((edu, idx) => (
              <motion.div key={idx} className="timeline-card" variants={itemVariants}>
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span>{edu.period}</span>
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

export default AboutStudent;
 