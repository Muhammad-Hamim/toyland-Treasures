import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  MdInsertPhoto,
  MdOutlineMailOutline,
  MdAccountBox,
  MdShoppingCart,
  MdDescription,
} from "react-icons/md";
import { TbCategory2, TbStarFilled } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
const UpdateToy = () => {
  const toy = useLoaderData();
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
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyPhoto = form.toyPhoto.value;
    const price = form.price.value;
    const category = form.category.value;
    const availability = form.availability.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const updateToyInfo = {
      toyName,
      toyPhoto,
      price,
      sellerEmail,
      sellerName,
      category,
      availability,
      rating,
      description
    }
    console.log(updateToyInfo);
  };
  return (
    <div>
      <>
        {/* component */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
          }}
        />
        <div className="w-full max-w-screen min-h-screen bg-[#eff3f8] flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: 1000 }}>
            <div className="w-full py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 capitalize">
                  Update your toy information
                </h1>
                <p>Enter your information to update toy</p>
              </div>
              <form onSubmit={handleUpdate}>
                <div className="grid md:grid-cols-2 md:gap-4 md:justify-between md:items-center">
                  {/* toy name */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Toy name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          {/* <i className="mdi mdi-account-outline text-gray-400 text-lg" /> */}
                          <MdAccountBox className="text-gray-400 text-lg"></MdAccountBox>
                        </div>
                        <input
                          type="text"
                          defaultValue={toyName}
                          name="toyName"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Iron man suit"
                        />
                      </div>
                    </div>
                  </div>
                  {/* toy name */}
                  {/* toy photo */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Photo url
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <MdInsertPhoto className="text-gray-400 text-lg"></MdInsertPhoto>
                        </div>
                        <input
                          type="text"
                          defaultValue={toyPhoto}
                          name="toyPhoto"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="https://i.ibb.co/mDRj0YS/avater.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  {/* toy photo */}
                </div>
                {/* toy name and photo url */}

                <div className="grid md:grid-cols-2 md:gap-4 md:justify-between md:items-center">
                  {/* category name */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Category
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          {/* <i className="mdi mdi-account-outline text-gray-400 text-lg" /> */}
                          <TbCategory2 className="text-gray-400 text-lg"></TbCategory2>
                        </div>
                        <input
                          type="text"
                          defaultValue={category}
                          name="category"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Iron man"
                        />
                      </div>
                    </div>
                  </div>
                  {/* category */}
                  {/* price */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Price
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <HiCurrencyDollar className="text-gray-400 text-lg"></HiCurrencyDollar>
                        </div>
                        <input
                          type="number"
                          defaultValue={price}
                          name="price"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="73"
                        />
                      </div>
                    </div>
                  </div>
                  {/* price */}
                </div>
                {/* category and price */}

                <div className="grid md:grid-cols-2 md:gap-4 md:justify-between md:items-center">
                  {/* availability */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xs font-semibold px-1">
                        Available
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          {/* <i className="mdi mdi-account-outline text-gray-400 text-lg" /> */}
                          <MdShoppingCart className="text-gray-400 text-lg"></MdShoppingCart>
                        </div>
                        <input
                          type="number"
                          defaultValue={availability}
                          name="availability"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="267"
                        />
                      </div>
                    </div>
                  </div>
                  {/* available */}
                  {/* rating */}
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="" className="text-xs font-semibold px-1">
                        Rating
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <TbStarFilled className="text-gray-400 text-lg"></TbStarFilled>
                        </div>
                        <input
                          type="text"
                          defaultValue={rating}
                          name="rating"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="4"
                        />
                      </div>
                    </div>
                  </div>
                  {/* rating */}
                </div>
                {/* availability and ratings */}
                {/* toy details */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Toy details
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        {/* <i className="mdi mdi-email-outline text-gray-400 text-lg" /> */}
                        <MdDescription className="text-gray-400 text-lg"></MdDescription>
                      </div>
                      <textarea
                        type="email"
                        defaultValue={description}
                        name="description"
                        className="w-full resize-none h-24 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Write toy details"></textarea>
                    </div>
                  </div>
                </div>
                {/* toy details */}
                {/* submit button */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block uppercase w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      update
                    </button>
                  </div>
                </div>
                {/* submit button */}
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default UpdateToy;
