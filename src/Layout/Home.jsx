import React from "react";
import Banner from "../Components/Pages/Home/Banner/Banner";
import Gallery from "../Components/Pages/Home/Gallery/Gallery";
import Shop from "../Components/Pages/Home/Shop/Shop";
import useTitle from "../hooks/useTitle.js";
import Testimonials from "../Components/Pages/Home/Testimonials/Testimonials";
import AddTestimonial from "../Components/Pages/Home/Testimonials/AddTestimonial";
import Contact from "../Components/Pages/Home/Contact/Contact";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <AddTestimonial></AddTestimonial>
      <Shop></Shop>
      <Contact></Contact>
    </div>
  );
};

export default Home;
