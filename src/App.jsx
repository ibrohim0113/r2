import { useState, useCallback } from "react";
import { Card } from "./Card";
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  console.log("Parent render");

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count 1</button>
      <p>{count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count 2</button>
      <Card onClick={handleClick} count={count} />
    </>
  );
}

export default App;