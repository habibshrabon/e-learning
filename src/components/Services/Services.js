const Services = (props) => {
  const { img, name, title } = props.courses;
  return (
    <div>
      <div className="col">
        <div className="card h-100 card-bg shadow">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt={name}
          />
          <div className="card-body">
            <h3 className="card-title text-center">{name}</h3>
            <p>{title}</p>
            <button className="btn-style btn px-3 ms-auto">View Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
