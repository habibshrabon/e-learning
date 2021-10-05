import React from "react";
import image from "../../images/img.png";

const AboutUs = () => {
  return (
    <div>
      <section className="container">
        <h2 className="text-center py-5">
          <span className="text-style">About</span> Us
        </h2>
        <div className="row align-items-center pb-5">
          <div className="col-md-6 p-5">
            <h3>Educational background questions.</h3>
            <p>
              One of the most common job interview topics is your educational
              background. You may wonder why hiring managers ask about something
              that is probably featured prominently on your resume.
            </p>
            <h3>Your educational background.</h3>
            <p>
              Your educational background is the set of all the formal and
              informal education that you have achieved, plus any new learning
              opportunities you are pursuing or plan to pursue soon.
            </p>
            <h3>Start with the required minimum.</h3>
            <p>
              For example, if the listing states that a bachelor’s degree is
              required, confirm that you have one and share your major.
            </p>
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
