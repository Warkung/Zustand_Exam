import { useEffect, useState } from "react";
import useStore from "../store/MSStore";

function Section5() {
  const { data, isLoading, error, errMessage, getData } = useStore(
    (state) => state
  );

  console.log({ data, isLoading, error, errMessage });

  const fetchData = () => {
    getData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Section5</h1>
      <button onClick={fetchData}>Get Data</button>
      {isLoading && <h2>Loading...</h2>}
      {error ? (
        <h2>Error: {errMessage}</h2>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Section5;
