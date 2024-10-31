import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [busData, setBusData] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3001/payment/config");
      const { publishableKey } = res.data;
      setStripePromise(loadStripe(publishableKey));
    })();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get("amount");
    const _data = atob(params.get("data"));
    const data = JSON.parse(_data);
    setBusData(data);
    (async () => {
      const res = await axios.post(
        "http://localhost:3001/payment/create-payment-intent",
        { amount }
      );
      var { clientSecret } = res.data;
      setClientSecret(clientSecret);
    })();
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm busData={busData} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
