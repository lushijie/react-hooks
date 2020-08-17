import React, { useCallback, useState } from "react";

class Child extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.flag !== this.props.flag;
  }

  render() {
    console.log("Child render");
    return <div>Child Count: {this.props.count}</div>;
  }
}

export default function() {
  const [count, setCount] = useState(0);
  const [selfCount, setSelfCount] = useState(100);

  const memoizedCallback = useCallback(() => {
    console.log("count change", count, selfCount);
  }, [count, selfCount]);

  return (
    <div>
      <Child count={count} flag={memoizedCallback} />
      <p>self Count：{selfCount}</p>
      <button onClick={() => setCount(count + 1)}>child count add</button>
      <button onClick={() => setSelfCount(selfCount + 1)}>
        self count add
      </button>
      <button onClick={() => memoizedCallback()}>callback click</button>
    </div>
  );
}
