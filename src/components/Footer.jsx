import React from "react";
import styles from "./Footer.module.css";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa0048cd01b52b71f43c52b7cfbf6033059de62a901ccf32a89ad4726d6e495d?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    alt: "Facebook",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/911f9bd6fd9acd764c738d6a7cacdbfe441917a8b9304665d81624536d1ba002?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    alt: "Twitter",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcf3f0d95f85052999648766ce74a20bc2f3a92a12506c4a211d8cb2752bc928?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    alt: "Instagram",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3da840fefc5970457e1da840811216a058531fb3a3fa3b302451aaa3363f28da?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    alt: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3c1bdafb9b80751a6a25d97c8dad6e89f0c99835edb9bedd5edf4f3ee8a238?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f"
            alt="Portfolio Logo"
            className={styles.logo}
          />
          <span className={styles.portfolioTitle}>MY PORTFOLIO</span>
        </div>
        <div className={styles.socialIcons}>
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" className={styles.socialLink}>
              <img
                src={icon.src}
                alt={icon.alt}
                className={styles.socialIcon}
              />
            </a>
          ))}
        </div>
        <p className={styles.copyright}>
          copyright © 2024 - all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
