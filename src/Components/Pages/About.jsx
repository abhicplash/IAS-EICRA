import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutBanner from "../Layout/AboutBanner";
import MissionAndVision from "../Layout/MissionAndVision ";
import AboutTeam from "../Layout/AboutTeam";
import HomeContact from "../Layout/HomeContact";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"About Us"} />
      <AboutBanner />
      <MissionAndVision />
      <AboutTeam />
      <HomeContact />
    </Layout>
  );
};

export default About;
