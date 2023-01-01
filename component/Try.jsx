import React, { useState } from "react";
import { useEffect } from "react";
import PaystackPop from "@paystack/inline-js";

const Try = () => {
  const amount = 100;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const paywithPaystack = (e) => {
     e.preventDefault();

     const paystack = new PaystackPop();
     paystack.newTransaction({
       key: "pk_test_73ebea9c708eaaf39f3a20ca12536f4727366a2a",
       email: email,
       amount: amount * 100,

       //Successful payment
       onSuccess(transaction) {
         let msg = `Transaction Successful ${transaction.reference}`;
         alert(msg);

         form.current.reset();
       },
       onCancel() {
         alert("Transaction Cancelled");
       },
     });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p>burger</p>
            <p></p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit" onClick={paywithPaystack}>
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Try;
