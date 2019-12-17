// 传入 useMemo 的函数会在渲染期间执行。如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
// 请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。
// 你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。

import React, { useState, useMemo } from "react";

export default function WithMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum; // 返回一个 memoized 值
  }, [count]);

  return (
    <div>
      <h4>
        {count}-{expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input
          value={val}
          onChange={event => setValue(event.target.value)}
        />
        {val}
      </div>
    </div>
  );
}
