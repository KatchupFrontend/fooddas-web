import { FaRegMoon } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Store } from "../../context/Store";
import { useContext, useState } from "react";
import ModalCart from "./ModalCart";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <div>
      <ModalCart open={openModal} onClose={() => setOpenModal(false)}  />

      <div className="flex shadow-lg sticky z-50 bg-white justify-between py-4 px-4 w-full ">
        <div>
          <img src="./logo.png" alt="" className="w-40 h-10" />
        </div>
        <div className="flex">
          <div className="bg-gray-200 m-1 px-2 rounded-lg py-1 hover:bg-gray-300">
            <FaRegMoon className="text-gray-600" size={24} />
          </div>
          <div className="m-1 ">
            <AiOutlineShoppingCart
              size={29}
              className="relative cursor-pointer"
              onClick={() => setOpenModal(true)}
            />
            {cart.cartItems.length > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white absolute top-0 pt-2">
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
    </div>
  );
};

export default Navbar;
