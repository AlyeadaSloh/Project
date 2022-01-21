import React from "react";

function Product(props) {
  return (
    <div className="Product">
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <div className="buttons">
        <button
          onClick={() => {
            props.addToShoppingCart(props.name);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.removeFromShoppingCart(props.name);
            // props.removeFromShoppingCart(props.price);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Product;
