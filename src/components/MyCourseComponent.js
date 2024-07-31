import React from 'react'

export default function MyCourseComponent({title,image}) {
  return (
    <div className="container text-center">
      <div className="row d-flex border border-2 border-primary">
        <img
          src={image}
          alt="course-sample-image"
          className=" col-md-6 h-50 w-50"
        />
        <div className="montserrat-heading3 col-md-3 d-flex justify-content-center align-items-center">
          <h3>{title}</h3>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center ">
          <button type="button" class="btn btn-primary">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  )
}
