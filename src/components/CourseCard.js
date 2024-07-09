import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ title, description }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="/mycart" className="btn btn-primary">
            Buy Course
          </Link>
        </div>
      </div>
    </div>
  );
}
