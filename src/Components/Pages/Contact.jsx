import React from "react";
import PageTop from "../Layout/PageTop";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <Layout>
      <PageTop pageName="Contact us" />
      <div className="contact-container">
        <div className="first-row">
          <div className="contact">
            <div className="contactus">Contact Us</div>
            <div className="get">
              Get In Touch With <br /> IAS-EICRA
            </div>
            <p>
              Get in touch with us effortlessly through our Contact page!
              Whether you have questions, feedback, or need assistance, we’re
              here to help. Reach out to us via the form, email, or find our
              location on the map below.
            </p>
          </div>

          <div className="card">
            <div className="bluecard">
              <GrLocation className="location" />
              <div className="our-location">Our Location</div>
              <div className="location-para">
                Villa No:68 - Al Rawda 2 <br />
                Ajman-UAE
              </div>
            </div>
            <div className="whitecard">
              <BsTelephone className="phone" />
              <div className="phonenumber">Phone Number</div>
              <div className="location-paraphone">
                +971-67165347 <br />
                +971-588793734
              </div>
            </div>
            <div className="bluecard">
              <MdOutlineEmail className="location" />
              <div className="our-location">Email Us</div>
              <div className="location-para">info@iaseicra.com</div>
            </div>
            <div className="whitecard">
              <FaRegClock className="phone" />
              <div className="phonenumber">Working hours</div>
              <div className="location-paraphone">
                Monday-Sunday <br />
                8am-7am
              </div>
            </div>
          </div>
        </div>

        <div className="second-row">
          <div className="message">
            <div className="iconWrapper">
              <MdOutlineEmail className="messageicon" />
            </div>
            <span>
              Reach out to us easily through the form ! Share your inquiries,
              feedback, or requests, and we’ll get back to you promptly.
            </span>
          </div>
          <form action="">
            <div className="form-container">
              <div className="input-wrapper">
                <input className="input" placeholder="FirstName" type="text" />
                <input
                  className="input"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="input-wrapper">
                <input className="input" placeholder="Subject" type="text" />
                <input
                  className="input"
                  placeholder="Your Number"
                  type="text"
                />
              </div>
              <textarea
                name=""
                className="textarea"
                placeholder="Message"
                id=""
              ></textarea>
              <button  >send your message </button>
            </div>
          </form>
        </div>
        <div className="third-row">
          <h1 className="googlemap">Find Us On <br /> Google Maps</h1>
          <p>
            Find us conveniently with Google Maps embedded on our Contact page! <br />
            View our exact location and explore the easiest route to reach us.
            We’re just a click away to guide you here.
          </p>
          <div className="mapwrapper">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2840668337944!2d55.51462277449597!3d25.39530022364998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7005785939d%3A0x2a69a5c04d351e02!2sIAS%20-%20EICRA!5e0!3m2!1sen!2sae!4v1739484234806!5m2!1sen!2sae"
              className="Contactmap"
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
