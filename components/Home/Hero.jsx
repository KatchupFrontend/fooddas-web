import React from 'react'

const Hero = () => {
  return (
    <div>
      <div class="text-black body-font flex ">
        <div>
          <section class="text-gray-400  body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h1 class="text-black text-5xl title-bold font-bold mb-4">
                    The fastest delivery in <span className="text-red-500">your city</span>
                  </h1>

                  <p class="leading-relaxed mb-4 text-gray-700">
                    When you are too lazy to cook, we are just a click away!
                    Search for your favorite food or restaurant in your area
                  </p>

                  <div class="flex">
                    <input
                      type="text"
                      className="p-2 rounded-sm border-gray-400 border focus:outline-red-500"
                      placeholder="Enter delivery address"
                    />
                    <button class="flex  text-white bg-red-500 border-0 py-2 px-6  focus:outline-red-500 hover:bg-red-600 ">
                      Find Food
                    </button>
                  </div>
                </div>
                <div className='ml-10'>
                  <img
                    alt="ecommerce"
                    class=""
                    src="./hero.png"
                    className="pb-[35px] ml-6"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero