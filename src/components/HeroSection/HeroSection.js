import React from "react";
import "./HeroSection.css";
import image from "../../images/books.png";

const HeroSection = () => {
  return (
    <div className="contact-bg py-3">
      <div className="container">
        <div className="row align-item-center pb-5">
          <div className="col-md-6 padding">
            <h2>E-LEARNING</h2>
            <p className="text-justify my-3 font-size">
              E-learning is a structured course or learning experience delivered
              electronically; it can also include performance support content.
            </p>
            <button className="btn-style btn px-3 ms-auto">Our Courses</button>
          </div>
          <div className="col-md-6 p-5">
            <img
              style={{ maxWidth: "350px", float: "right" }}
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
