import React from 'react'


const featuredProducts = [
    "./food.jpg",
    "./grid-image.jpg",
    "./party01.jpg"
];
const Slider = () => {
    
  return (
    <div className='max-w-screen'>
      <div className="w-full select-none">
        <div className="aspect-w-16 aspect-h-9 ">
          <img src={featuredProducts[0]} alt="" className=" h-[650px] bg-center w-full bg-cover" />
        </div>

        <div className="absolute top-1/2  transform translate-y-1/2 py-2 bg-red-400 w-full flex justify-between text-white px-3 items-center">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Slider