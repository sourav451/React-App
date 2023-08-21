import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount]=useState(1)

  return (
      <div className="App">
        <h2>Button Count</h2>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <p>{count}</p>
        <button  onClick={()=>{if (count>0)setCount(count-1)}}>-</button>
      </div>
  );
}

export default App;
