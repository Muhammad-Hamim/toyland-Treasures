import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import useTitle from "../../../../hooks/useTitle";

const ToyDetails = () => {
  useTitle('Toy details')
  const toy = useLoaderData();
  console.log(toy);
  const {
    toyName,
    toyPhoto,
    price,
    sellerName,
    sellerEmail,
    category,
    availability,
    rating,
    description,
  } = toy;
  return (
    <div>
      <>
        {/* component */}
        <section className="text-gray-700 body-font overflow-hidden bg-[#eff3f8]">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={toyPhoto}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="uppercase text-sm title-font text-gray-500 tracking-widest">
                  toy name
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {toyName}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <FaFacebookF className="text-xl"></FaFacebookF>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <FaInstagram className="text-xl"></FaInstagram>
                    </a>
                    <a className="ml-2 text-gray-500">
                     <FaTwitter className="text-xl"></FaTwitter>
                    </a>
                  </span>
                </div>
                <div className="text-gray-900 text-lg font-medium">
                  <p>Seller Name: {sellerName}</p>
                  <p>Category: {category}</p>
                  <p>Quantity: {availability}</p>
                </div>
                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-5">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${price}.00
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">
                    Buy Now
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <AiFillHeart></AiFillHeart>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ToyDetails;
