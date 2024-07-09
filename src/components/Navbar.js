import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-danger py-3 text-white">
      <div className="d-flex my-custom-margin justify-content-between align-items-center">
        <div className="d-flex">
          <Link className="nav-link active fw-bolder fs-6" to="/">
            <div className="mx-2 montserrat-heading">Home</div>
          </Link>
          <Link className="nav-link active fw-bolder fs-6">
            <div className="mx-2 montserrat-heading">MyCart</div>
          </Link>
        </div>
        <h1 className="my-0 comfortaa-heading">STUDYNEST</h1>
        <div className="d-flex">
          <Link className="nav-link active fw-bolder fs-6" to="/login">
            <div className="mx-2 montserrat-heading">Login</div>
          </Link>
          <Link className="nav-link active fw-bolder fs-6" to="/signup">
            <div className="mx-2 montserrat-heading">SignUp</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
