import React from 'react'
import Layout from '../component/Layout'
import { useContext } from 'react';
import { Store } from '../context/Store';
import { useState } from 'react';


import Link from 'next/link';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { doc , arrayUnion, collection, updateDoc} from 'firebase/firestore';
import dynamic from 'next/dynamic';


const Checkout = () => {
  const {user} = UserAuth();
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
    const { state, dispatch } = useContext(Store);
  


      const {
      cart: { cartItems },
    } = state;
    const removeHandler = (food) => {
      dispatch({ type: "CART_REMOVE_ITEM", payload: food });
    };
  
   

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex justify-start flex-col items-start space-y-2"> 
            </div>

            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
               
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                  <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                        Customer’s Cart
                      </p>
                      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
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
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">
                          Summary
                        </h3>
                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                          <div className="flex justify-between  w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Subtotal
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              $56.00
                            </p>
                          </div>

                          <div className="flex justify-between items-center w-full">
                            <p className="text-base leading-4 text-gray-800">
                              Delivery fee
                            </p>
                            <p className="text-base leading-4 text-gray-600">
                              $8.00
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                          <p className="text-base font-semibold leading-4 text-gray-800">
                            Total
                          </p>
                          <p className="text-base font-semibold leading-4 text-gray-600">
                            $36.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5"
                onSubmit={checkoutHandler}
              >
                <h1 className="font-bold text-center text-2xl">
                  Customer Details
                </h1>
                <div className="mt-8">
                  <input
                    className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="tel"
                      placeholder="Enter your phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  className="mt-8 border border-transparent hover:border-gray-300 bg-red-500 hover:bg-red-700 text-white hover:text-white flex justify-center items-center py-4 rounded w-full"
                  type="submit"
                  onClick={""}
                >
                  <div>
                    <p className="text-base leading-4">Place Order</p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );


}


export default dynamic(() => Promise.resolve(Checkout), { ssr: false });