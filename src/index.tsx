import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store"
import Routes from "./Routes";

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById("root"));
