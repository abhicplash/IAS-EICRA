import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import PageTop from "../Layout/PageTop";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <Layout>
      <PageTop />
      <div>
        <div className="Contact-details-container">
          <div className="contact-Details-wraper">
            <div className="contact-number-wrapper">
              <span>+971-588 79 3734</span>
              {/* <br /> */}
              <span>+971-671 65 347</span>
              {/* <br /> */}
              <a href="" target="_blank">
                info@iaseicra.com
              </a>
              <span>
                Villa No:68,Al Rawda 2 <br />
                Ajman - UAE
              </span>
              <div className="contact-Links-wrapper">
                <div className="contact-icon">
                  <BsYoutube />
                </div>
                <div className="contact-icon">
                  <BsInstagram />
                </div>
                <div className="contact-icon">
                  <BsFacebook />
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
