import React from "react";
import Layout from "../Layout";
import Hero from "../Hero";
import Services from "../Services";
import About from "../About";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </Layout>
  );
};

export default Home;
