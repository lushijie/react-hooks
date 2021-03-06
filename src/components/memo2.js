import React from "react";

const Child = ({ name, onClick }) => {
  console.log("调用子组件");
  return (
    <div>
      <button onClick={() => onClick("新的子组件name")}>改变name</button> {name}
    </div>
  );
};
const ChildMemo = React.memo(Child);

// 当父组件传递状态给子组件的时候，memo好像没什么效果，子组件还是执行了
// 父组件 state change, memo 没有阻止子组件的渲染
export default () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Child组件");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击+1， count: {count}
      </button>
      <ChildMemo name={name} onClick={newName => setName(newName)} />
    </div>
  );
};
