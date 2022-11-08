import Link from "next/link";
import { useContext } from "react";
import { Store } from "../context/Store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ModalCart = ({ open, onClose }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeHandler = (food) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: food });
  };
  if (!open) return null;
  return (
    <div className=" ">
      <div className="relative z-10   ">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="flex   inset-0 overflow-hidden  justify-center ">
          <div className=" flex justify-center items-center overflow-hidden  ">
            <div className="pointer-events-none fixed inset-y-0 justify-center items-center flex max-w-full ">
              <div className="pointer-events-auto w-screen max-w-md ">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl ">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 ">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          onClick={onClose}
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {cartItems.length === 0 ? (
                      <div>
                        Cart is empty.
                        <Link href="/customer">Make an order</Link>
                      </div>
                    ) : (
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((food) => (
                              <li className="flex py-6" key={food.id}>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={food.image}
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{food.name}</a>
                                      </h3>
                                      <p className="ml-4">${food.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {food.vendor}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>

                                    <div className="flex">
                                      <button
                                        onClick={() => removeItemHandler(food)}
                                        type="button"
                                        className="font-medium text-red-600 hover:text-red-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-700">
                      <p>Subtotal</p>
                      <p>$22.00</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-700">
                      <p>Delivery fee</p>
                      <p>$2.00</p>
                    </div>

                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>$262.00</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                      <button
                        onClick={() => router.push("/Checkout")}
                        className=" w-full rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
                      >
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                          type="button"
                          className="p-1 font-medium text-red-600 hover:text-red-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ModalCart), { ssr: false });
