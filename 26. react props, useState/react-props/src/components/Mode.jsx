import { useState } from "react";

const Mode = () => {
  let [mode, setMode] = useState(false);
  function changeMode(e) {
    setMode(!mode);
    if (!mode) {
        e.target.classList.replace('light','dark');
        document.body.style.backgroundColor = 'black';
    }
    else{
        e.target.classList.replace('dark','light');
        document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <h2>{mode ? "Light" : "Dark"} Mode</h2>
      <button className="light" onClick={(e)=>changeMode(e)}>change mode</button>
    </>
  );
};

export default Mode;
