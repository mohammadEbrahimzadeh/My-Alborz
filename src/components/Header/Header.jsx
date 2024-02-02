import React from "react";

const Header = () => {
  return (
    <div className="Header  pe-4 position-relative  text-danger  col-12  ">
      <div className="brightness"></div>
      <div className=" contentHeader col-12">
        <h2 className="text-white text-center ps-4 titleHeader ">
          البرز من ، شهر من و شما
        </h2>
        <p className=" text-white descriotionHeader  text-center pt-4 pt-sm-4 ps-4 ">
          نرم افزاری برای کل شهر
        </p>
        <div className="pt-3 pt-sm-4 d-flex  justify-content-center ps-4  align-items-center ">
          <button className="btn-success bg-success   p-2 rounded fs-6 btnDownload rounded-3 ">
            <a href="http://www.google.com">دانلود برنامه</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
