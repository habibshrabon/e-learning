import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

const ServicesData = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center text-style pt-4">All Courses</h1>
      <hr />
      <div className="pb-5">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {coursesData.map((courses) => (
              <Services courses={courses} key={courses.id}></Services>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesData;
