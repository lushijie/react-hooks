import React, { useContext } from "react";
import ColorContext from "./store/context";

export default () => {
  const { state } = useContext(ColorContext);
  return <div style={{ color: state.color }}>字体颜色展示为{state.color}</div>;
};
