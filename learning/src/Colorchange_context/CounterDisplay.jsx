// CounterDisplay.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: count % 2 === 0 ? 'red' : 'green',
    color: 'white',
    fontSize: '30px',
  };

  return<div>
    <div style={squareStyle}></div>
    <h1>{count}</h1>
    </div>
  
}

export default CounterDisplay;


