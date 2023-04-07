import React from "react";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";

const Father = ({ ring }) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself ring={ring}></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
