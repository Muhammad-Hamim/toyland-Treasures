import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import { Dna, ThreeCircles } from "react-loader-spinner";
import AllToyData from "./AllToyData";
import Swal from "sweetalert2";

const AllToys = () => {
  useTitle("All toys");
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toyland-treasures-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://toyland-treasures-server.vercel.app/toys/${id}`,
            {
              method: "DELETE",
            }
          );
          const data = await response.json();
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            const remainingToys = toys.filter((toy) => toy._id !== id);
            setToys(remainingToys);
          }
        } catch (error) {
          console.error(error);
          Swal.fire(
            "Error!",
            "An error occurred while deleting the toy.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="w-full max-w-screen min-h-screen bg-[#eff3f8] flex items-start justify-center px-5 py-5">
      {!user ? (
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
                return (
                  <AllToyData
                    key={toyData._id}
                    handleDelete={handleDelete}
                    toyData={toyData}></AllToyData>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-gray-900 text-center font-black text-7xl">Data not found. Please log out first to see all toy!</h2>
      )}
    </div>
  );
};

export default AllToys;
