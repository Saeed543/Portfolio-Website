import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

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
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className={styles.navLink}>
              Projects
            </Link>
          </li>
        </ul>
        <button className={styles.contactButton}><Link style={{textDecoration: "none", color: "white", fontWeight: "700"}} to="/Contact"> Contact</Link></button>
      </nav>
    </header>
  );
};

export default Header;
