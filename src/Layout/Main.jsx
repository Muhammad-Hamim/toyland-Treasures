import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
