import { useRef } from "react";

export const FormFiles = () => {
  const file = useRef(null);
  const show = () => {
    const fs = file.current.files;
    console.log(file.current);
    for (const f of fs) {
      console.log(`ファイル名：${f.name}`);
      console.log(`種類：${f.type}`);
      console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);
    }
  };
  return (
    <form>
      <input type="file" ref={file} multiple></input>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
};
