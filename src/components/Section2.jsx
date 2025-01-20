import React from "react";
import useStore from "../store/MSStore.js";

function Section2() {
  const { value, incNum, decNum, resetNum } = useStore((state) => state);

  const handleincNum = () => {
    incNum();
  };

  const handledecNum = () => {
    decNum();
  };

  const handleresetNum = () => {
    resetNum();
  };

  return (
    <div>
      <h1>Section 2</h1>
      <h2>{value}</h2>
      <button onClick={handleincNum}>Num +</button>
      <button onClick={handledecNum}>Num -</button>
      <button onClick={handleresetNum}>Reset</button>
    </div>
  );
}

export default Section2;
