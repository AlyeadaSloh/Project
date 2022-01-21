import React from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import ProductList from "./components/productList";
import Hero from "./components/hero";
import react, { Component } from "react";
import Tea from "./components/Tea";

//new
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }

  inventory = [
    { name: "Nicki Minaj", price: 3.0 },
    { name: "Beyonce", price: 3.0 },
    { name: "Rihanna", price: 3.0 }
  ];

  addToShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Nicki Minaj") {
      total += 3.0;
    }
    if (item == "Beyonce") {
      total += 3.0;
    }
    if (item == "Rihanna") {
      total += 3.0;
    }

    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    this.setState({ total: total });
  };

  removeFromShoppingCart = (item) => {
    let total = this.state.total;
    if (item == "Nicki Minaj") {
      total -= 3;
    }
    if (item == "Beyonce") {
      total -= 3;
    }
    if (item == "Rihanna") {
      total -= 3;
    }

    this.setState((state) => {
      state.cart.pop(item);
      return state;
    });
    this.setState({ total: total });
  };

  //const cart = this.state.cart;
  //let index = cart.indexOf(item);
  //if (index !== -1) {
  // cart.splice(index, 1);
  //}
  //this.setState((state) => {
  //return state;
  // });
  // };

  render() {
    return (
      <div className="App">
        <Hero />
        <Tea />
        <ShoppingCart
          cart={this.state.cart}
          total={this.state.total}
          inventory={this.inventory}
        />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            addToShoppingCart={this.addToShoppingCart}
            removeFromShoppingCart={this.removeFromShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
