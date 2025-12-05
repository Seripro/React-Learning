import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateForm } from "./StateForm";
import { StateFormUC } from "./StateFormUC";
import { FormTextarea } from "./FormTextarea";
import { FormSelect } from "./FormSelect";
import { FormList } from "./FormList";
import { FormRadio } from "./FormRadio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StateForm></StateForm>
    <hr />
    <StateFormUC></StateFormUC>
    <FormTextarea></FormTextarea>
    <br />
    <FormSelect></FormSelect>
    <br />
    <FormList></FormList>
    <br />
    <FormRadio></FormRadio>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
