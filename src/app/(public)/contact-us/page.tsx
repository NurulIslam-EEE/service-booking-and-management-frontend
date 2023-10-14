"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  const [data, setData] = useState({
    name: "",
    service: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendData = () => {
    const dataText =
      data.name + "" + data.service + "" + data.phone + "" + data.message;
    const url = `https://web.whatsapp.com/send?phone=19176425286&text=${dataText}&app_absent=0`;

    window.open(url, "_blank");
  };
  return (
    <section>
      <div className="service-banner">
        <div className="service-banner-content container">
          <div>
            <h1>CONTACT</h1>
            <div className="d-flex align-items-end">
              <span></span>
              <p>SPECIALIZING IN HOME CONSTRUCTION</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="contact-info-container">
            <div className="contact-info">
              <p className="d-flex align-items-center">
                {" "}
                <span className="contact-icon-container">
                  {" "}
                  <FaPhoneAlt />
                </span>{" "}
                (917) 642-5286
              </p>
              <p className="d-flex align-items-center">
                {" "}
                <span className="contact-icon-container">
                  <MdEmail />
                </span>{" "}
                hoquebk@yahoo.com
              </p>
              <p className="d-flex align-items-center">
                <span className="contact-icon-container">
                  <FaMapMarkerAlt />
                </span>{" "}
                422 8th Avenue <br /> Brooklyn ,NY 11232
              </p>
              <div className="contact-social-container">
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

            {/* <img
          src="https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg"
          alt=""
        /> */}
            <div className="contact-us-input-container">
              <div>
                {/* <h3>We would like to learn more</h3> */}

                <select
                  id="cars"
                  placeholder="Interest In"
                  name="service"
                  onChange={handleChange}
                >
                  <option value="Painting">Painting</option>
                  <option value="Plastering">Plastering</option>
                  <option value="Taping">Taping</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Wallpaper">Wallpaper</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Sheetrock Work">Sheetrock Work</option>
                  <option value="Tile Work">Tile Work</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Stucco">Stucco</option>
                  <option value="Thoro-Coat">Thoro-Coat</option>
                  <option value="Brick Work">Brick Work</option>
                </select>

                <div className="d-md-flex justify-content-between">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                  />
                  <input
                    onChange={handleChange}
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone No"
                  />
                </div>

                {/* <textarea
                  onChange={handleChange}
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                /> */}
              </div>

              <div className="contact-ust-btn">
                <button onClick={sendData}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.2618043664197!2d-74.00065468476055!3d40.646158979339106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454a85bf273b%3A0x4c8d09acd4730b09!2s8th%20Ave%2C%20Brooklyn%2C%20NY%2011232%2C%20USA!5e0!3m2!1sen!2sbd!4v1666118885612!5m2!1sen!2sbd"
          width="100%"
          height="550vw"
          title="Hoque Construction"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
