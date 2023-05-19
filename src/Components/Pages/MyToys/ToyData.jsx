import React from 'react';

const ToyData = ({ toyData }) => {
  console.log(toyData)
  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td className="px-6 py-4" scope="row"></td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4">Silver</td>
      <td className="px-6 py-4">Laptop</td>
      <td className="px-6 py-4">$2999</td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default ToyData;