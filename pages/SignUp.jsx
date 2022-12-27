import Link from "next/link";
import Layout from "../component/Layout";

const SignUp = () => {
  return (
    <Layout>
      <div className="h-full bg-gradient-to-tl from-red-400 to-black w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p className="text-2xl font-extrabold leading-6 text-gray-800">
              Create an account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Already have account?
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                <Link href={"/"}> Sign up here</Link>
              </span>
            </p>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
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
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-md font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
