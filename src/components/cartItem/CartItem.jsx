import React from "react";
import "./CartItem.scss"

const CartItem = ({item}) => {
   const {title, description, image} = item
  return (
    <div className="cart__item">
        <div className="img_cart">
            <img src={image} alt={title} />
        </div>
        <div>
            <h4 className="title">
                {title}
            </h4>
            <p className="description">
                {description}
            </p>
        </div>
    </div>
  );
};

export default CartItem;
