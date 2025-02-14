import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeAbout from "../Layout/HomeAbout";
import HomeContact from "../Layout/HomeContact";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <HomeAbout />
      <HomeContact />
    </Layout>
  );
};

export default Home;
