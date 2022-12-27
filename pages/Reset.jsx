import Link from "next/link";
import { useState } from "react";
import Layout from "../component/Layout";
import { UserAuth } from "../context/AuthContext";

const Reset = () => {
  const [email, setEmail] = useState("");
  const { user, resetPassword } = UserAuth();
 

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset email sent");
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <Layout>
      <div className="h-full bg-gradient-to-tl from-red-400 to-black w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p className="text-2xl font-extrabold leading-6 text-gray-800">
              Reset password
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-red-500">
              A verification message will be sent to your email address
            </p>
            <form className="pt-4" onSubmit={handleReset}>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Email
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  role="button"
                  aria-label="create my account"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-md font-semibold leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-4 w-full"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reset;
