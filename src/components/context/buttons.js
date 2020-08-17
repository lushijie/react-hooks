import React, { useContext } from "react"
import ColorContext from './store/context'
import ACTIONS from './store/action'

export default () => {
  const { dispatch } = useContext(ColorContext);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.UPDATE_COLOR, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.UPDATE_COLOR, color: "green" });
        }}
      >
        绿色
      </button>
    </React.Fragment>
  );
};
