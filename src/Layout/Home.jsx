import React from "react";
import Banner from "../Components/Pages/Home/Banner/Banner";
import Gallery from "../Components/Pages/Home/Gallery/Gallery";
import Shop from "../Components/Pages/Home/Shop/Shop";
import useTitle from "../hooks/useTitle.js";
import Testimonials from "../Components/Pages/Home/Testimonials/Testimonials";
import AddTestimonial from "../Components/Pages/Home/Testimonials/AddTestimonial";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Shop></Shop>
      <AddTestimonial ></AddTestimonial>
    </div>
  );
};

export default Home;
