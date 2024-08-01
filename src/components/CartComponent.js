import React, { useContext } from "react";
import { CartContext } from "./ContextReducer";
import { CoursePresent } from "../App";
import { useNavigate } from "react-router-dom";

export default function CartComponent({ title, image }) {
  const { setActiveCourse } = useContext(CoursePresent);
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useContext(CartContext);
  const handlePayment = async () => {
    const course_details = cartState;
    const email = localStorage.getItem("userEmail");
    console.log(course_details,email);
    let response = await fetch("https://edbackend.onrender.com/api/bookcourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_details, email }),
    });
    const response_data = await response.json();
    if (response_data.success) {
      setActiveCourse(false);
      cartDispatch({ type: "buy" });
      navigate("/");
    }
  };
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
          <button type="button" class="btn btn-primary" onClick={handlePayment}>
            Make Payment
          </button>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-end py-2 ">
        <button
          className="border border-2 border-danger bg-danger text-white px-3 rounded-3"
          onClick={() => {
            cartDispatch({ type: "delete" });
            setActiveCourse(false);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
