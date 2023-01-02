import dynamic from "next/dynamic";
import Layout from "./Layout";


const Checkout = () => {
  return (
    <Layout>
      <div className="md:flex">
        <div className="md:w-2/3 ">
          <div class="">
            <div class="py-12">
              <div class="max-w-md  rounded-lg md:max-w-xl ">
                <div class="md:flex ">
                  <div class="w-full p-4   py-5">
                    <span>Customer Information</span>
                    <div class=" pb-5">
                      {" "}
                      <input
                        type="text"
                        name="mail"
                        placeholder="E-mail"
                      />{" "}
                    </div>
                    <span>Shipping Address</span>
                    <div>
                      <input
                        type="text"
                        placeholder="First name"
                        className="p-2 border rounded"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last name"
                        className="p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:flex md:justify-end">
          <div class="flex   justify-center md:mx-5">
            <div class=" flex justify-center items-center ">
              <div class="  justify-center items-center flex max-w-full ">
                <div class="pointer-events-auto w-screen max-w-md ">
                  <div class="flex h-full flex-col  bg-white  ">
                    <div class="flex-1  py-6 px-4 sm:px-6 ">
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul
                            role="list"
                            class="-my-6 divide-y divide-gray-200"
                          >
                            <li class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                    <p class="ml-4">$90.00</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    Salmon
                                  </p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty 1</p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-red-600 hover:text-red-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                                  alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Medium Stuff Satchel</a>
                                    </h3>
                                    <p class="ml-4">$32.00</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">Blue</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty 1</p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-red-600 hover:text-red-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
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
                        <a
                          href="#"
                          class="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
                        >
                          Place order
                        </a>
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
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });