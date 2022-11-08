import React from 'react'
import Layout from '../components/Layout'
import { useContext } from 'react';
import { Store } from '../context/Store';
import Link from 'next/link';

const Checkout = () => {
    const { state, dispatch } = useContext(Store);
    const {
      cart: { cartItems },
    } = state;
    const removeHandler = (food) => {
      dispatch({ type: "CART_REMOVE_ITEM", payload: food });
    };
  return (
    <Layout>
      <div>
        <div className=" sm:inline-block md:flex">
          <div className="md:w-2/3 ">
            <div class="">
              <div class="py-12">
                <div class="max-w-md  rounded-lg md:max-w-xl ">
                  <div class="md:flex ">
                    <div class="w-full p-4   py-5">
                      <span>Customer Information</span>
                      <div class=" pb-5 flex md:flex-col flex-col">
                        <label>First name</label>
                        <input
                          type="text"
                          name="mail"
                          placeholder="E-mail"
                          className="p-2 border rounded w-full md:w-auto"
                        />
                      </div>
                      <span>Delivery Address</span>
                      <div className="pb-5 flex md:flex-col flex-col">
                        <input
                          type="text"
                          placeholder="First name"
                          className="p-2 border rounded w-full md:w-auto"
                        />
                      </div>
                      <div className="pb-5 flex md:flex-col flex-col">
                        <label>Last name</label>
                        <input
                          type="text"
                          placeholder="Last name"
                          className="p-2 border rounded w-full md:w-auto"
                        />
                      </div>
                      <div className="flex md:flex-col flex-col">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Please enter your location"
                          className="p-2 border rounded w-full md:w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:flex md:justify-end ">
            <div class="flex   justify-center md:mx-5">
              <div class=" flex justify-center items-center ">
                <div class="  justify-center items-center flex max-w-full ">
                  <div class=" w-screen max-w-md ">
                    <div class="flex h-full flex-col  ">
                      <div class="flex-1  py-6 px-4 sm:px-6 ">
                        <div class="mt-8">
                          <div class="flow-root">
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
                                              <p className="ml-4">
                                                ${food.price}
                                              </p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">
                                              {food.vendor}
                                            </p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                              Qty 1
                                            </p>

                                            <div className="flex">
                                              <button
                                                onClick={() =>
                                                  removeItemHandler(food)
                                                }
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
                        </div>
                      </div>

                      <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div class="flex justify-between text-base font-medium text-gray-700">
                          <p>Subtotal</p>
                          <p>$22.00</p>
                        </div>
                        <div class="flex justify-between text-base font-medium text-gray-700">
                          <p>Delivery fee</p>
                          <p>$2.00</p>
                        </div>

                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <p>Total</p>
                          <p>$262.00</p>
                        </div>

                        <div class="mt-6">
                          <Link href="/Payment">
                            <div class="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700">
                            
                              Place order
                            </div>
                          </Link>
                        </div>
                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              class="p-1 font-medium text-red-600 hover:text-red-500"
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
      </div>
    </Layout>
  );
}

export default Checkout