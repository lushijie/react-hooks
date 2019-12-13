import React, { useState } from 'react';

export default function () {
  const [count, setCount] = useState(0); // 0 初始值
  const [user, setUser] = useState({id: 1, name: 'lushijie'})

  // 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用
  const [info] = useState(() => { return '惰性初始 state' })

  return (
    <div>
      <p>You clicked {count} times</p>

      {/* 经典用法 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {/* 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值 */}
      <button onClick={() => setCount(preCount => preCount + 1)}>Click me</button>

      <p>Name: {user.name}</p>
      {/* 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。 */}
      <button onClick={() => setUser(preState => ({...preState, name: 'gexufei'}))}>setUser</button>

      <p>{info}</p>
    </div>
  );
}