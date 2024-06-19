import styles from "./Skills.module.css";
import checkLight from "../../assets/check-light.svg";
import checkDark from "../../assets/check-dark.svg";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import React from "react";

const skills = [
  ["HTML", "CSS", "Tailwind CSS", "Material-UI", "Bootstrap"],
  ["JavaScript", "TypeScript", "React", "Next.js", "Redux"],
  ["Node.js", "Express", "PHP", "Laravel", "Python", "Django"],
  ["SQLite", "MongoDB", "Firebase", "MySQL", "PostgreSQL", "Supabase"],
  ["Git", "AWS", "Docker", "Figma", "Agile", "Scrum", "Jira"],
];

const Skill = ({ skill }) => {
  const { theme } = useTheme();
  const checkIcon = theme === "light" ? checkDark : checkLight;

  return (
    <span>
      <img src={checkIcon} alt="check icon" />
      <p>{skill}</p>
    </span>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {skills.map((skillSet, index) => {
        return (
          <React.Fragment key={index}>
            <div className={styles.skillList}>
              {skillSet.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
            {index !== skills.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default Skills;
