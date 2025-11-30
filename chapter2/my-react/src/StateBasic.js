// stateの使い方
import { useState } from "react";

export const StateBasic = (props) => {
  const [count, setCount] = useState(props.init);
  const handleClick = () => {
    return setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  );
};
