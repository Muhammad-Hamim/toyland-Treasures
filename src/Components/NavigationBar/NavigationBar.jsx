import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

const NavigationBar = () => {
  const [smallDevice, setSmallDevice] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const NavItem = (
    <>
      <li
        className={`${
          smallDevice &&
          "py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200"
        }`}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className={`${
          smallDevice &&
          "py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200"
        }`}>
        <NavLink to="/">Catagory</NavLink>
      </li>
      <li
        className={`${
          smallDevice &&
          "py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200"
        }`}>
        <NavLink>Collections</NavLink>
      </li>
      <li
        className={`${
          smallDevice &&
          "py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200"
        }`}>
        <NavLink>Contact Us</NavLink>
      </li>
      <li
        className={`${
          smallDevice &&
          "py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200"
        }`}>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  const ProfileItem = (
    <>
      <li className="cursor-pointer font-bold py-2 hover:text-slate-100 hover:bg-violet-400 transition-all px-8 duration-200">
        Home
      </li>
    </>
  );
  return (
    <div className="relative mx-auto">
      {/* navbar */}
      <nav className="flex justify-between bg-gray-900 text-white w-full">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          {/* logo */}
          <Link to="/" className="text-3xl font-bold font-heading">
            <img className="w-24 h-fit" src={logo} alt="" />
          </Link>
          {/* Nav Links */}
          <ul
            className={`${
              showProfile
                ? "absolute top-full right-5 rounded-lg shadow-xl space-y-3 block bg-white text-gray-900"
                : "hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"
            }`}>
            {NavItem}
          </ul>
          {/* Profile Items */}
          <ul
            className={`${
              showProfile
                ? "absolute top-full right-5 rounded-lg shadow-xl space-y-3 block bg-white text-gray-900"
                : "hidden"
            }`}>
            {ProfileItem}
          </ul>
          {/* Header Icons */}
        </div>
        {/* Responsive navbar */}
        <div className="flex px-5 space-x-5">
          <button
            className="block md:hidden self-center"
            onBlur={() => {
              setSmallDevice(false);
            }}
            onClick={() => {
              setSmallDevice(!smallDevice);
            }}>
            <HiBars3 className="text-3xl text-gray-50"></HiBars3>
          </button>
          <button
            className="flex items-center hover:text-gray-200"
            onClick={() => {
              setShowProfile(!showProfile);
            }}>
            <MdOutlineAccountCircle className="text-2xl"></MdOutlineAccountCircle>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
