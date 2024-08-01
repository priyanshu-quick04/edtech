import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const userResponse = await fetch("https://edbackend.onrender.com/api/loginuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await userResponse.json();
    if (userResponse.status === 200) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", data.authToken);
      console.log(localStorage.getItem("userEmail"));
      navigate("/");
      console.log(data.message);
    } else {
      console.log("Error while logging in");
    }
  };
  return (
    <>
      <div className="container vh-100 vw-100 d-flex justify-content-center align-items-center ">
        <form
          onSubmit={handleSubmit}
          className="border border-2 rounded-2 border-black py-4 px-5"
        >
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

          <button type="submit" className="m-2 btn btn-danger">
            Submit
          </button>
          <Link to="/signup">
            <button className="m-2 btn btn-primary">New User</button>
          </Link>
        </form>
      </div>
    </>
  );
}
