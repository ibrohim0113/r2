import React from "react";

export const Card = React.memo(({ onClick, count }) => {
  const memoizedCount = React.useMemo(() => {
    console.log("Calculating memoized value");
    return count * 2;
  }, [count]);
  console.log("Child render");
  return (
    <div>
      <p>Memoized Count: {memoizedCount}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  )
});