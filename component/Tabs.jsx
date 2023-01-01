import React from "react";
import { FaSearch } from "react-icons/fa";

const Tabs = () => {
  return (
    <div>
      <div className=" m-10  flex flex-wrap justify-between ">
        <div className="py-3">
          <h2 className="text-2xl font-bold pr-4">Categories</h2>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="bg-gray-100 rounded-lg px-6  p-2 focus:ring-none focus:border-none focus:ring-gray-300 outline-none relative"
            placeholder="Search what you love "
          />
          <FaSearch className="absolute mx-1" color="gray"/>
        </div>
      </div>
      <div className="mx-3">
        <button className="bg-red-100   px-5 py-2 m-2 rounded-2xl  hover:bg-red-600 hover:text-white">All</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600  hover:text-white">
          Breakfast
        </button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Launch</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Dinner</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Sauce </button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Stew</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Soup</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl hover:bg-red-600 hover:text-white">Pizza</button>
      </div>
    </div>
  );
};

export default Tabs;
