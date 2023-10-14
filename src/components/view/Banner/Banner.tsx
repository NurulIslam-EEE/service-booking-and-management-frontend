"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Banner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleNavigate = () => {
    // navigate("/contact");
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
      >
        <div className="banner-item-1">
          {/* <img src={b1} alt=''/> */}
          <div className="container banner-content">
            <div>
              <h5>SINCE 2014</h5>
              <h1>WE BUILD THE TRUST</h1>
              <div className="d-flex justify-content-center banner-btn">
                <button onClick={handleNavigate}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item-2">
          {/* <img src={b2} alt=''/> */}
          <div className="container banner-content">
            <div>
              <h5>SINCE 2014</h5>
              <h1>Constructing homes with pride</h1>
              <div className="d-flex justify-content-center banner-btn">
                <button onClick={handleNavigate}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item-3">
          {/* <img src={b3} alt=''/> */}
          <div className="container banner-content">
            <div>
              <h5>SINCE 2014</h5>
              <h1>
                We provide quality construction
                {/* for every project */}
              </h1>
              <div className="d-flex justify-content-center banner-btn">
                <button onClick={handleNavigate}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
