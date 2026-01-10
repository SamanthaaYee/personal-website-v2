import './ProjectCard.css';
import Polaroid from '/src/components/polaroid/Polaroid.jsx';
import linkIcon from '/src/assets/icons/link-grey.png';

function ProjectCard({ projects }) {
    return (
        <div class="project-card-container">
            {projects.map((projects, index) => (
                <div className="project-card" key={index}>
                    <Polaroid imageSrc={projects.image} caption={false} height="12rem" rotate={false}/>
                    <div className="project-info">
                        <div className="project-title-link rise-animation">
                            <a href={projects.link} className="" target="_blank" rel="noopener noreferrer"><h2>{projects.title}</h2></a>
                            <a href={projects.link} className="icon link-icon" target="_blank" rel="noopener noreferrer"></a>

                        </div>
                        <div className="project-skills">
                            {projects.skills.map((skills, skillIndex) => (
                                    <mark className={skillIndex}>{skills}</mark>
                            ))}
                        </div>
                        
                        <p className="project-description">{projects.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard;