// 函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。
// 在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
// 尽可能使用标准的 useEffect 以避免阻塞视觉更新。
import React, { useState, useLayoutEffect } from "react";

export default function() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(`You clicked ${count} times ~`);

    return () => {
      console.log(
        "Effects may also optionally specify how to “clean up” after them by returning a function"
      );
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
