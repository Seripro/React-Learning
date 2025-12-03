import { useState } from "react";
import { StateCounter } from "./StateCounter";

export const StateParent = () => {
  const [count, setCount] = useState(0);
  const update = (step) => {
    setCount((c) => c + step);
  };
  return (
    <>
      <p>総カウント{count}</p>
      <StateCounter step={1} update={update}></StateCounter>
      <StateCounter step={5} update={update}></StateCounter>
      <StateCounter step={-1} update={update}></StateCounter>
    </>
  );
};
