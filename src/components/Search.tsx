import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export class Search extends Component {
    render() {
        return (
            <div className="relative shadow-sm">
                <span className="left-10 absolute inset-y-0 flex items-center text-light-text dark:text-dark-text">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    className="h-14 border-0 bg-light-primary dark:bg-dark-primary rounded-md w-full box-border pl-[74px] text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text"
                    placeholder="Search for a country..."
                />
            </div>
        );
    }
}
