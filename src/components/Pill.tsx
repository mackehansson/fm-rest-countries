import React from "react";

interface Props {
    children: React.ReactChild;
}

export const Pill: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-1 px-5 inline-block text-xs rounded-md shadow-md">
            {children}
        </div>
    );
};
