import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";

const ServicesData = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {coursesData.map((courses) => (
              <Services courses={courses} key={courses.id}></Services>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesData;
