import PropTypes from "prop-types";
import styles from "./Projects.module.css";
function ProjectCard({ image, imgAlt, link, title, description }) {
  return (
    <a target="_blank" href={link}>
      <img className="hover" src={image} alt={imgAlt} />
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disable: PropTypes.bool,
};

export default ProjectCard;
