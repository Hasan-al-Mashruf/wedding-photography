
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="relative">
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
                    <SwiperSlide className="flex justify-center items-center image">
                        <img src="https://i.ibb.co/jZYbjxD/pexels-3715086.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center image">
                        <img src="https://i.ibb.co/ysKjW0P/pexels-jonathan-borba-3397026.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center image">
                        <img src="https://i.ibb.co/dLbjCnQ/pexels-fotosel-foto-raf-l-k-13682047.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white z-20 w-1/2 text-center">
                    <h2 className="text-5xl">Wedding <span className="text-secondary">Photography</span></h2>
                    <p className="pt-6 pb-3 text-gray-300">In publishing and graphic design, 'Wedding photography' is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 'Wedding photography' may be used as a placeholder before final copy is available.</p>
                    <Link to='/service'>
                        <button className="btn btn-secondary border-2">View all the services</button>
                    </Link>

                </div>
            </div>
        </div >
    );
};

export default Banner;