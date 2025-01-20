import React from "react";
import useStore from "../store/MSStore";

function Section4() {
  const [MS, setMs] = React.useState({ model: "", name: "" });
  const { arr2, addMS, removeMS } = useStore((state) => state);

  const handleChange = (e) => {
    setMs({ ...MS, [e.target.name]: e.target.value });
  };

  const handleAddMS = () => {
    addMS(MS);
    setMs({ model: "", name: "" });
  };

  const handleRemoveMS = (index) => {
    removeMS(index);
  };

  return (
    <div>
      <h1>Section4</h1>
      <h2>Gundam {arr2.length}</h2>
      <input
        type="text"
        name="model"
        placeholder="Enter Model"
        value={MS.model}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter MS"
        value={MS.name}
        onChange={handleChange}
      />

      <button onClick={handleAddMS}>Add Unicorn</button>

      <ul>
        {arr2.map((item, index) => (
          <li key={index}>
            {item.model} {item.name}
            <button onClick={() => handleRemoveMS(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section4;
