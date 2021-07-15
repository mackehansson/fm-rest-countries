import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import StartPage from "./pages/StartPage";
import DetailPage from "./pages/DetailPage";

import { Button, Header } from "./components";

class App extends Component<{}> {
    constructor() {
        super({});

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    render() {
        return (
            <HashRouter basename="/">
                <div className="page-wrapper">
                    <Header />
                    <Route exact path="/" component={StartPage} />
                    <Route path="/detail" component={DetailPage} />
                </div>
            </HashRouter>
        );
    }
}

export default App;
