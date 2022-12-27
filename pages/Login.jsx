
import React from 'react'

const Login = () => {
  return(
  <div>
     j j, fv
     </div>
  )
}

export default Login






// const LogIn = () => {
//   return (
 // import { useForm } from "react-hook-form";
//       <div className="h-full  w-full py-[80px] px-4 back">
//         <div className="flex flex-col items-center justify-center">
//           <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-[50px]">
//             <p
//               tabindex="0"
//               className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
//             >
//               Login to your account
//             </p>
//             <p
//               tabindex="0"
//               className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
//             >
//               Dont have account?
//               <Link href="/SignUp">
//                 <span className="text-red-500 hover:text-red-600 hover:cursor-pointer">
//                   Sign up here
//                 </span>
//               </Link>
//             </p>
//             <button
//               aria-label="Continue with google"
//               role="button"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex hover:bg-gray-100 items-center w-full mt-10"
//             >
//               <img
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
//                 alt="google"
//               />
//               <p className="text-base font-medium ml-4 text-gray-700">
//                 Continue with Google
//               </p>
//             </button>

//             <div className="w-full flex items-center justify-between py-5">
//               <hr className="w-full bg-gray-400" />
//               <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
//                 OR
//               </p>
//               <hr className="w-full bg-gray-400  " />
//             </div>

//             <form onSubmit="">
//               <div className="mt-10 pt-5">
//                 <label htmlFor="email" className="">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
//                   placeholder="Email"
//                   {...register("email", {
//                     required: "Please enter email",
//                     pattern: {
//                       value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
//                       message: "Please enter valid email",
//                     },
//                   })}
//                   autoFocus
//                 />
//                 {errors.email && (
//                   <p className="text-red-500">{errors.email.message}</p>
//                 )}
//               </div>
//               <div className="relative flex  flex-col mt-5">
//                 <label htmlFor="password" className="">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   {...register("password", {
//                               required: "Please enter password",
//                             minLength: { value: 6, message: "password is more than 5 chars" },
//                   })}
//                   className="bg-gray-200 border rounded  text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
//                   id="password"
//                   autoFocus
//                 ></input>
//                 {errors.password && (
//                   <div className="text-red-500 ">{errors.password.message}</div>
//                 )}
//               </div>

//               <div className="mt-8">
//                 <button
//                   type="submit"
//                   className="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
//                   href="/customer"
//                 >
//                   Log In
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//   );

// }






