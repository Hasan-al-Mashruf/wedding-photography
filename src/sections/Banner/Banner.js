import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Banner = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className="flex justify-center items-center">
                    <img src="https://i.ibb.co/ysKjW0P/pexels-jonathan-borba-3397026.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">Slide 2</SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;