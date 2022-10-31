import { FaRegMoon } from "react-icons/fa";
import Link from "next/link";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Store } from "../../context/Store";
import { useContext } from "react";

const Navbar = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <div className="flex shadow-lg fixed z-50 bg-white justify-between py-4 px-4 w-full ">
      <div>
        <img src="./logo.png" alt="" className="w-40 h-10" />
      </div>
      <div className="flex">
        <div className="bg-gray-200 m-1 px-2 rounded-md py-1 hover:bg-gray-300">
          <FaRegMoon className="text-gray-600" size={24} />
        </div>
        <div className="m-1 ">
            <AiOutlineShoppingCart size={29}/>
            {cart.cartItems.length > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </span>
            )}
        </div>
        <div className="hidden md:flex">
          <Link href="/LogIn">
            <button className="py-1 px-4 bg-red-500 text-white rounded-lg hover:text-blue hover:bg-red-600 m-1">
              Log out
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

