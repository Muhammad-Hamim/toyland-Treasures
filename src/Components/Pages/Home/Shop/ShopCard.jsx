import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";

const ShopCard = ({ toy }) => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration (in milliseconds)
    });
  }, []);
  const { _id, toyPhoto, toyName, price, rating } = toy;
  return (
    <div
      className="w-full relative bg-white border border-gray-200 rounded-lg shadow"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center">
      <img
        className="rounded-t-lg w-full h-[250px] md:h-[374px] bg-cover bg-center"
        src={toyPhoto}
        alt=""
      />
      <div className="p-5 absolute left-1/2 rounded-lg -translate-x-1/2 -bottom-28 shadow-2xl w-10/12 bg-white">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {toyName}
        </h5>
        <p className="mb-3 text-2xl font-normal text-gray-700 flex space-x-2 items-center">
          <span>{rating}</span><Rating value={rating} readOnly cancel={false} />
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <Link to={`viewtoy/${_id}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800  focus:outline-none">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
