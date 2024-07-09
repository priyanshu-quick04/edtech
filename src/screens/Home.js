import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <hr className="marginHorizontal bg-black" />
      <Footer />
      <div></div>
    </div>
  );
}
