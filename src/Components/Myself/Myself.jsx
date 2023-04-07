import React from "react";
import Speacial from "../Speacial/Speacial";

const Myself = ({ ring }) => {
  return (
    <div>
      <h2>Myself</h2>
      <section>
        <Speacial ring={ring}></Speacial>
      </section>
    </div>
  );
};

export default Myself;
