import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy)
  const {
    toyName,
    toyPhoto,
    price,
    sellerName,
    sellerEmail,
    category,
    availability,
    rating,
    description,
  } = toy;
  return (
    <div>
      
    </div>
  );
};

export default ToyDetails;