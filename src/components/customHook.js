import { useState, useDebugValue } from "react";

// 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
export default function useFriendStatus(friendID) {
  const [isOnline] = useState(null);

  // useDebugValue 可以在 React DevTools 中为自定义组件展示 label
  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}
