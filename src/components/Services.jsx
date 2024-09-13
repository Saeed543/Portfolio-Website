import React from "react";
import styles from "./Services.module.css";

const serviceData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cbb4a3621a66ed1732e5dbf4b1bb8727442011ece237ea1292c16ce98355bbd?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    title: "graphics design",
    alt: "Graphics Design Icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/568503de2f7c54bdf435d113213452d1e7f11c8e48a309bcf5f9b4945b5c8235?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    title: "Web-Development",
    alt: "Web Development Icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a63079bca26481e6a5c8143b994911d2a6ee8a66c9475d52583f42e9d3ccd38b?placeholderIfAbsent=true&apiKey=2f88c8e96fe14f4f91e62ce48236195f",
    title: "Seo",
    alt: "SEO Icon",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      {serviceData.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <img
            src={service.icon}
            alt={service.alt}
            className={styles.serviceIcon}
          />
          <h3 className={styles.serviceTitle}>{service.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Services;
