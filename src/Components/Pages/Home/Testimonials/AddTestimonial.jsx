import React, { useContext, useEffect, useState } from "react";
import {
  MdInsertPhoto,
  MdOutlineMailOutline,
  MdAccountBox,
  MdShoppingCart,
  MdDescription,
} from "react-icons/md";
import "aos/dist/aos.css";
import { TbCategory2, TbStarFilled } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../../../hooks/useTitle";

const AddTestimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch("https://toyland-treasures-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialData(data);
      });
  }, [testimonialData]);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [position, setPosition] = useState("");
  const [quote, setQuote] = useState("");
  useTitle("Add testimonial");
  const handleAdd = (event) => {
    event.preventDefault();
    const testimonial = {
      id: testimonialData.length + 1,
      name,
      photoUrl,
      position,
      quote,
    };
    console.log(id);
    console.log(testimonial);
    fetch("https://toyland-treasures-server.vercel.app/testimonials", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testimonial),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Added!",
            "You have been successfully added testimonial.",
            "success"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="w-full max-w-screen  flex items-center justify-center px-5 py-10">
        <div
          className="text-gray-500  w-full overflow-hidden"
          style={{ maxWidth: 1000 }}>
          <div className="w-full px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900 capitalize">
                Add a testimonial
              </h1>
              <p>Enter your information to add testimonial</p>
            </div>
            <form onSubmit={handleAdd}>
              {/* toy name */}
              <div className="flex -mx-3" data-aos="fade-up-right">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Your name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      {/* <i className="mdi mdi-account-outline text-gray-400 text-lg" /> */}
                      <MdAccountBox className="text-gray-400 text-lg"></MdAccountBox>
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Robert Johnson"
                    />
                  </div>
                </div>
              </div>
              {/* toy name */}
              {/* toy photo */}
              <div className="flex -mx-3" data-aos="fade-up-left">
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
                      value={photoUrl}
                      onChange={(e) => {
                        setPhotoUrl(e.target.value);
                      }}
                      required
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="https://i.ibb.co/mDRj0YS/avater.jpg"
                    />
                  </div>
                </div>
              </div>
              {/* toy name and photo url */}
              <div className="flex -mx-3" data-aos="fade-up-right">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Position</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      {/* <i className="mdi mdi-account-outline text-gray-400 text-lg" /> */}
                      <TbCategory2 className="text-gray-400 text-lg"></TbCategory2>
                    </div>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => {
                        setPosition(e.target.value);
                      }}
                      required
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Child Psychologist"
                    />
                  </div>
                </div>
              </div>
              {/* category and price */}
              {/* toy details */}
              <div className="flex -mx-3" data-aos="fade-up-left">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Message
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      {/* <i className="mdi mdi-email-outline text-gray-400 text-lg" /> */}
                      <MdDescription className="text-gray-400 text-lg"></MdDescription>
                    </div>
                    <textarea
                      type="email"
                      required
                      value={quote}
                      onChange={(e) => {
                        setQuote(e.target.value);
                      }}
                      className="w-full resize-none h-24 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Write testimonial"></textarea>
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
    </div>
  );
};

export default AddTestimonial;
