import React, { useReducer } from "react";
import reducer from "./context/store/reducer";
import ColorContext from "./context/store/context";
import Buttons from "./context/buttons";
import ShowArea from "./context/showArea";

export default function() {
  const [state, dispatch] = useReducer(reducer, { color: "blue" });
  return (
    <div>
      <ColorContext.Provider value={{ state, dispatch }}>
        <Buttons />
        <ShowArea />
      </ColorContext.Provider>
    </div>
  );
}
