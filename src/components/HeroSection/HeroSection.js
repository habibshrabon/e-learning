import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h1 className="text-white">E-LEARNING</h1>
              <p className="text-justify my-3 text-white">
                E-learning is a structured course or learning experience
                delivered electronically; it can also include performance
                support content.
              </p>
              <button className="btn-style btn px-3 ms-auto">
                About Courses
              </button>
            </div>
          </div>
          <div className="col-md-6 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
