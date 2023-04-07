import React, { useContext } from "react";
import { RingContext } from "../GrandPa/GrandPa";

const Speacial = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Speacial</h2>
      <p>
        <small>Ring: {angti}</small>
      </p>
    </div>
  );
};

export default Speacial;
