import React from 'react';
import "./RecentProjects.css";
import { projects } from "../../data/recentProjects";
import { FaReact, FaEthereum, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiSolidity, SiNextdotjs, SiInternetcomputer } from "react-icons/si";

const RecentProjects = () => {
    return (
        <>
            <section id='recent-projects'>
                <div className='recent-projects'>
                    <div className='recent-projects-header'>
                        <h1>Recent Projects</h1>
                        <p>From concept to completion, these projects showcase my expertise in building <strong>innovative and impactful solutions</strong>. Explore my work below!</p>
                    </div>
                    <div className="projects-container">
                        {projects.map((project, index) => (
                            <div key={index} className={`project-card ${index % 2 === 0 ? "left" : "right"}`}>
                                <img src={project.image} alt={project.title} />
                                <div className="project-info">
                                    <span className={`project-category ${project.category.toLowerCase()}`}>{project.category}</span>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.techStack.map((Icon, idx) => <Icon key={idx} />)}
                                    </div>

                                    <div className="project-links">
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                            Live Demo <FaExternalLinkAlt />
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecentProjects