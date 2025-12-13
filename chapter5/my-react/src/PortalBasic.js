import { useState } from "react";
import { createPortal } from "react-dom";
import "./PortalBasic.css";

export default function PortalBasic() {
  const [show, setShow] = useState(false);
  const handleDialog = () => setShow((s) => !s);
  return (
    <form>
      <button type="button" onClick={handleDialog} disabled={show}>
        ダイアログを表示
      </button>
      {show && // showがtrueなら&&以下を実行する
        // createPortal(挿入したいReact要素, 挿入したい場所)
        createPortal(
          <div className="dialog">
            <p>Portalで生成されたダイアログ</p>
            <button type="button" onClick={handleDialog}>
              閉じる
            </button>
          </div>,
          // 挿入したい場所のDOM
          document.getElementById("dialog")
        )}
    </form>
  );
}

/*
export default function PortalBasic() {
  const [show, setShow] = useState(false);
  const handleDialog = () => {
    setShow((s) => !s);
  };
  return (
    <>
      <button type="button" onClick={handleDialog} disabled={show}>
        開く
      </button>
      {show &&
        createPortal(
          <>
            <p>ダイアログ</p>
            <button type="button" onClick={handleDialog}>
              閉じる
            </button>
          </>,
          document.getElementById("dialog")
        )}
    </>
  );
}
*/
