import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopCard = ({ toy }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
    });
  }, []);

  const { toyPhoto, toyName, price, rating } = toy;
  return (
    <div
      className="w-full bg-white border border-gray-200 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom">
      <img className="rounded-t-lg" src={toyPhoto} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {toyName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
