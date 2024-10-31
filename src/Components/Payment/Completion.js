import axios from "axios";
import { useEffect } from "react";

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
  return <h1>Thank you! 🎉</h1>;
}

export default Completion;
