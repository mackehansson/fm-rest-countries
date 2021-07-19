import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { setThemeMode } from "../features/countries/countries-slice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const Header = () => {
    const { themeMode } = useAppSelector((state) => state.country);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.theme = "light";
            dispatch(setThemeMode("Light"));
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            dispatch(setThemeMode("Dark"));
        }
    };

    return (
        <div className="h-[160px] desktop:h-20 mb-12 shadow-sm bg-light-primary dark:bg-dark-primary">
            <div className="flex items-center justify-between container mx-auto h-full px-4">
                <div className="text-xl font-semibold text-light-text dark:text-dark-text">
                    Where in the world?
                </div>

                <div>
                    <button
                        className="bg-transparent border-0 flex gap-2 text-light-text dark:text-dark-text items-center"
                        onClick={toggleTheme}
                    >
                        <FontAwesomeIcon icon={faMoon} />
                        <span className="font-semibold">{themeMode} mode</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
