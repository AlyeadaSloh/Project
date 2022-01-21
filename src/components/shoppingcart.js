import React from "react";
import "./shoppingcart.css";

function ShoppingCart(props) {
  return (
    <div className="ShoppingCart">
      <div className="cartItem">
        <h3>{props.cart}</h3>
      </div>
      <div className="cartItem">
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
      </div>
      <h2>Total: ${props.total}</h2>
    </div>
  );
}

export default ShoppingCart;
