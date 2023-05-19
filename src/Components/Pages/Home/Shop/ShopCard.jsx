import React from "react";

const ShopCard = ({ toy }) => {
  console.log(toy);
  const { toyPhoto } = toy;
  return (
    <div className="bg-gray-400 antialiased text-gray-900">
      <img
        src={toyPhoto}
        className="w-full object-cover object-center rounded-lg shadow-md"
      />
      <div className="relative px-4 -mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default ShopCard;
