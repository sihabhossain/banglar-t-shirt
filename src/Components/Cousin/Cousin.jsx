import React, { Children } from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>
      </p>
      {hasFriend && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
