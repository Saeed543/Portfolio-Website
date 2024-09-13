import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.right}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Safiullah
            Saleem</h1>
          <h2 className={styles.heroSubtitle}>
            Web Designer / software developer
          </h2>
          <p className={styles.heroDescription}>
            Web Design, development and more
          </p>
        </div>
      </div>
      <div className={styles.left}>
        <svg width="100" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width={100} height="100%" fill="black" transform="skewX(-10)" />
        </svg>    
      </div>
    </section>
  );
};

export default Hero;
