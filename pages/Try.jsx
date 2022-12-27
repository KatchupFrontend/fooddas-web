import React from 'react'
import { useState } from 'react';
import Paystack from 'paystack';


const Try = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');




const paywithPaystack = (e) => {
       e.preventDefault();

       const paystack = new PaystackPop();
       paystack.newTransaction({
         key: "pk_live_ceb5e28498396c908f35a84006294fb2c4360b36",
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
    <div>
        <form onSubmit={paywithPaystack}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="name" onChange={(e)=>setName(e.target.value)}  value={name} />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="submit">Pay</button>
        </form>

    </div>
  )
}

export default Try