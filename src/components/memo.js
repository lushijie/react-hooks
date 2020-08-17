// TODO: https://juejin.im/post/5d8dd1d6f265da5b950a431c
import React from 'react'

const Child = (props) => {
  console.log('子组件?')
  return(
    <div>我是一个子组件</div>
  );
}

// React.memo 为高阶组件。它与React.PureComponent非常相似，但它适用于函数组件，但不适用于 class 组件。
// 每次父组件更新count，子组件都会更新；使用memo，count变化子组件没有更新
const ChildMemo = React.memo(Child);

export default (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={(e) => { setCount(count+1) }}>加1</button>
      <p>count:{count}</p>
      <ChildMemo />
    </div>
  )
}
