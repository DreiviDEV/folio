import styles from "./Footer.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        Made with ❤️
        <br />
        &copy; 2024 Vince Andrei Labastida. <br />
        All Rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
