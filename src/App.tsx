import React, { useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Header } from "./components";
import { DetailPage } from "./pages/DetailPage";
import { StartPage } from "./pages/StartPage";
import { useAppDispatch } from "./hooks";
import { setThemeMode } from "./features/countries/countries-slice";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            dispatch(setThemeMode("Dark"));
        } else {
            document.documentElement.classList.remove("dark");
            dispatch(setThemeMode("Light"));
        }
    }, [dispatch]);

    return (
        <HashRouter basename="/">
            <div className="page-wrapper">
                <Header />

                <Route exact path="/" component={StartPage} />
                <Route path="/detail/:name" component={DetailPage} />
            </div>
        </HashRouter>
    );
};

export default App;
