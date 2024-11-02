import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbubble from "./Navbubble";

const Layout = ({ children }) => {
  return (
    <div className={styles.desktop}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Navbubble />
      <Footer />
    </div>
  );
};

export default Layout;
  