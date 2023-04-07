import React, { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>Grandpa Money:{money}</small>
      </p>
    </div>
  );
};

export default Sister;
