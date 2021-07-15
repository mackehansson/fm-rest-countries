import React, { Component } from "react";
import { Search, Filter, FlagCard } from "../components";

interface Props {}

export default class StartPage extends Component {
    render() {
        return (
            <div className="container mx-auto px-4">
                {/* Top */}
                <div className="desktop:flex desktop:justify-between">
                    <div className="mb-10 desktop:mb-20 w-full desktop:w-[480px]">
                        <Search />
                    </div>
                    <div className="w-[200px] mb-10 desktop:mb-0">
                        <Filter />
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 desktop:grid-cols-4 gap-16">
                    {[1, 2, 3, 4, 5, 6, 7].map((flag, index) => (
                        <FlagCard key={index} />
                    ))}
                </div>
            </div>
        );
    }
}
