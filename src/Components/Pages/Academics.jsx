import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import "./Academics.css";
import { allServicesList } from "../../Utils/allservices";
import HomeContact from "../Layout/HomeContact";

const Academics = () => {
  return (
    <Layout>
      <PageTop pageName={"Academics"} />
      <div className="Academics-container">
        <div className="main-head"> IAS EICRA</div>
        <div className="service-para">
          dynamic educational network across the Middle East blending IAS
          coaching, performing arts, culture, and sports. We provide
          comprehensive Civil Services Exam preparation and support for higher
          studies. Our academy offers top-tier training for artists, dancers,
          and athletes. We also provide supplementary tuition for children of
          visitors, ensuring seamless education. Empowering students to reach
          their full potential through academic and personal growth.
        </div>
        <div className="service-box">
          <div className="service-box-rowone">
            {allServicesList.map((list, index) => (
              <div className="services" key={index}>
                <img src={list.icon} alt={list.servicename} />
                <div className="service-one-head">{list.servicename}</div>
                <div className="service-box-para">{list.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <HomeContact/>
      </div>
    </Layout>
  );
};

export default Academics;
