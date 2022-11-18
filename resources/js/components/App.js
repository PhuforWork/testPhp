import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "../routes";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store";
import "antd/dist/antd.css"; // important

function MyApp() {
    return (
        <>
            <Router />
        </>
    );
}

export default MyApp;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Provider store={store}>
                    <MyApp />
                </Provider>
            </Suspense>
        </BrowserRouter>,
        document.getElementById("app")
    );
}
