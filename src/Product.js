import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';

  const Product = ({ id, title, price, rating, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to basket...
        dispatch({
            type: 'add to basket',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
  return (
    <div className="products">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <div className='product_details'>
            <img className='product_img' src={image} alt="" />
            <button onClick={addToBasket} className='button'>Add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
