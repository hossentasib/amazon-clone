import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'remove basket',
            id : id,
        });
    }
  return (
    <div className="checkoutProduct">
      <img className='checkoutProductImage' src={image} alt="" />
      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
        {
            console.log(id, title, price, rating, image)
        }
      </div>
    </div>
  );
};

export default CheckoutProduct;
