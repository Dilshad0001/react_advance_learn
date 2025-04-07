// CounterButtons.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function CounterButton() {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div >
      <button onClick={decrement} style={{ marginRight: '10px' }}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default CounterButton;



