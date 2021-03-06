import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <>
      <HeroSection />
      <div style={{ maxWidth: "800px" }} className="mx-auto text-center p-5">
        <h1 className="text-center text-danger">
          Your Goals, Your Time, Your Budget
        </h1>
        <p className="text-center">
          Education is in our DNA. Our 100 percent online master’s in education
          programs are uniquely designed to be affordable, flexible and relevant
          to your career right now. Wherever you want to go next, ACE is here to
          get you there.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="row row-cols-1 m-0 row-cols-md-3 g-4 pb-5">
            {services.map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
