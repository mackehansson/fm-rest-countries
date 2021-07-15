import React, { Component } from "react";

interface Props {}

export class Pill extends Component {
    render() {
        return (
            <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-1 px-5 inline-block text-xs rounded-md shadow-md">
                Komponent
            </div>
        );
    }
}
