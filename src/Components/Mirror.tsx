import React from 'react';
import { useCounter } from '../Context/CountContext';

const Mirror = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
        <h2>Another Component :)</h2>
        <h1>Mirror: {count} </h1>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Mirror;