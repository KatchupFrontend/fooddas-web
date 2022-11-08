import React from 'react'
import HiCash from 'react-icons/hi'
import Layout from '../component/Layout'
import Link from 'next/link'

const Payment = () => {
  const  paymentMethods = [
      {
        id: 1,
        name: "MTN Mobile Money",
        Image: "../images/MTN.jpeg",
      },
      {
        id: 2,
        name: "AirtelTigo Money",
        Image: "../images/MTN.jpeg",
      },
      {
        id: 3,
        name: "Bank Transfer ",
        Image: '../images/MTN.jpeg'
      },
    ];
  return (
    <div>
      <div>
        <Layout>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Select A Payment Method
                </h1>
              </div>
              <Link href="/Confirm">
                <div class="flex flex-wrap -m-4 text-center">
                  {paymentMethods.map((paymentMethod) => (
                    <div class="p-4 md:w-1/3 sm:w-1/3 w-full ">
                      <div class="border-2 border-gray-200 px-4 py-6 rounded-lg  hover:border-red-600 ">
                        <div class=" w-20 h-12 mb-3 inline-block">
                          <img src={paymentMethod.Image} alt="" />
                        </div>

                        <p class="leading-relaxed">{paymentMethod.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </section>
        </Layout>
      </div>
    </div>
  );
}

export default Payment