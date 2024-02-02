import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutApp from "./components/AboutApp/AboutApp";
import MembersTeam from "./components/MembersTeam/MembersTeam";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="col-12">
      <Navbar></Navbar>
      <Header></Header>
      <AboutApp></AboutApp>
      <Slider></Slider>
      <MembersTeam></MembersTeam>
      <Footer></Footer>
    </div>
  );
};

export default App;
