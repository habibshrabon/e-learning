import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Contact = () => {
  return (
    <div className="container">
      <Header />
      <section className="py-5 d-flex justify-content-center contact-bg mt-5">
        <div className="container contact p-5">
          <h2 className="text-center pb-5">Contact Us</h2>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Your Mobile No."
            />
            <input
              className="form-control"
              type="text"
              placeholder="Your Email Address"
            />
            <textarea
              className="form-control mt-3"
              cols="0"
              rows="5"
              placeholder="Message"
            ></textarea>
            <input
              className="form-control my-3 btn-style"
              type="submit"
              value="submit"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
