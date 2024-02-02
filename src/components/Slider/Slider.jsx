import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Slider.css";
const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="Slider p-3  pb-0 ">
      <h3 className="col-12 text-center pb-3 pt-2  ">پیشنمایش</h3>
      <div className="d-flex  justify-content-center  align-items-center h-100 ">
        <div className=" col-12   ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 1,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/images/appscreen/1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/appscreen/2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/appscreen/3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/appscreen/4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/appscreen/5.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
