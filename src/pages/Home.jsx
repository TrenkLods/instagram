import React from "react";
import DashboardImage from "../components/DashboardImage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="homeContainer">
      <div>
        <Navbar />
        <DashboardImage />
      </div>
    </div>
  );
};
export default Home;
