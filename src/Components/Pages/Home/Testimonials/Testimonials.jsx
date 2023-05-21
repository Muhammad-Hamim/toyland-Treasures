import React, { useEffect, useState } from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch("https://toyland-treasures-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonialData(data);
      });
  }, [testimonialData]);
  return (
    <div className="mx-4 md:mx-40">
      <section className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full py-10">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-blue-500 ">Testimonials</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            What clients saying
          </h1>

          <div className="carousel w-full">
            {testimonialData.map((testimonial) => {
              return (
                <TestimonialCarousel
                  key={testimonial._id}
                  testimonialData={testimonialData}
                  testimonial={testimonial}></TestimonialCarousel>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
