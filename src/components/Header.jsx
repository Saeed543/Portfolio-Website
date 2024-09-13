import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5959b0b58263f97566b337de4f0a918dcf160606ff16d3e872c796d4847ad37?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f"
            alt="Portfolio Logo"
            className={styles.logo}
          />
          <span className={styles.portfolioTitle}>MY PORTFOLIO</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
        </ul>
        <button className={styles.contactButton}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
