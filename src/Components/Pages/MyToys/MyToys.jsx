import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyData from "./ToyData";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const url = `https://toyland-treasures-server.vercel.app/toys?email=${user?.email}`;
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);
  return (
    <div className="w-full max-w-screen min-h-screen bg-[#eff3f8] flex items-start justify-center px-5 py-5">
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="items-center">
            {toys.map((toyData) => {
              return <ToyData key={toyData._id} toyData={toyData}></ToyData>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
