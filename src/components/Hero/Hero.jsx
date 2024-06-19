import styles from "./Hero.module.css";
import image from "../../assets/hero.png";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import facebookIconDark from "../../assets/icons8-facebook.svg";
import facebookIconLight from "../../assets/icons8-facebook-light.svg";
import githubIconDark from "../../assets/icons8-github.svg";
import githubIconLight from "../../assets/icons8-github-light.svg";
import linkedinDark from "../../assets/icons8-linkedin.svg";
import linkedinLight from "../../assets/icons8-linkedin-light.svg";
import CV from "../../assets/Labastida-Vince-Andrei-JSD.pdf";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? moon : sun;
  const facebookIcon = theme === "light" ? facebookIconDark : facebookIconLight;
  const githubIcon = theme === "light" ? githubIconDark : githubIconLight;
  const linkedinIcon = theme === "light" ? linkedinDark : linkedinLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.themeModeContainer}>
        <img
          src={image}
          alt="Profile Picture Of Vince Labastida"
          className={styles.image}
        />
        <img
          src={themeIcon}
          alt="Theme Icon"
          className={styles.themeIcon}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>Vince Andrei Labastida</h1>
        <p className={styles.title}>
          Full Stack Developer Major in Frontend Development
        </p>
        <span>
          <a href="https://facebook.com/vnc.andrei26" target="_blank">
            <img
              src={facebookIcon}
              alt="facebook Icon"
              className={styles.facebookIcon}
            />
          </a>
          <a href="https://github.com/DreiviDEV" target="_blank">
            <img
              src={githubIcon}
              alt="facebook Icon"
              className={styles.githubIcon}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vince-andrei-labastida-135685213/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="facebook Icon"
              className={styles.linkedIcon}
            />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className={styles.button}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
