import './ProjectCard.css';
import Polaroid from '/src/components/polaroid/Polaroid.jsx';
import linkIcon from '/src/assets/icons/link-grey.png';

function ProjectCard({ projects }) {
    return (
        <div class="project-card-container">
            {projects.map((projects, index) => (
                <div className="project-card" key={index}>
                    <Polaroid imageSrc={projects.image} height="15rem" />
                    <div className="project-info">
                        <div className="project-title-link">
                            <h2>{projects.title}</h2>
                            <a href={projects.link} className="icon rise-animation link-icon" target="_blank" rel="noopener noreferrer"></a>

                        </div>
                        <div className="project-skills">
                            {projects.skills.map((skills, skillIndex) => (
                                    <mark className={skillIndex}>{skills}</mark>
                            ))}
                        </div>
                        
                        <p>{projects.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;