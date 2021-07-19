import React from "react";

interface Props {
    children: React.ReactChild;
}

export const Button: React.FC<Props> = ({ children }) => {
    return (
        <button className="bg-dark-primary text-dark-text py-3 px-10 flex gap-3 items-center rounded-md shadow-lg">
            {children}
        </button>
    );
};
