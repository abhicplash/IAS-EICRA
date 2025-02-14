import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutBanner from "../Layout/AboutBanner";
import MissionAndVision from "../Layout/MissionAndVision ";
import AboutTeam from "../Layout/AboutTeam";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"About Us"} />
      <AboutBanner />
      <MissionAndVision />
      <AboutTeam/>
    </Layout>
  );
};

export default About;
