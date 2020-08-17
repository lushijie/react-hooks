import React, { useMemo, useCallback } from "react";

const Child = ({ name, onClick }) => {
  console.log("调用子组件");
  return (
    <div>
      <button onClick={() => onClick("新的子组件name")}>改变name</button>{" "}
      {name.name}
    </div>
  );
};
const ChildMemo = React.memo(Child);

export default () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Child组件");

  const nameMemo = useMemo(() => {
    return { name, color: name.indexOf("name") !== -1 ? "red" : "green" };
  }, [name]);

  const nameCallBack = useCallback(newName => setName(newName), []);

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
        onClick={nameCallBack}
      />
    </div>
  );
};
