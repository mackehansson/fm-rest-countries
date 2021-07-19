import React from "react";

interface Props {
    message: string;
}

export const MessagePresenter: React.FC<Props> = ({ message }) => {
    return (
        <div className="container mx-auto px-4 text-light-text dark:text-dark-text">
            {message}
        </div>
    );
};
