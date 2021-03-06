import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="content-height">
        <section className="py-5 d-flex justify-content-center">
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
      </div>
    </div>
  );
};

export default Contact;
