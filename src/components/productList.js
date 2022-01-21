import React from "react";
import "./productList.css";
// Be sure to uncomment this line before trying to use the Product component!
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[0].name}
        price={props.inventory[0].price}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[1].name}
        price={props.inventory[1].price}
      />

      <Product
        addToShoppingCart={props.addToShoppingCart}
        removeFromShoppingCart={props.removeFromShoppingCart}
        name={props.inventory[2].name}
        price={props.inventory[2].price}
      />
    </div>
  );
}

export default ProductList;
