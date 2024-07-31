import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./ContextReducer";
import { CoursePresent } from "../App";

export default function CourseCard({ id, title, description, image }) {
  const navigate = useNavigate();
  const [activeCardId, setActiveCardId] = useState(null);
  const { activeCourse, setActiveCourse } = useContext(CoursePresent);
  const { cartState, cartDispatch } = useContext(CartContext);
  const handleClick = () => {
    setActiveCardId(id);
    if (cartState.length > 0) {
      setActiveCourse(true);
    } else {
      cartDispatch({
        type: "add",
        id: id,
        title: title,
        image: image,
      });
      navigate("/mycart");
    }
  };
  return (
    <div key={id} className="py-2 position-relative">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="btn btn-primary" onClick={handleClick}>
            Buy Course
          </div>
        </div>
      </div>
      {activeCourse && activeCardId === id ? (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "30px",
            background: "white",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <h2 className="raleway-regular" style={{ fontSize: "1rem" }}>
            You Already have Some Course in yor Cart
          </h2>
          <h3 className="comfortaa-regular" style={{ fontSize: "1rem" }}>
            Either Buy that or first remove it from Cart
          </h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
