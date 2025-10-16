import React from "react";
import Layout from "../components/Layout";
import PageTop from "../components/PageTop";
import Team from "../components/Team";
import Brand from "../components/Brand";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"About Us"}/>
      {/* <Brand /> */}
      <Team/>

    </Layout>
  );
};

export default About;
