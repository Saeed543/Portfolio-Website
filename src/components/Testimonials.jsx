import React from "react";
import styles from "./Testimonials.module.css";

const testimonialData = [
  {
    quote:
      "Safiullah's designs are sheer genius, fusing creativity and functionality flawlessly. His meticulous craftsmanship brings websites to life like no other, setting a benchmark for excellence in the industry.",
    author: "Sarah",
    role: "Founder",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6378227b9b02663ca7207d8a09b8923c93b3db2342d9fe6fc9469c135e8201fc?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
  },
  {
    quote:
      "Unmatched professionalism and excellence define Safiullah's approach to website development. His dedication to perfection and innovative solutions make him a standout choice for anyone seeking top-tier design.",
    author: "Mark",
    role: "developer",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c3d614555b4936e4939a515704c5e614417b554bf0a38b41a0bdcb3b3b26fcae?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
  },
  {
    quote:
      "Safiullah's designs are sheer genius, fusing creativity and functionality flawlessly. His meticulous craftsmanship brings websites to life like no other, setting a benchmark for excellence in the industry.",
    author: "Smith",
    role: "CEO",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2cf3ac3964b7b5198294715114ed2d9f12f4cea1eca58922c8c0b4391fc8b7d9?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
  },
];

const Testimonials = () => {
  let settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonialsTitle}>Testimonials</h2>
        <div className={styles.testimonialGrid}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  className={styles.authorAvatar}
                />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>-{testimonial.author}</p>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
