// stateの使い方
import { useState } from "react";

export const StateBasic = (props) => {
  const [count, setCount] = useState(props.init);
  const handleClick = () => {
    setCount((a) => a + 1); // 文字はaでもcでもいいのか。引数にはstateの値が入る。
    setCount((c) => c + 1);
    // ああそうか。state更新したいだけだから戻り値なくていいのか。
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  );
};
