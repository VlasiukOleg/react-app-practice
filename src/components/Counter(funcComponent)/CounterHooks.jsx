import React, { useEffect, useState } from "react";

import {
  CounterWrap,
  CounterValue,
  CounterControls,
} from "./CounterHooks.styled";

export const CounterHooks = () => {
  const [value, setValue] = useState(5);

  const handleIncrement = () => {
    setValue((state) => state + 1);
  };

  const handleDecrement = () => {
    setValue((state) => state - 1);
  };

  useEffect(() => {
    document.title = `Value counter is ${value}`;
  }, [value]);

  return (
    <CounterWrap>
      <CounterValue>{value}</CounterValue>
      <CounterControls className="Counter__controls">
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
        <button onClick={handleIncrement}>Increment</button>
      </CounterControls>
    </CounterWrap>
  );
};
