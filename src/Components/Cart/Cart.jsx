import { key } from "localforage";
import React from "react";

const Cart = ({ cart, HandleRemoveFromCart }) => {
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => HandleRemoveFromCart(tshirt._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
