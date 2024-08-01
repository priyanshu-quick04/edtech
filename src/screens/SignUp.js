import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    userLocation: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const userInResponse = await fetch("https://edbackend.onrender.com/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const user = await userInResponse.json();
    if (userInResponse.status === 200) {
      navigate("/login");
      console.log(user.message);
    } else {
      alert("Information Entered is not Accepted by the System.");
    }
  };
  return (
    <>
      <div className="container  vh-100 vw-100 d-flex justify-content-center align-items-center ">
        <form
          onSubmit={handleSubmit}
          className="border border-2 rounded-2 border-danger py-4 px-5"
        >
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="userLocation"
              value={credentials.userLocation}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-2 btn btn-danger">
            Submit
          </button>
          <Link to="/login">
            <button className="m-2 btn btn-primary">Already a User</button>
          </Link>
        </form>
      </div>
    </>
  );
}
