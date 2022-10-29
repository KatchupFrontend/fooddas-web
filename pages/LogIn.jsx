
import Link from 'next/link'
import { UserAuth } from  './context/AuthContext';
import { useState } from 'react';



const Login = ()=>{
   const [data, setdata] = useState({
    email: "",
    password: "",
   })
   
   const handleLogin = (e) => {
    e.preventDefault();
    
  };

  

  return (
    <div className="">
      <div className="bg-white  shadow-xl py-2 px-4 fixed w-full">
        <img src="./logo.png" alt="" className="w-40 h-10 p-1" />
      </div>
      <div class="h-full  w-full py-[80px] px-4 back">
        <div class="flex flex-col items-center justify-center">
          <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-[50px]">
            <p
              tabindex="0"
              class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <p
              tabindex="0"
              class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Dont have account?
              <Link href="/SignUp">
                <span className="text-red-500 hover:text-red-600 hover:cursor-pointer">
                  Sign up here
                </span>
              </Link>
            </p>
            <button
              aria-label="Continue with google"
              role="button"
              class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex hover:bg-gray-100 items-center w-full mt-10"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p class="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>

            <div class="w-full flex items-center justify-between py-5">
              <hr class="w-full bg-gray-400" />
              <p class="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr class="w-full bg-gray-400  " />
            </div>
            <Form onSubmit={handleLogin}>
              <div>
                <label
                  id="email"
                  class="text-sm font-medium leading-none text-gray-800"
                >
                  Email
                </label>
                <input
                  aria-labelledby="email"
                  type="email"
                  class="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
              <div class="mt-6  w-full">
                <label
                  for="pass"
                  class="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <div class="relative flex items-center justify-center">
                  <input
                    id="pass"
                    type="password"
                    class="bg-gray-200 border rounded  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                  <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                      alt="viewport"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <button
                  role="button"
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                >
                  {" "}
                  Log In
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn