import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./ContextReducer";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartState } = useContext(CartContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <div className="bg-danger py-3 text-white">
      <div className="d-flex my-custom-margin justify-content-between align-items-center">
        <div className="d-flex">
          <Link className="nav-link active fw-bolder fs-6" to="/">
            <div className="mx-2 montserrat-heading">Home</div>
          </Link>
          {isAuthenticated?<Link to="/mycart" className="nav-link active fw-bolder fs-6">
            <div className="mx-2 montserrat-heading position-relative">
              <div>MyCart</div>
              {cartState.length > 0 ? (
                <div className="cart-indicator"></div>
              ) : (
                <></>
              )}
            </div>
          </Link>:<></>}
        </div>
        <h1 className="my-0 comfortaa-heading">STUDYNEST</h1>
        <div className="d-flex">
          {isAuthenticated ? (
            <div
              className="mx-2 montserrat-heading py-1 cursor_indicator"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <Link className="nav-link active fw-bolder fs-6" to="/login">
              <div className="mx-2 montserrat-heading">Login</div>
            </Link>
          )}
          {isAuthenticated ? (
            <div className="mx-2 montserrat-heading border border-1 px-2 py-1">
              <Link to="/mycourse"  style={{color:'white',textDecoration:'none'}}>My Account</Link>
            </div>
          ) : (
            <Link className="nav-link active fw-bolder fs-6" to="/signup">
              <div className="mx-2 montserrat-heading">SignUp</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
