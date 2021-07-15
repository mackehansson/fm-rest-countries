import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {}

export class FlagCard extends Component {
    render() {
        return (
            <Link to="/detail" className="hover:scale-105 transition shadow-sm">
                <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
                    <div>
                        <img
                            src="http://placekitten.com/g/264/160"
                            alt=""
                            className="object-cover h-48 w-full"
                        />
                    </div>

                    <div className="px-8 py-8">
                        <header>
                            <h2 className="text-xl font-black mb-6">Germany</h2>
                        </header>
                        <div className="mb-2 text-sm">
                            <span className="font-semibold">Population</span>:
                            12
                        </div>
                        <div className="mb-2 text-sm">
                            <span className="font-semibold">Region:</span>{" "}
                            Europe
                        </div>
                        <div className="mb-2 text-sm">
                            <span className="font-semibold">Capital:</span>{" "}
                            Berlin
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
