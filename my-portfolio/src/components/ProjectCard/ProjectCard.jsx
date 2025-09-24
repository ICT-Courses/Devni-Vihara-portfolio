import { FiGithub, FiExternalLink } from 'react-icons/fi'; //import icons from react library 
import { motion } from 'framer-motion'; //import motion from framer motion
import './ProjectCard.scss'; //import ProjectCard.scss for styling 


const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      // animation start
      initial={{ opacity: 0, y: 60 }}
      // 
      animate={{ opacity: 1, y: 0 }}
      // 
      transition={{ duration: 0.6, delay: index * 0.15 }}
      // animation end 
      whileHover={{ y: -8 }}
    >
      {/* Project image */}
      <div className="project-card__image">
        <img
          src={project.image}          
          alt={project.title}          
          
        />
        
        {project.featured && (
          <div className="project-card__badge">Featured</div>
        )}
      </div>

      {/* Apply project content  */}
      <div className="project-card__content">
        {/* Add project title */}
        <h3 className="project-card__title">{project.title}</h3>

        {/* Add short description about project */}
        <p className="project-card__desc">{project.description}</p>

        {/* Shows which technologies used in each project */}
        <div className="project-card__tech-list">
          {project.technologies.map((tech, i) => (
            //show each technology as a tag
            <span key={i} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Display GitHub and Demo links */}
        <div className="project-card__links">
          {/* Shows GitHub link */}
          <a
            href={project.githubUrl}
            target="_blank"
            className="project-card__link"
          >
            <FiGithub />   {/* GitHub icon from library */}
            <span>Source</span>
          </a>

          {/* Display live demo link */}
          <a
            href={project.liveUrl}
            target="_blank"
        
            className="project-card__link project-card__link--main"
          >
            <FiExternalLink />   {/*Display External link icon*/}
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectCard; //Export ProjectCard component to use in other components and pages
