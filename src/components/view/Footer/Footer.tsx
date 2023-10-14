"use client";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGreaterThan,
} from "react-icons/fa";

import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content-container">
          <div className="footer-first-content">
            <h5>HOQUE CONSTRUCTION LLC</h5>
            <div>
              {/* <img src={logo} alt="" width="120px" height="auto" /> */}
            </div>
          </div>

          <div className="footer-second-content">
            <h3 className="footer-title-hr">CONTACT</h3>
            <p className="d-flex align-items-center">
              <AiFillPhone className="footer-contact-icon footer-icon" />
              {"   "}(917) 642-5286
            </p>
            <p className="d-flex align-items-center ">
              <BsFillEnvelopeFill className="footer-icon" />
              {"   "}hoquebk@yahoo.com
            </p>
            <p className="d-flex align-items-center">
              <MdLocationOn className="footer-icon" /> {"  "}422 8th Avenue
              Brooklyn ,NY 11232
            </p>
          </div>
          <div className="footer-third-content">
            <h3 className="footer-title-hr">SERVICES</h3>
            <div className="footer-service d-flex">
              <ul>
                <li>Painting</li>
                <li>Plastering</li>
                <li>Taping</li>
                <li>Carpentry</li>
                {/* <li>Wallpaper</li> */}
                <li>Plumbing</li>
              </ul>
              <ul>
                <li>Sheetrock Work</li>
                <li>Tile Work</li>
                <li>Roofing</li>
                {/* <li>Stucco</li> */}
                <li>Thoro-Coat</li>
                <li>Brick Work</li>
              </ul>
            </div>
          </div>

          <div className="footer-social-part">
            <h3 className="footer-title-hr">QUICKS LINKS</h3>

            <div>
              {" "}
              <FaGreaterThan
                style={{ height: "12px", width: "7.5px", marginRight: "10px" }}
              />{" "}
              <Link className="footer-link" href="/about">
                About Us
              </Link>
            </div>

            <div>
              {" "}
              <FaGreaterThan
                style={{ height: "12px", width: "7.5px", marginRight: "10px" }}
              />{" "}
              <Link className="footer-link" href="/project">
                Project
              </Link>
            </div>

            <div>
              {" "}
              <FaGreaterThan
                style={{ height: "12px", width: "7.5px", marginRight: "10px" }}
              />{" "}
              <Link className="footer-link" href="/contact">
                Contact
              </Link>
            </div>

            <div>
              {" "}
              <FaGreaterThan
                style={{ height: "12px", width: "7.5px", marginRight: "10px" }}
              />{" "}
              <Link className="footer-link" href="/services">
                Service
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="footer-copyright-bar">
        <div className="footer-copyright container">
          <div>
            {" "}
            Copyright © {new Date().getFullYear()} Hoque Construction. All
            rights reserved.
          </div>

          <div className="footer-social-container">
            <div className="footer-social-icon">
              <FaTwitter className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaFacebookF className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaLinkedinIn className="f-icon" />
            </div>
            <div className="footer-social-icon">
              <FaInstagram className="f-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
