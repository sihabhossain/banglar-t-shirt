import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin>Abir</Cousin>
        <Cousin hasFriend={true}>Nibir</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
