import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./completion.css";

function Completion(props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const b64 = params.get("data");
    const payment_intent = params.get("payment_intent");
    console.log(payment_intent);
    const _data = atob(b64);
    const data = JSON.parse(_data);
    console.log(data);

    (async () => {
      const res = await axios.post("http://localhost:3001/bus/book", {
        ...data,
        paymentIntent: payment_intent,
      });
      console.log(res.data);
    })();
  }, []);
  return (
    <body>
      <p className="completion">Thank you! 🎉</p>
      <p className="booking">Seat Booking Successfully</p>
    </body>
  );
}

export default Completion;
