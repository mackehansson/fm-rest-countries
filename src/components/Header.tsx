import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export class Header extends Component<Props> {
    userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    constructor(props: Props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    componentDidMount() {
        console.log(this.userPrefersDark);
    }

    toggleTheme() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }

        //localStorage.removeItem("theme");
    }

    render() {
        return (
            <div className="h-[160px] desktop:h-20 mb-12 shadow-sm bg-light-primary dark:bg-dark-primary">
                <div className="flex items-center justify-between container mx-auto h-full px-4">
                    <div className="text-xl font-semibold text-light-text dark:text-dark-text">
                        Where in the world?
                    </div>

                    <div>
                        <button
                            className="bg-transparent border-0 flex gap-2 text-light-text dark:text-dark-text items-center"
                            onClick={this.toggleTheme}
                        >
                            <FontAwesomeIcon icon={faMoon} />
                            Dark mode
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
