import {useState} from 'react'
const Counters = () => {
  let[count, setCount] = useState(0);

  function handleIncrease() {
    setCount(++count);
  }
  function handleDecrease() {
    if (count>=1) {
        setCount(--count);
    }
  }
  return (
    <>
      <button onClick={handleDecrease}>decrease</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={()=>{
        setCount(0);
      }}>reset</button>
    </>
  );
};

export default Counters;
