import { Col, Row } from "antd";
import React from "react";

function ServiceView() {
  return (
    <section className="container project-view-two-container">
      <h3>
        Recent <span>Project</span>
        {/* <div></div> */}
      </h3>

      <Row gutter={[24, 16]} className="row">
        <h1 className="float-text">PROJECTS</h1>
        <Col md={8} className="col-md-4 project-view-two-img-container">
          <div className="project-view-two-img">
            <img
              src="https://i.ibb.co/9thDSmL/img4.jpg"
              alt=""
              width="100%"
              height="auto"
            />
            <div className="project-view-two-img-line"></div>
          </div>
        </Col>
        <Col md={8} className="col-md-5 project-view-two-img-container">
          <div className="project-view-two-img">
            <img
              src="https://i.ibb.co/S5mnsp7/img2.jpg"
              alt=""
              width="100%"
              height="auto"
            />
            {/* <img src={s4} alt="" width="100%" height="auto" /> */}
            <div className="project-view-two-img-line"></div>
          </div>
        </Col>
        <Col md={8} className="col-md-3 project-view-two-img-container">
          <div className="project-view-two-img">
            <img
              className="mb-5"
              src="https://i.ibb.co/KXdTVqK/img3.jpg"
              alt=""
              width="100%"
              height="auto"
            />
            <img src="" alt="" width="100%" height="auto" />
            <div className="project-view-two-img-line"></div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ServiceView;
