import {FaRegMoon} from 'react-icons/fa'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { BiCart, BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import {  useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ModalCart from './ModalCart';
import { Store } from '.././context/Store';


const Navbar = () => {
  
   const [nav, setNav] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const { status, data: session } = useSession();
   const { state } = useContext(Store);
   const {cart} = state;
   const [cartItemsCount, setCartItemsCount] = useState(0);

   
   useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <div>
      <ModalCart onClose={() => setOpenModal(false)} open={openModal} />

      <div className="flex justify-between py-4 px-4 ">
        <div>
          <Link href="/">
            <img src="./logo.png" alt="" className="w-40 h-10" />
          </Link>
        </div>
        <div className="flex">
          <div className="bg-gray-200 m-1 px-2 rounded-md py-1 hover:bg-gray-300">
            <FaRegMoon className="text-gray-600" size={24} />
          </div>
          <div className="hidden md:flex">
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              session.user.name
            ) : (
              <Link href="/LogIn">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg m-1">
                  Log In
                </button>
              </Link>
            )}
          </div>
          <div className="m-2">
            <BiCart size={30}  onClick={() =>setOpenModal(true)}/>
            {
              cartItemsCount > 0 && (
                <span className=" text-white px-1 rounded-full absolute top-0 mt-3 bg-red-500">
                  {cartItemsCount}
                </span>
              )

            }
          </div>
          <div
            className=" flex md:hidden m-2 cursor-pointer"
            onClick={() => setNav(true)}
          >
            <BiMenuAltRight size={30} />
          </div>

          <div
            className={
              nav
                ? "md:hidden fixed right-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur z-40"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "shadow-xl fixed right-0 top-0 w-3/5 bg-white z-40 text-red-500 h-full p-10 ease-in duration-300"
                  : "fixed top-0 right-[-100%] p-10 duration-300 ease-in h-full z-40 "
              }
            >
              <div className="flex items-center justify-between w-full text-red-500">
                <img src="./logo.png" height={100} width={100} alt="pic" />

                <div
                  onClick={() => setNav(false)}
                  className="cursor-pointer p-3"
                >
                  <FaTimes size={30} />
                </div>
              </div>
              <div className="pt-5">
                <Link href="/SignUp">
                  <h2 className="text-black text-lg cursor-pointer hover:text-red-500">
                    Create an account
                  </h2>
                </Link>
                <Link href="/LogIn">
                  <h2 className="text-black text-lg cursor-pointer hover:text-red-500">
                    Already have an account
                  </h2>
                </Link>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;``