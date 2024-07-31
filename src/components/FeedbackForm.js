import React from "react";

export default function FeedbackForm() {
  return (
    <div>
      <div>
        <form>
          <div className="form-group">
            <div>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Course"
              />
            </div>
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Write Your Review"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
