import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Main from "./components/Main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// let [end, setEnd] = useState(false);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main></Main>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
