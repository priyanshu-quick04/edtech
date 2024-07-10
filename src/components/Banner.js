import React from "react";
import BannerIdea from "../images/bannerIdea.png";
import { HashLink } from "react-router-hash-link";

export default function Banner() {
  return (
    <div className="bg-danger px-5 py-5 position-relative">
      <div className="d-flex flex-column align-items-center text-white pt-5">
        <div className="montserrat-heading2 w-50">
          <h1>Empower Your Future with Quality Education</h1>
        </div>
        <div className="marko-one-regular w-50 text-white-50">
          <h5>Start Your Journey Towards Excellence Today</h5>
        </div>
      </div>
      <HashLink to="#courses" className="nav-link active fw-bolder fs-6">
        <div class="marko-one-regular border-1 rounded-3 bg-white text-primary my-2 px-2 py-1 d-inline-block z-3 position-relative">
          Browse Courses
        </div>
      </HashLink>
      <div className=" position-absolute start-50 top-75 translate-middle z-0">
        <div>
          <img src={BannerIdea} alt="bannerImage" />
        </div>
      </div>
    </div>
  );
}
