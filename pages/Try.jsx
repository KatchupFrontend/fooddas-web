import React from "react";
import { useState } from "react";
import paystack from "paystack";



const Try = () => {
  const [email, setEmail] = useState("");
  const amount = 2000;
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const paystackClient = paystack(process.env.PAYSTACK_SECRET_KEY);

  async function handlePayment(event) {
  try{
    const response = await paystack.transaction.initialize(
        {
            email,
            amount,
            callback_url:'https://your-callback-url.com/paystack/callback'
        },

    )
    const authorizationUrl = response.data.authorization_url;

  }
  catch(error){
    console.log(error)
  }

  async function handlePaystackCallback(refernce);
    try{
    const response = await paystack.transaction.verify(refernce);
    console.log(response)

  }
  catch(error){
    console.log(error)
    }
    }




  return (
    <div>
      <form onSubmit={handlePayment}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Try;
