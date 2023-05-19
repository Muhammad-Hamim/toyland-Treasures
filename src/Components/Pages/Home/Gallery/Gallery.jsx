import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="py-20 px-4 md:px-40">
      <div className="text-center px-4 lg:w-3/5 mx-auto mb-16">
        <h2 className="text-6xl text-gray-900 font-black underline underline-offset-6 mb-5">
          Gallery
        </h2>
        <p>
          Step into Our{" "}
          <span className="text-primary font-bold text-lg">
            Toyland Treasures
          </span>
          . Immerse Yourself in a Colorful Array of Playful Delights. Indulge in
          a Visual Feast of Enchanting Toys and Unforgettable Characters. Let
          Your Imagination Soar as You Explore Our Captivating Gallery.
          Experience Pure Joy and Delight in Every Glance!
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {galleries.map((gallery) => {
          return <GalleryCard key={gallery.id} gallery={gallery}></GalleryCard>;
        })}
      </div>
    </div>
  );
};

export default Gallery;
