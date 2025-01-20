import React from "react";
import { useState } from "react";
import useStore from "../store/MSStore.js";

function Section1() {
  const [text, setText] = useState("");

  const fname = useStore((state) => state.fname);
  const lname = useStore((state) => state.lname);
  const setName = useStore((state) => state.setName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSetName = () => {
    setName("Wing Zero");
  };

  return (
    <div>
      <h1>Section 1</h1>
      <p>
        {fname} {lname}
      </p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSetName}>Set Name</button>
    </div>
  );
}

export default Section1;
