import React from "react";
import CourseCard from "./CourseCard";

export default function Section({ heading, courses }) {
  return (
    <div key={heading} className="section-margin">
      <div className="montserrat-heading2 px-2 py-2 mb-3">
        <h1 className="d-inline border border-3 rounded-5 px-5 py-2 border-danger">
          {heading}
        </h1>
      </div>
      <div class="container text-center">
        <div class="row">
          {courses.map((course, key) => (
            <div class="col col-md-4 d-flex justify-content-center ">
              <CourseCard
                key={key}
                id={key}
                title={course.name}
                description={course.details}
                image={course.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
