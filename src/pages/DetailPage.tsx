import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FlagDetail } from "../components";

export const DetailPage = () => {
    let { alpha3Code } = useParams<Record<string, string | undefined>>();

    if (!alpha3Code) {
        return (
            <div className="container mx-auto px-4 text-light-text dark:text-dark-text">
                Must have a code
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pb-10">
            <div className="mb-[80px] pt-10">
                <Link
                    to="/"
                    className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-3 px-10 inline-flex gap-3 items-center rounded-md shadow-lg"
                >
                    <>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                        Back
                    </>
                </Link>
            </div>

            <FlagDetail code={alpha3Code} />
        </div>
    );
};
