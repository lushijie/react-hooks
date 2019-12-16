// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。
// 在大多数情况下，应当避免使用 ref 这样的命令式代码。
// useImperativeHandle 应当与 forwardRef 一起使用
import React, { useRef, useImperativeHandle, forwardRef } from "react";

function ChildInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
const Child = forwardRef(ChildInput)

export default function Parent() {
  const inputEl = useRef(null);

  function onButtonClick() {
    inputEl.current.focus();
  }

  return (
    <div>
      <Child ref={inputEl} />
      <button onClick={onButtonClick}>focus</button>
    </div>
  );
}

