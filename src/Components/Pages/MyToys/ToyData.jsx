import React from "react";
import { Link } from "react-router-dom";


const ToyData = ({ toyData }) => {
  const { _id,toyPhoto, toyName, price, category, rating } = toyData;
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td className="px-6 py-4" scope="row">
        <img className="w-20 h-20 rounded" src={toyPhoto} alt="" />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {toyName}
      </th>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{rating}</td>

      <td className="px-6 py-4 space-x-3">
        <Link to={`/updatetoy/${_id}`}>
          <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
          </button>
        </Link>
        <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ToyData;
