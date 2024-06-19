import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import flippy from "../../assets/F.png";
import flippyLite from "../../assets/FL.png";
const projects_data = [
  {
    imageSrc: "https://via.placeholder.com/200",
    imgAlt: "Project 1 - Under Construction",
    link: "#",
    title: "Project 1- Under Construction",
    description: "Description of project 1",
    disable: true,
  },
  {
    imageSrc: "https://via.placeholder.com/200",
    imgAlt: "Project 2 -  Under Construction",
    link: "#",
    title: "Project 2  -  Under Construction",
    description: "Description of project 2",
    disable: true,
  },
  {
    imageSrc: flippy,
    imgAlt: "MisoRobotics Flippy UI Image",
    link: "#",
    title: "FLIPPY",
    description:
      "Advanced user interface designed for their robotic kitchen assistant.",
    disable: true,
  },
  {
    imageSrc: flippyLite,
    imgAlt: "MisoRobotics Flippy Lite Version UI Image",
    link: "#",
    title: "FLIPPY LITE",
    description:
      "Flippy Lite version of the user interface, mainly focus on just 1-2 products.",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={"sectionTitle"}>Projects</h1>

      <div className={styles.projectContainer}>
        {projects_data.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.imageSrc}
            imgAlt={project.imgAlt}
            link={project.link}
            title={project.title}
            description={project.description}
            disable={project.disable}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
