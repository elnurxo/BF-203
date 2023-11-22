import { useReducer } from "react";
import "./App.css";
import ACTIONS from "../actions/counter.actions";
import reducer from "./reducers/counter.reducer";



function App() {
  let [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>hello useReducer()</h2>
      <hr />
      <h3>Counter Task</h3>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        +
      </button>
      <button onClick={()=>{
        dispatch({type: ACTIONS.RESET})
      }}>reset</button>
    </>
  );
}

export default App;
