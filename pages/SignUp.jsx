import Link from "next/link";
import { useState } from "react";
import Layout from "../component/Layout";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { db } from "../firebase";
import {arrayUnion, doc, setDoc} from "firebase/firestore";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signup } = UserAuth();



  const router = useRouter();
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try{
      await signup(email, password)
  
      alert("Account created successfully")
          router.push("/");
    }
    catch(error){
    
    }
  }

  //Route to home page

  
  return (
    
      <div className="h-full bg-gradient-to-tl from-red-400 to-black w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p className="text-2xl font-extrabold leading-6 text-gray-800">
              Create an account
            </p>
            <p className="text-md mt-4 font-medium leading-none text-gray-500">
              Already have account?
              <span
                tabIndex={0}
                role="link"
                aria-label="login"
                className="text-md font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                <Link href={"/Login"}> Login here</Link>
              </span>
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Email
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
              <div className="mt-6  w-full">
                <lable className="text-md font-medium leading-none text-gray-800">
                  Password
                </lable>
                <div className="relative flex items-center justify-center">
                  <input
                    aria-label="enter Password"
                    role="input"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  role="button" type="submit"
                  aria-label="create my account"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-md font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-4 w-full"
                >
                  Create my account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default SignUp;
