// App.js
import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterDisplay from './CounterDisplay';
import CounterButton from './CounterButton';

function Counter_parent() {
  return (
    <CounterProvider>
      <h2 >Context Counter</h2>
      <CounterDisplay />
      <CounterButton />
    </CounterProvider>
  );
}

export default Counter_parent;


