import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        thousandSeparator={true}
        decimalScale={2}
        displayType={"text"}
        value={getBasketTotal(basket)}
        prefix={"$"}
      />
      <button className="subtotal_button">Procced to Checkout</button>
    </div>
  );
};

export default Subtotal;
