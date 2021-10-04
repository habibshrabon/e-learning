import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const history = useHistory();
  const handleClick = () => {
    console.log("click");
    history.push("/about");
  };
  return (
    <div className="bg-color">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="text-white">Hello, I'm</p>
              <h1 className="text-white">Sakhawat Hossain</h1>

              <p className="text-justify my-3 text-white">
                A self-motivated and enthusiastic web developer with a deep
                interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational
                Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>
              <button
                onClick={handleClick}
                as={Link}
                to="/about"
                className="btn-style btn px-3 ms-auto"
              >
                About Me
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
