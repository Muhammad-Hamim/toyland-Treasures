import React from "react";
import Banner from "../Components/Pages/Home/Banner/Banner";
import Gallery from "../Components/Pages/Home/Gallery/Gallery";
import Shop from "../Components/Pages/Home/Shop/Shop";
import Review from "../Components/Pages/Home/Review/Review";
import useTitle from "../hooks/useTitle.js";
const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Review></Review>
      <Shop></Shop>
    </div>
  );
};

export default Home;
