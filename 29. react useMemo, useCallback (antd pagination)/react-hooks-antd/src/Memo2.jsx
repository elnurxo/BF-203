import React, { useEffect, useMemo, useState } from "react";

const Memo2 = () => {
  let [dark, setDark] = useState(false);
  let [num, setNum] = useState(0);

  const doubleNum = useMemo(() => {
    return slowFunc(num);
  }, [num]);

  //0000
  let themeStyle = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed!");
  }, [themeStyle]);

  return (
    <>
      <input
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
        placeholder="enter number"
        type="number"
      />
      <button
        onClick={() => {
          setDark((currentTheme) => !currentTheme);
        }}
      >
        change theme
      </button>
      <div style={themeStyle}>double num: {doubleNum}</div>
    </>
  );
};

function slowFunc(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default Memo2;
