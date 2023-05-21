import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyData from "./ToyData";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle.js";
import axios from "axios";
import { SelectButton } from "primereact/selectbutton";
import { Dna } from "react-loader-spinner";

const MyToys = () => {
  useTitle("My toys");
  const { user } = useContext(AuthContext);
  const url = `https://toyland-treasures-server.vercel.app/toys?email=${user?.email}`;
  const [loading, setLoading] = useState(false);
  const [toys, setToys] = useState([]);
  const [options, setOptions] = useState(["Ascending", "Descending"]);
  const [value, setValue] = useState(options[0]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: {
          sortField: "price",
          sortOrder:
            value.toLowerCase() === "descending" ? "descending" : "ascending",
          toyName: searchQuery,
        },
      });
      setToys(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

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
      setLoading(true);
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
            setLoading(false);
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

  const handleSort = () => {
    fetchData();
  };

  const handleSearch = () => {
    fetchData();
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] z-50">
        <Dna
          visible={true}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  return (
    <div className="w-full max-w-screen min-h-screen bg-[#eff3f8] px-5 py-5">
      {/* search and sort */}
      <div className="md:flex justify-between items-center space-y-5 md:space-y-0 w-full py-6">
        <div className="md:w-1/3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
              placeholder="Search Mockups, Logos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required=""
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="card flex justify-content-center">
          <SelectButton
            onClick={handleSort}
            value={value}
            onChange={(e) => setValue(e.value)}
            options={options}
          />
        </div>
      </div>
      {/* search and sort */}
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
                Seller name
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
                <ToyData
                  key={toyData._id}
                  handleDelete={handleDelete}
                  toyData={toyData}></ToyData>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
