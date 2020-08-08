import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class Shopping extends Component {
  render() {
    return <div className="container">
        <div className="shopping_card">
            <span className="cart-no-items">No items found in the cart</span>
        </div>
    </div>;
  }
}

export default Shopping;
