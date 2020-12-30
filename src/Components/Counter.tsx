import React from 'react';
import { useCounter } from '../Context/CountContext';

const Counter = () => {

  const {count, setCount} = useCounter();

  return( 
  <div>
    <h1>Counter: {count} </h1>
    <button onClick={() => {setCount(count + 1)}}>Increment</button>
  </div>
  )
}

export default Counter;