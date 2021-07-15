import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Pill } from "../components";

interface Props {}

export default class DetailPage extends Component {
    render() {
        return (
            <div className="container mx-auto px-4">
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

                <div className="grid grid-cols-2 gap-36">
                    <div>
                        <img
                            src="http://placekitten.com/g/264/160"
                            alt=""
                            className="object-cover w-full"
                        />
                    </div>

                    <div className="text-light-text dark:text-dark-text">
                        <div className="font-semibold text-4xl mt-12 mb-12">
                            Belgium
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                            <div>
                                <span className="font-semibold">
                                    Native Name:
                                </span>{" "}
                                Belgie
                            </div>
                        </div>

                        <div className="mb-4">
                            <span className="font-semibold">Native Name:</span>{" "}
                            Belgie
                        </div>

                        <div className="mb-12">
                            <span className="font-semibold">Native Name:</span>{" "}
                            Belgie
                        </div>

                        <div className="flex items-center gap-4">
                            <div>Border Countries:</div>
                            <Pill>France</Pill>
                            <Pill>Germany</Pill>
                            <Pill>Netherlands</Pill>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
