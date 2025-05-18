import React from "react";
import {useCounter} from './store';

const App = () => {
  const {count,increment,decrement} = useCounter();


  return <div>
    <h1>
      counter: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => useCounter.setState({ count: 0 })}>reset</button>
      
    </h1>
  </div>;
};

export default App;
