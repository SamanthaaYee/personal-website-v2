import './Projects.css';
import RansomHeading from '/src/components/ransom-heading/RansomHeading.jsx';
import ProjectCard from '/src/components/project-card/ProjectCard.jsx';

const projects = [
  {
    image: '/src/assets/images/loveboxd.png', title: 'Loveboxd', skills: ['Figma'], 
    description: 'Conceptualized a dating app that integrates a user’s Letterboxd movie preferences to recommend matches, created a responsive prototype in Figma with a cohesive design system', 
    link:"https://www.figma.com/proto/WKxXCwUxTuh2J5tKIOsnCI/Loveboxd---Your-Real-Life-Meet-Cute?page-id=0%3A1&node-id=142-318&node-type=canvas&viewport=-763%2C372%2C0.41&t=zVtlrNjVXzsw2goh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=142%3A318"
  },
  {
    image: '/src/assets/images/connectivit.png', title: 'connectivIT', skills: ['HTML', 'CSS', 'JavaScript'], 
    description: "A program designed to donate electronic devices to rural, low-income areas, focusing on Indigenous reserves",
    link:"https://devpost.com/software/connectivit?ref_content=my-projects-tab&ref_feature=my_projects"
  },
]

function Projects() {
  return (
    <div>
      <div className="heading">
        <h1 className="sr-only">my projects</h1>
          <RansomHeading globalFontSize="3rem" />
      </div>
      <div className="projects-container">
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}

export default Projects;