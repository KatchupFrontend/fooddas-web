
import Link from 'next/link'
import {useForm} from 'react-hook-form'


const LogIn = ()=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password}) => {

  }
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
              Login to your account
            </p>
            <p
              tabindex="0"
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
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
              className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex hover:bg-gray-100 items-center w-full mt-10"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p className="text-base font-medium ml-4 text-gray-700">
                Continue with Google
              </p>
            </button>

            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <form  onSubmit={handleSubmit(submitHandler)}>
              <div>
                <label
                  id="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email
                </label>
                <input 
                {...register('email', {required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
              
                }})}

                 autoFocus
                
                  type="email"
                  className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                 />
                  {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
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
                    {...register("password", {required: 'Please enter your password',
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters"
                    }})}
                    id="pass"
                    type="password"
                    className="bg-gray-200 border rounded  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                     ></input>
                     
                      {errors.password && (<p className="text-red-500 bg-red-500">{errors.password.message}</p>)}
                      
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
                  href="/customer"
                >
            
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn