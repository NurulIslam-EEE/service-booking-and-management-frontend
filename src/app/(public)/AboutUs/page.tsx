import React from "react";
import styles from "./page.module.css";

function AboutUs() {
  return (
    <>
      <div className={styles.service_banner}>
        <div className={`${styles.service_banner_content} container`}>
          <div>
            <h1>ABOUT US</h1>
            <div className="d-flex align-items-end">
              <span></span>
              <p>HOME/ABOUT US</p>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className={styles.about_us_container}>
          <div className={styles.about_content_container}>
            <h3>ABOUT US</h3>
            <p>
              Page 1History & PhilosophyABLE Construction began as a general
              works contractor in 1995. Over theyears, the group has undertaken
              many challenging projects and accumulatedskills, know-how and
              experiences in design and build solutions, projectmanagement
              services, building trades and related engineering works.Today,
              ABLE Construction takes on the role of main contractor for small
              tomedium size projects and performs project management services
              tocoordinates specialist trades for industrial/commercial
              projects. We also providedesign inputs and engineering solutions
              as value-add services to our
              clients.Ourobjectiveistoprovideourclientswithan“Iamassured”experiencewhenweare
              chosen to execute their projects. Our emphasis on clear
              communication andfollow-through procedures ensures that client’s
              objectives are top priority in theplanning and execution of all
              our processes.
            </p>
          </div>
          <div className={styles.about_img_container}>
            <img src="/images/about.jpeg" alt="nimage" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
