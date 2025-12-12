import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LazyBasic from "./LazyBasic";
import SuspenseSimple from "./SuspenseSimple";
// import SuspenseResult from "./SuspenseResult";
// import ProfilerBasic from "./ProfilerBasic";
import StyledBasic from "./StyledBasic";
import StyledDynamic from "./StyledDynamic";
import StyledComp from "./StyledComp";
import { MyButton, MyStyledButton } from "./StyledComp2";
import StyledCommon from "./StyledCommon";
import StyledProps from "./StyledProps";
import EmotionJsx from "./EmotionJsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LazyBasic></LazyBasic>
    <SuspenseSimple></SuspenseSimple>
    {/* <SuspenseResult></SuspenseResult> */}
    {/* <ProfilerBasic></ProfilerBasic> */}
    <StyledBasic></StyledBasic>
    <StyledDynamic
      theme={{
        radius: true,
        color: "royalblue",
      }}
    ></StyledDynamic>
    <StyledComp></StyledComp>
    <MyStyledButton>スタイルボタン</MyStyledButton>
    <MyButton>マイボタン</MyButton>
    <StyledCommon></StyledCommon>
    <StyledProps></StyledProps>
    <hr />
    <p>Emotion</p>
    <EmotionJsx></EmotionJsx>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
