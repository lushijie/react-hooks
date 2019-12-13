// 对于 getSnapshotBeforeUpdate, getDerivedStateFromError, componentDidCatch 目前 Hooks 是无法模拟的
// 延迟调用：useEffect 的函数会延迟调用, useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行
// 同步执行：在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须同步执行，这样用户才不会感觉到视觉上的不一致。React 为此提供了一个额外的  Hook 来处理这类 effect
import React, { useState, useEffect } from 'react';

export default function() {
  const [count, setCount] = useState(0);

  // 使用 useEffect 完成副作用操作，第二个参数为 deps
  //  1. undefined 每次 render 都会都到
  //  2. [] 相当于 componentDidMount, 只会触发一次
  //  3. [a, b] 监听 a/b 变化
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times ~`)

    // 组件卸载时执行
    return () => {
      console.log(
        "Effects may also optionally specify how to “clean up” after them by returning a function"
      );
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}