import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./class.css";
import { MyHello } from "./MyHello";
// パフォーマンス監視のためのサービス
import reportWebVitals from "./reportWebVitals";
import { StateBasic } from "./StateBasic";
import { ForNest } from "./ForNest";
import { books } from "./books";
import { ForSort } from "./ForSort";
import { TitledPanel } from "./TitledPanel";

const content = `<h1>このPCはウイルスに感染しています<h1>`;

const root = ReactDOM.createRoot(document.getElementById("root")); // HTML内のdivタグと対応
root.render(
  // 描画
  <React.StrictMode>
    <App />
    <p>{content}</p>
    <p dangerouslySetInnerHTML={{ __html: content }}></p>
    <p className="hoge">スタイル</p>
    <MyHello myName={"鈴木"}></MyHello>
    <StateBasic init={0}></StateBasic>
    <ForNest src={books}></ForNest>
    <ForSort src={books}></ForSort>
    <TitledPanel>
      <div key="title">タイトル</div>
      <div key="body">ボディ</div>
    </TitledPanel>
  </React.StrictMode>
);

/*
setInterval(() => {
  root.render(<p>現在時刻：{new Date().toLocaleString()}</p>);
}, 1000);
*/

/*
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// パフォーマンス監視
reportWebVitals();
