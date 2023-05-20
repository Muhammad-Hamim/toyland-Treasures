import React, { useContext, useState } from "react";
import {
  MdInsertPhoto,
  MdOutlineMailOutline,
  MdAccountBox,
  MdShoppingCart,
  MdDescription,
} from "react-icons/md";
import { TbCategory2, TbStarFilled } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [toyName, setToyName] = useState("");
  const [toyPhoto, setToyPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const handleAdd = (event) => {
    event.preventDefault();
    const sellerName = user ? user.displayName : "Seller name not found";
    const sellerEmail = user ? user.email : "Email not found";
    const toys = {
      toyName,
      toyPhoto,
      sellerName,
      sellerEmail,
      category,
      price,
      availability,
      rating,
      description,
    };
    console.log(toys);
    fetch("https://toyland-treasures-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Added!",
            "You have been successfully added the toy.",
            "success"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
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
                Add a toy
              </h1>
              <p>Enter your information to add toy</p>
            </div>
            <form onSubmit={handleAdd}>
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
                        value={toyName}
                        onChange={(e) => {
                          setToyName(e.target.value);
                        }}
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
                        value={toyPhoto}
                        onChange={(e) => {
                          setToyPhoto(e.target.value);
                        }}
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
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
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
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
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
                        value={availability}
                        onChange={(e) => {
                          setAvailability(e.target.value);
                        }}
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
                        type="number"
                        value={rating}
                        onChange={(e) => {
                          setRating(e.target.value);
                        }}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="4.6"
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
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
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                    Add
                  </button>
                </div>
              </div>
              {/* submit button */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToy;
