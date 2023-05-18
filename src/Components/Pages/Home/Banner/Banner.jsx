import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../../assets/banner/1.jpg";
import banner2 from "../../../../assets/banner/2.jpg";
import banner3 from "../../../../assets/banner/3.jpg";
import banner4 from "../../../../assets/banner/4.jpg";
import banner5 from "../../../../assets/banner/5.jpg";
import banner6 from "../../../../assets/banner/6.jpg";
import banner7 from "../../../../assets/banner/7.jpg";
import banner8 from "../../../../assets/banner/8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <section>
      <div className="bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            Discover Endless Possibilities in our Toy Wonderland
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Welcome to Toy Treasures, the ultimate destination for toy
            enthusiasts and collectors. Step into a world where imagination
            knows no limits and playtime is infused with magic.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mb-12 md:h-[70vh] -mt-20 rounded-lg shadow-lg lg:-mt-40 bg-gray-500">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner6}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner7}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full bg-cover bg-center"
              src={banner8}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
