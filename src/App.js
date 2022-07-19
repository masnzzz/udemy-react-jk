 import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={ onClickCountUp}>Count Up</button>
    </>
  )
}
