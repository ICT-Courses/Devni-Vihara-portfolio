
import { useState, useEffect } from 'react'; //import react hooks

import { motion } from 'framer-motion';//import motion from animation

import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';//import icons from reacr icons

import ProjectCard from '../../components/ProjectCard/ProjectCard';//import ProjectCard component

import { projectsData, githubUsername } from '../../data/projects';//import projects.js 

import useFetch from '../../hooks/useFetch';//import custom hook to fetch data

import './Projects.scss';//import Projects.scss for styling 

// define main component
const Projects = () => {
  // State to store used filter
  const [filter, setFilter] = useState('all');
  // store filtered project list
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // use custom hook to fetch GitHub repos
  const { data: githubRepos, loading, error } = useFetch(
    `https://api.github.com/users/${Devni-Hewasundara}/repos?sort=updated&per_page=6`
  );

  // update list of projects
  useEffect(() => {
    if (filter === 'all') {
      // dispaly all projects
      setFilteredProjects(projectsData);
    } else if (filter === 'featured') {
      
      setFilteredProjects(projectsData.filter(project => project.featured));
    } else {
      
      setFilteredProjects(
        projectsData.filter(project => 
          project.technologies.some(tech => 
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }
  }, [filter]); 

  // set animations
  const containerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  // animations for items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <div className="projects">
      <div className="container">

        {/* main section consists of title and description */}
        <motion.section 
          className="projects__hero"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>My Projects</motion.h1>
          <motion.p className="projects__subtitle" variants={itemVariants}>
            A collection of my work showcasing different technologies and approaches to solving problems.
          </motion.p>
        </motion.section>

        {/* filter buttons */}
        <motion.section 
          className="projects__filters"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="filter-buttons" variants={itemVariants}>
            {/* filter icons */}
            <FiFilter className="filter-icon" />
            {/* button for display all projects */}
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            {/* Button to show only featured projects */}
            <button 
              className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
            {/* Button to show React projects */}
            <button 
              className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
              onClick={() => setFilter('react')}
            >
              React
            </button>
            {/* Button to show JavaScript projects */}
            <button 
              className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
              onClick={() => setFilter('javascript')}
            >
              JavaScript
            </button>
          </motion.div>
        </motion.section>

        {/* project grids */}
        <motion.section 
          className="projects__grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="projects__container">
            
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* GitHub repos */}
        <motion.section 
          className="github-repos"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }} 
        >
          <motion.h2 variants={itemVariants}>
            <FiGithub />
            Latest from GitHub
          </motion.h2>
          
          {/* display loading state */}
          {loading && (
            <motion.div className="github-repos__loading" variants={itemVariants}>
              <div className="loading"></div>
              <p>Loading repositories...</p>
            </motion.div>
          )}
          
          {/* dispaly an error message */}
          {error && (
            <motion.div className="github-repos__error" variants={itemVariants}>
              <p>Unable to fetch repositories. Please check back later.</p>
            </motion.div>
          )}
          
          {/* Show repository list when data is available */}
          {githubRepos && !loading && (
            <motion.div className="github-repos__grid" variants={itemVariants}>
              {githubRepos.slice(0, 6).map((repo, index) => (
                <motion.div 
                  key={repo.id} 
                  className="repo-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }} 
                >
                  {/* Repo header  */}
                  <div className="repo-card__header">
                    <h3>{repo.name}</h3>
                    <div className="repo-card__stats">
                      <span> {repo.stargazers_count}</span>
                      <span> {repo.forks_count}</span>
                    </div>
                  </div>
                  
                  {/* Repo description */}
                  <p className="repo-card__description">
                    {repo.description || 'No description available'}
                  </p>
                  
                  {/* Repo footer  */}
                  <div className="repo-card__footer">
                    <div className="repo-card__language">
                      {repo.language && (
                        <span className="language-tag">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    
                    <div className="repo-card__links">
                      {/* GitHub link */}
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-link"
                        aria-label={`View ${repo.name} repository`}
                      >
                        <FiGithub />
                      </a>
                      {/* Live demo link  */}
                      {repo.homepage && (
                        <a 
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repo-link"
                          aria-label={`View ${repo.name} live demo`}
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* view all GitHub repos */}
          <motion.div className="github-repos__cta" variants={itemVariants}>
            <a 
              href={`https://github.com/${Devni-Hewasundara}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiGithub />
              View All on GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* last  section */}
        <motion.section 
          className="projects__cta"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2>Have a Project in Mind?</h2>
            <p>I'm always interested in working on new and exciting projects. Let's collaborate!</p>
            <a href="/contact" className="btn-primary">
              Let's Work Together
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};


export default Projects;//export component to use in another pages and components
