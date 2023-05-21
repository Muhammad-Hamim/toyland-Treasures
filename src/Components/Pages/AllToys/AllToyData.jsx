import React from "react";
import { Link } from "react-router-dom";

const AllToyData = ({ toyData }) => {
  const { _id, toyPhoto, toyName, price, category, rating, sellerName } =
    toyData;
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
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {sellerName}
      </th>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
      <td className="px-6 py-4">{rating}</td>

      <td className="px-6 py-4 space-x-3">
        <Link to={`/viewtoy/${_id}`}>
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View details
        </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyData;
