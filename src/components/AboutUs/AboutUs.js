import React from "react";
import image from "../../images/img.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section className="container content-height">
        <h2 className="text-center py-5">About Us</h2>
        <div className="row align-items-center pb-5">
          <div className="col-md-6 p-5 padding">
            <h2 className="text-style">Why Choose Us</h2>
            <hr />
            <p>
              A E-Learning education prepares students for life, helping them
              develop an informed curiosity and a lasting passion for learning.
            </p>
            <h3>Best Education System</h3>
            <p>Advance Education Management</p>
            <h3>Learning Management</h3>
            <p>LMS Integration</p>
            <h3>Online Certification</h3>
            <p>Performance Based Certificate</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
