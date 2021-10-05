import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-color py-5">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-6">
            <h2 className="text-white">E-LEARNING</h2>
            <p className="text-justify my-3 text-white font-size">
              E-learning is a structured course or learning experience delivered
              electronically; it can also include performance support content.
            </p>
            <button className="btn-style btn px-3 ms-auto">
              About Courses
            </button>
          </div>
          <div className="col-md-6 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
