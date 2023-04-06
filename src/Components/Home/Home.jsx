import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const HandleAddToCart = (tshirt) => {
    const exists = cart.find((tshirt) => tshirt._id === tshirt._id);

    if (exists) {
      toast("you have already added this one");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const HandleRemoveFromCart = (id) => {
    const remaining = cart.filter((tshirt) => tshirt._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            HandleAddToCart={HandleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} HandleRemoveFromCart={HandleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
