import React from 'react'
import Layout from '../component/Layout'

const Confirm = () => {
  return (
    <div>
      <Layout>
       

        <div class="pointer-events-auto w-screen py-5  flex justify-center ">
          <div class="flex h-full flex-col  bg-white border-2">
            <h1 className='text-center font-bold text-xl p-2'>Order Summary </h1>
            <div class="  py-6 px-4 sm:px-6">
              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="../images//MTN.jpeg"
                          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <p >MTN MoMo</p>
                            </h3>
                          </div>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-red-600 hover:text-red-500"
                            >
                              Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class=" border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Delivery fee</p>
                <p>$262.00</p>
              </div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>$262.00</p>
              </div>

              <form>
                <div className="flex flex-col">
                  <label className="m-2">Enter your MoMo number</label>
                  <input
                    type="text"
                    className="p-2 border-2 rounded-lg mb-3"
                    placeholder="PLease enter MoMo number "
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 w-full"
                  >
                    Pay
                  </button>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Confirm