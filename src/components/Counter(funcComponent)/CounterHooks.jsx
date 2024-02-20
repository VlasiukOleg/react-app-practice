import React, { useEffect, useState, useReducer } from "react";

import {
  CounterWrap,
  CounterValue,
  CounterControls,
} from "./CounterHooks.styled";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      return state;
  }
};

export const CounterHooks = () => {
  // const [value, setValue] = useState(5);

  const [count, dispatch] = useReducer(countReducer, 0);

  // const handleIncrement = () => {
  //   setValue((state) => state + 1);
  // };

  // const handleDecrement = () => {
  //   setValue((state) => state - 1);
  // };

  // useEffect(() => {
  //   document.title = `Value counter is ${count}`;
  // }, [count]);

  return (
    <CounterWrap>
      <CounterValue>{count}</CounterValue>
      <CounterControls className="Counter__controls">
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
      </CounterControls>
    </CounterWrap>
  );
};
