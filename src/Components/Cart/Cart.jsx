import { key } from "localforage";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let messege;
  if (cart.length === 0) {
    messege = <p>Please add some products</p>;
  } else {
    messege = <p>you are poor now lmao</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>

      <p className={`bold ${cart.length === 3 ? "yellow" : "purple"}`}>
        something
      </p>

      {cart.length > 2 ? (
        <span className="purple">Aro kino</span>
      ) : (
        <span>fokira</span>
      )}
      {messege}

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!!</p>}
      {cart.length === 3 || <h3>Tinta to hoilo na!!</h3>}
    </div>
  );
};

export default Cart;
