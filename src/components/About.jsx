import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb194b3595ef316b06978364959f202c4a79fe138d30cd7af142c483da928018?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f"
        alt="Safiullah Saleem"
        className={styles.profileImage}
      />
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>
          <span className={styles.titleDecoration}></span>
          About Me
        </h2>
        <p className={styles.aboutDescription}>
          I'm a Creative Developer for interactive projects that usually are
          websites. I Spend most of time coding outstanding projects or studying
          new technologies to improve my development stack. I develop compelling
          designs that spring to life using transition and animations that suit
          my clients, using the most sophisticated technologies available today
          for fully interactive and responsive websites.
        </p>
      </div>
    </section>
  );
};

export default About;
