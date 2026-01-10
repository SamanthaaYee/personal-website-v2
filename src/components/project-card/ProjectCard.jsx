import './ProjectCard.css';
import Polaroid from '../../components/polaroid/Polaroid';

function ProjectCard({ projects }) {
    return (
        <div className="project-card-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <Polaroid imgSrc={project.image} altText={project.title} caption={false} height="12rem" rotate={false}/>
                    <div className="project-info">
                        <div className="project-title-link rise-animation">
                            <a href={project.link} className="" target="_blank" rel="noopener noreferrer"><h2>{project.title}</h2></a>
                            <a href={project.link} className="icon link-icon" target="_blank" rel="noopener noreferrer"></a>

                        </div>
                        <div className="project-skills">
                            {project.skills.map((skills, skillIndex) => (
                                    <mark className={skillIndex}>{skills}</mark>
                            ))}
                        </div>

                        <p className="project-description">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;