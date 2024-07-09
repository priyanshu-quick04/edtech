import React from "react";
import BannerIdea from "../images/bannerIdea.png";

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
        <div class="marko-one-regular border-1 rounded-3 bg-white text-primary my-2 px-2 py-1 d-flex justify-content-end">
          Browse Courses
        </div>
      </div>
      <div className=" position-absolute start-50 top-75 translate-middle">
        <div>
          <img src={BannerIdea} alt="bannerImage" />
        </div>
      </div>
    </div>
  );
}
