import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-left">
        <div className="footer-logo-exact">
          <img src={logo} alt="" className="Footer-Logo" />
        </div>
        <div className="footer-desc-exact">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </div>
      </div>
      <br />
      <div className="footer-divide" />
      <div className="footer-links">
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Getting started</li>
            <li>Help center</li>
            <li>Server status</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Downloads</h4>
          <ul>
            <li>iOS</li>
            <li>Android</li>
            <li>Mac</li>
            <li>Windows</li>
            <li>Chrome</li>
          </ul>
        </div>
        <div className="newsletter">
          <h4>Subscribe to our newsletter</h4>
          <div className="newsletter-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam
            mauris sed ma
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-divide" />

      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span className="footer-highlight"> © 2025 DATCARTS</span>. All rights
          reserved. Transforming retail, one cart at a time.
        </div>
        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
        {/* <br />
      <br />
      <br />
      <br /> */}
      </div>
    </div>
  </footer>
);

export default Footer;

// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => (
//   <footer className="footer">
//     <div className="footer-main">
//       <div className="footer-left">
//         <div className="footer-logo-exact">
//           <span className="footer-logo-exact-green">D</span>
//           <span className="footer-logo-exact-white">atcarts</span>
//           <span className="footer-logo-exact-dot">.</span>
//         </div>
//         <div className="footer-desc-exact">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
//           eiusmod tempor incididunt
//         </div>
//       </div>
//       <div className="footer-divide"></div>
//       <div className="footer-links">
//         <div className="footer-col">
//           <h4>Product</h4>
//           <ul>
//             <li>Features</li>
//             <li>Pricing</li>
//             <li>Case studies</li>
//             <li>Reviews</li>
//             <li>Updates</li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Company</h4>
//           <ul>
//             <li>About</li>
//             <li>Contact us</li>
//             <li>Careers</li>
//             <li>Culture</li>
//             <li>Blog</li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Support</h4>
//           <ul>
//             <li>Getting started</li>
//             <li>Help center</li>
//             <li>Server status</li>
//             <li>Report a bug</li>
//             <li>Chat support</li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>Downloads</h4>
//           <ul>
//             <li>iOS</li>
//             <li>Android</li>
//             <li>Mac</li>
//             <li>Windows</li>
//             <li>Chrome</li>
//           </ul>
//         </div>
//         <div className="footer-col newsletter">
//           <h4>Subscribe to our newsletter</h4>
//           <div className="newsletter-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam mauris sed ma
//           </div>
//           <form className="newsletter-form">
//             <input type="email" placeholder="Enter Email Address" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>
//       <div className="footer-divide"></div>
//       <div className="footer-bottom">
//         <div className="footer-copyright">
//           © 2025 <span className="footer-highlight">DATCARTS</span>. All rights reserved. Transforming retail, one cart at a time.
//         </div>
//         <div className="footer-social">
//           <a href="#"><FaFacebookF /></a>
//           <a href="#"><FaTwitter /></a>
//           <a href="#"><FaInstagram /></a>
//           <a href="#"><FaYoutube /></a>
//           <a href="#"><FaLinkedinIn /></a>
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;