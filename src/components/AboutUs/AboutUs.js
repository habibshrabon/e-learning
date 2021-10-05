import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import image from "../../images/books.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="container">
        <h2 className="text-center py-5">
          <span className="text-style">About</span> Us
        </h2>
        <div className="row align-items-center py-5">
          <div className="col-md-6 pe-5">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
          <div className="col-md-6"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
