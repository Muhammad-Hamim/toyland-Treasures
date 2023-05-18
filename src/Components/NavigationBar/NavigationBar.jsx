import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

const NavigationBar = () => {
  const [smallDevice, setSmallDevice] = useState(false);
  const NavItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
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
      <li>
        <a>Profile</a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
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
          {/* Header Icons */}
          
        </div>
        {/* Responsive navbar */}
        <div className="flex items-center px-5 space-x-5">
          {/* dropdown menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <button tabIndex={1} className="btn btn-primary btn-circle">
                  <HiBars3 className="text-2xl"></HiBars3>
                </button>
              </div>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {NavItem}
            </ul>
          </div>
          {/* profile info */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <button
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar">
                  <MdOutlineAccountCircle className="text-2xl"></MdOutlineAccountCircle>
                </button>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {ProfileItem}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
