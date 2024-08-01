import React, { useState, useEffect } from "react";
import MyCourseComponent from "../components/MyCourseComponent";
import Navbar from "../components/Navbar";

export default function MyCourses() {
  const [userCourse, setUserCourse] = useState([]);
  console.log(userCourse);
  const token = localStorage.getItem("authToken");
  const fetchUserDetails = async () => {
    try {
      const response = await fetch("https://edbackend.onrender.com/api/getdetails", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
        },
      });
      let recResponse = await response.json();
      if (response) {
        setUserCourse(recResponse.details);
      }
    } catch (error) {
      console.log(`Error received, ${error}`);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div>
      <div>
        <Navbar/>
        <h1 className="comfortaa-heading bg-danger text-white py-3">Courses Purchased</h1>
        <div className="raleway-regular d-flex justify-content-start px-5"><h5>Hey! {localStorage.getItem("userEmail")}, start learning</h5></div>
        {userCourse.map((eachCourse,key)=>(
          <div key={key} className="my-2">
            <MyCourseComponent title={eachCourse.title} image={eachCourse.image}/>
          </div>
        ))}
      </div>
    </div>
  );
}
