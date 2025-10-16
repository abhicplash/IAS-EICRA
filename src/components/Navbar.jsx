import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <nav className="navbar">
      {/* <h2>Datcarts</h2> */}
      <img src={logo} alt="Datcarts Logo" className="navLogo" />
      <div className="nav-icon" onClick={() => setView(!view)}>
        <FaBars />
      </div>
      {view ? (
        <ul className="listMob">
          <Link to="/" className="navigation">
            <li>Home</li>
          </Link>
          <Link to="/about" className="navigation">
            <li>About Us</li>
          </Link>
          <Link to="/legal" className="navigation">
            <li>Legal Privacy</li>
          </Link>
          <Link to="/contact" className="navigation">
            <li>Contact Us</li>
          </Link>
          <li>
            {" "}
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
          </li>
        </ul>
      ) : null}
      <ul className="list-desk">
        <Link to="/" className="desk-list-navigation">
          <li>Home</li>
        </Link>
        <Link to="/about" className="desk-list-navigation">
          <li>About Us</li>
        </Link>
        <Link to="/legal" className="desk-list-navigation">
          <li>Legal Privacy</li>
        </Link>
        <Link to="/contact" className="desk-list-navigation">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
