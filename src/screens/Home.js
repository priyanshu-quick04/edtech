import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Section from "../components/Section";
import coursesData from "../data/courses.json";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <hr className="marginHorizontalTop bg-black" />
      <div id="courses">
        {Object.keys(coursesData.courses).map((category) => (
          <Section
            key={category}
            heading={category}
            courses={coursesData.courses[category]}
          />
        ))}
      </div>
      <hr className="marginHorizontalBottom bg-black" />
      <Footer />
      <div></div>
    </div>
  );
}
