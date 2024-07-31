import React, { useContext } from "react";
import { CartContext } from "../components/ContextReducer";
import CartComponent from "../components/CartComponent";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cartState } = useContext(CartContext);
  const courseAdd = cartState;
  return (
    <div>
      <Navbar />
      <div className="montserrat-heading2 d-flex flex-column align-content-center my-5">
        <h1>Buy and Start Learning</h1>
      </div>
      <div>
        {courseAdd.map((course, key) => (
          <div key={key}>
            <CartComponent title={course.title} image={course.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
