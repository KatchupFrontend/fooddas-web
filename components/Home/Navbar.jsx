import {FaRegMoon} from 'react-icons/fa'
import Link from 'next/link';
import {sighIn, signOut ,useSession} from 'next-auth/client'
const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-4 ">
      <div>
        <img src="./logo.png" alt="" className="w-40 h-10" />
      </div>
      <div className="flex">
        <div className="bg-gray-200 m-1 px-2 rounded-md py-1 hover:bg-gray-300">
          <FaRegMoon className="text-gray-600" size={24} />
        </div>
        <div className="hidden md:flex">
          <Link href="/LogIn">
            <button className="py-1 px-4 bg-red-500 text-white rounded-lg hover:text-blue hover:bg-red-600 m-1">
              Log in
            </button>
          </Link>
          <button className="py-1 px-4 bg-gray-200  rounded-lg hover:text-blue hover:bg-gray-300 m-1">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;``