import React from 'react';
import styles from './Contact.module.css'; // Import the CSS Module
import Layout from '../Layout';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>If you have any questions, please feel free to reach out!</p>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required className={styles.textarea}></textarea>
          </div>

          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
