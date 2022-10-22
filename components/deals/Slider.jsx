import React, { useState } from 'react'


const featuredProducts = [
    "./party04.jpg",
    "./grid-image.jpg",
    "./party01.jpg"
];


const Slider = () => {
  

       




  return (
    <div className="">
      <div className="w-full select-none">
        <div className="h-[500px] mx-5">
          <img
            src={featuredProducts[current]}
            alt=""
            className="h-full md:bg-center  w-full bg-cover bg-center"
          /> 
        </div>
      </div>
    </div>
  );
}

export default Slider