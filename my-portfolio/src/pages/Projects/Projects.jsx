import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectsData, githubUsername } from '../../data/projects';
import useFetch from '../../hooks/useFetch';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // fetch GitHub repos from custom hook
  const { data: githubRepos, loading, error } = useFetch(
    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
  );

  useEffect(() => {
    if (filter === 'all') {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="projects">
      <div className="container">
        {/* main part */}
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

        {/* fiter buttons */}
        <motion.section 
          className="projects__filters"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="filter-buttons" variants={itemVariants}>
            <FiFilter className="filter-icon" />
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
            <button 
              className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
              onClick={() => setFilter('react')}
            >
              React
            </button>
            <button 
              className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
              onClick={() => setFilter('javascript')}
            >
              JavaScript
            </button>
          </motion.div>
        </motion.section>

        {/* Featured Projects */}
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

        {/* GitHub repo section */}
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
          
          {loading && (
            <motion.div className="github-repos__loading" variants={itemVariants}>
              <div className="loading"></div>
              <p>Loading repositories...</p>
            </motion.div>
          )}
          
          {error && (
            <motion.div className="github-repos__error" variants={itemVariants}>
              <p>Unable to fetch repositories. Please check back later.</p>
            </motion.div>
          )}
          
          {githubRepos && !loading && (
            <motion.div className="github-repos__grid" variants={itemVariants}>
              {githubRepos.slice(0, 6).map((repo, index) => (
                <motion.div 
                  key={repo.id} 
                  className="repo-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="repo-card__header">
                    <h3>{repo.name}</h3>
                    <div className="repo-card__stats">
                      <span> {repo.stargazers_count}</span>
                      <span> {repo.forks_count}</span>
                    </div>
                  </div>
                  
                  <p className="repo-card__description">
                    {repo.description || 'No description available'}
                  </p>
                  
                  <div className="repo-card__footer">
                    <div className="repo-card__language">
                      {repo.language && (
                        <span className="language-tag">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    
                    <div className="repo-card__links">
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-link"
                        aria-label={`View ${repo.name} repository`}
                      >
                        <FiGithub />
                      </a>
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
          
          <motion.div className="github-repos__cta" variants={itemVariants}>
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiGithub />
              View All on GitHub
            </a>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
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

export default Projects; //export to use in other pages