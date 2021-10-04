import React from "react";
import "./Service.css";

const Service = (props) => {
  const { img, name, title } = props.service;
  console.log(props);
  return (
    <div>
      <div className="col">
        <div className="card h-100 card-bg">
          <img
            src={img}
            className="card-img-top cart-img mx-auto img-fluid"
            alt={name}
          />
          <div className="card-body">
            <h3 className="card-title text-center">{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
