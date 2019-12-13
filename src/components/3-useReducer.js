import React, { useReducer, useEffect } from 'react'

const initialState = { count: 0, info: 'extra info' };
function reducer(preState, action) {
  switch (action.type) {
    case "increment":
      return { ...preState, count: preState.count + 1 }; // preState !!!
    case "decrement":
      return { ...preState, count: preState.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log(state)
  })

  return (
    <div>
      Count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}
