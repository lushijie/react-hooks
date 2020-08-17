// 在子组件不需要父组件的值和函数的情况下，只需要使用memo函数包裹子组件即可
// 函数传递给子组件使用useCallback
// 有依赖项的值使用useMemo

import React, { memo, useState, useMemo, useCallback } from "react";

const Child = ({ name, onClick }) => {
  console.log("调用子组件");
  return (
    <div>
      <button onClick={() => onClick("新的子组件name")}>改变name</button>{" "}
      {name.name}
    </div>
  );
};
const ChildMemo = memo(Child);

export default () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Child组件");

  const nameMemo = useMemo(() => {
    return {
      name,
      color: name.indexOf("name") !== -1 ? "red" : "green"
    };
  }, [name]);

  const setNameCallback = useCallback(newName => setName(newName), []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击+1， count: {count}
      </button>
      <ChildMemo
        // // 对象属性导致 count 变化，子组件重复渲染
        // name={{ name, color: name.indexOf("name") !== -1 ? "red" : "green" }}
        name={nameMemo}
        onClick={setNameCallback}
      />
    </div>
  );
};
