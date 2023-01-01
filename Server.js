import paystack from "paystack";

const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);

// server side
app.post("/api/paystack/initialize", (req, res) => {
  paystack.transaction
    .initialize({
      email: req.body.email,
      amount: req.body.amount,
      callback_url: "https://your-callback-url.com/paystack/callback",
    })
    .then(function (body) {
      res.send({ authorization_url: body.data.authorization_url });
    });
});

app.get("/api/paystack/callback", (req, res) => {
  const reference = req.query.reference;
  paystack.transaction.verify(reference).then(function (body) {
    // Payment has been verified
  });
});
