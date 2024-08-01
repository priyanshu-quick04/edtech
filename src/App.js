import "./App.css";
import React from "react";
import { useState, createContext, useEffect} from "react";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import MyCourses from "./screens/MyCourses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartHandle from "./components/ContextReducer";

export const CoursePresent = React.createContext();

function App() {
  const [activeCourse, setActiveCourse] = useState(false);
  
  return (
    <CartHandle>
      <CoursePresent.Provider value={{ activeCourse, setActiveCourse }}>
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/mycart" element={<Cart />} />
              <Route exact path="/mycourse" element={<MyCourses />} />
            </Routes>
          </div>
        </Router>
      </CoursePresent.Provider>
    </CartHandle>
  );
}

export default App;
