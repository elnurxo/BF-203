import { useReducer } from "react";
import "./App.css";
import ACTIONS from "./actions/counter.actions";
import reducer from "./reducers/counter.reducer";
import useFetch from "./hooks/useFetch";

function App() {
  let [state, dispatch] = useReducer(reducer, { count: 0 });
  let{data, error, loading}= useFetch('https://northwind.vercel.app/api/categories');
  // let{postedData} = useFetch('https://northwind.vercel.app/api/categories',{method:'post',payload:{name:'code',description:'test desc'}})
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
      <hr />
      <h3>Custom Hooks (use fetch)</h3>
      {loading && <div>loading...</div>}
      {data && data.map((item)=>{
        return <div key={item.id}>{item.name}</div>
      })}
      {error && <div style={{color:'red'}}>Error</div>}
    </>
  );
}

export default App;
