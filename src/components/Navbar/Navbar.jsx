import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar d-flex col-12 p-4 flex-row-reverse  bg-success  align-items-center  ">
      <div className="  d-flex  align-items-center  justify-content-center  containerImgLogo ">
        <img className="   imgLogo " src="/Untitled-1.png" alt="" />
      </div>
      <div className="col-11 titleNavbar d-flex  align-items-center justify-content-end   text-white text-end pe-3">
        سامانه البرز من
      </div>
    </div>
  );
};

export default Navbar;
