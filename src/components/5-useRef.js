import React, { useRef } from 'react'

export default function () {
  // useRef 返回一个可变的 ref 对象，其 .current 属性为传入的初始化参数（initialValue）
  const inputEl = useRef(null);

  const onButtonClick = () => {
    console.log(inputEl)
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
