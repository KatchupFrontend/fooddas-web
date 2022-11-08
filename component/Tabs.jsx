import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="flex m-10 justify-between">
        <div className="">
          <h2 className="text-2xl font-bold">Categories</h2>
        </div>
        <div className="">
          <input
            type="text"
            className="bg-gray-100 rounded-lg  p-2 focus:ring-2 focus:border-red-500 focus:ring-red-500 outline-none"
            placeholder="Search what you love"
          />
        </div>
      </div>
      <div className="mx-3">
        <button className="bg-red-100  px-5 py-2 m-2 rounded-xl ">All</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">
          Breakfast
        </button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Launch</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Dinner</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Sauce </button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Stew</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Soup</button>
        <button className="bg-red-100 px-5 py-2 m-2 rounded-xl">Pizza</button>
      </div>
    </div>
  );
};

export default Tabs;
