import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import { AuthContext } from "../Providers/AuthProvider";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const NavigationBar = () => {
  const [visible, setVisible] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const NavItem = (
    <>
      <NavLink className={`text-indigo-500`} to="/">
        <li
          className={`${
            visible && "py-3 border-b-2 text-center font-bold border-indigo-300"
          }`}>
          Home
        </li>
      </NavLink>
      <NavLink className={`text-indigo-500`} to="/category">
        <li
          className={`${
            visible && "py-3 border-b-2 text-center font-bold border-indigo-300"
          }`}>
          All Toys
        </li>
      </NavLink>
      <NavLink className={`text-indigo-500`} to="/collection">
        <li
          className={`${
            visible && "py-3 border-b-2 text-center font-bold border-indigo-300"
          }`}>
          My Toys
        </li>
      </NavLink>
      <NavLink className={`text-indigo-500`} to="/addtoy">
        <li
          className={`${
            visible && "py-3 border-b-2 text-center font-bold border-indigo-300"
          }`}>
          Add A Toy
        </li>
      </NavLink>
      <NavLink className={`text-indigo-500`} to="/login">
        <li
          className={`${
            visible && "py-3 border-b-2 text-center font-bold border-indigo-300"
          }`}>
          Blogs
        </li>
      </NavLink>
    </>
  );
  const ProfileItem = (
    <>
      {user ? (
        <>
          <li>
            <a className="text-gray-900">{user?.displayName}</a>
          </li>
          <li>
            <a className="text-gray-900">{user.email}</a>
          </li>
          <li>
            <button onClick={handleLogOut} className="text-gray-900">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login" className="text-gray-900">
            Login
          </NavLink>
        </li>
      )}
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
          {/* Nav link */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {NavItem}
          </ul>
        </div>
        {/* Responsive navbar */}
        <div className="flex items-center px-5 space-x-5">
          {/* dropdown menu */}
          <div className="dropdown dropdown-end md:hidden">
            <label
              tabIndex={1}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setVisible(true)}>
              <div className="rounded-full">
                <button tabIndex={1} className="btn btn-ghost btn-circle">
                  <HiBars3 className="text-4xl"></HiBars3>
                </button>
              </div>
            </label>
            <Sidebar
              style={{ backgroundColor: "#111827" }}
              visible={visible}
              onHide={() => setVisible(false)}>
              <ul>{NavItem}</ul>
            </Sidebar>
            <ul
              tabIndex={1}
              className="menu space-y-3 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {NavItem}
            </ul>
          </div>
          {/* profile info */}
          <div
            className="dropdown dropdown-end tooltip tooltip-left"
            data-tip={user?.displayName}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="rounded-full tooltip">
                {user ? (
                  <img src={user?.photoURL} />
                ) : (
                  <MdOutlineAccountCircle className="text-4xl"></MdOutlineAccountCircle>
                )}
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
