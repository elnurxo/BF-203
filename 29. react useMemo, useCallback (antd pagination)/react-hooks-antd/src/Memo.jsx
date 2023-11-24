import React from "react";
import { useMemo, useState } from "react";
import { initialValues } from "./data.js";

const Memo = () => {
  let [count, setCount] = useState(0);
  let [data] = useState(initialValues);
  const selectedData = useMemo(() => {
    return data.find((x) => x.isSelected);
  }, [data]);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <h4>selected item: {selectedData.id}</h4>
    </>
  );
};

export default Memo;
