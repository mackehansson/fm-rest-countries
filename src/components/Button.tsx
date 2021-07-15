import React, { Component } from "react";

interface Props {
    children: React.ReactChild;
}

export class Button extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <button className="bg-dark-primary text-dark-text py-3 px-10 flex gap-3 items-center rounded-md shadow-lg">
                {children}
            </button>
        );
    }
}
