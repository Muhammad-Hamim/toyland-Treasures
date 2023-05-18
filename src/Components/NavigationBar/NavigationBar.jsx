import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

const NavigationBar = () => {
  const NavItem = (
    <>
      <li>
        <NavLink className="text-gray-900" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray-900" to="/category">
          Category
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray-900" to="/collection">
          Collections
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray-900" to="/contact">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink className="text-gray-900" to="/login">
          Login
        </NavLink>
      </li>
    </>
  );
  const ProfileItem = (
    <>
      <li>
        <a className="text-gray-900">Profile</a>
      </li>
      <li>
        <a className="text-gray-900">Settings</a>
      </li>
      <li>
        <button className="text-gray-900">Logout</button>
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
          {/* Navlink */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {NavItem}
          </ul>
        </div>
        {/* Responsive navbar */}
        <div className="flex items-center px-5 space-x-5">
          {/* dropdown menu */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <button tabIndex={1} className="btn btn-primary btn-circle">
                  <HiBars3 className="text-2xl"></HiBars3>
                </button>
              </div>
            </label>
            <ul
              tabIndex={1}
              className="menu space-y-3 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
