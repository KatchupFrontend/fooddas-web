import Link from "next/link";

const SignUp = () => {
 
    

  return (
    <div className="">
      <div className="bg-white  shadow-xl py-2 px-4 fixed w-full">
        <img src="./logo.png" alt="" className="w-40 h-10 p-1" />
      </div>
      <div className="h-full  w-full py-[80px] px-4 back">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-[50px]">
            <p
              tabindex="0"
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Create an account
            </p>
            <p
              tabindex="0"
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Already have account?
              <Link href="/LogIn">
                <span className="text-red-500 hover:text-red-600 hover:cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
            

           
            <form onSubmit={handleSignUp}>
              <div>
                <label
                  id="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email
                </label>
                <input
                  aria-labelledby="email"
                  type="email"
                  className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  onChange={(e) => setdata({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mt-6  w-full">
                <label
                  for="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    id="pass"
                    type="password"
                    className="bg-gray-200 border rounded  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    onChange={(e) =>
                      setdata({ ...data, password: e.target.value })
                    }
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                      alt="viewport"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
