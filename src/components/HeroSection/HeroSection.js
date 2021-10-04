import React from "react";
import img from "../../images/top-pic.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="container bg-color">
      <div className="row align-items-center p-5">
        <div className="col-md-6 col-sm-6 text-white">
          <h1>Educational Website</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="col-md-6 img-size">
          <img className="img-fluid" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
