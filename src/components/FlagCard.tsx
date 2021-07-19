import React from "react";
import { Link } from "react-router-dom";
import { CountryModel } from "../models/CountryModels";

interface Props {
    country: CountryModel;
}
export const FlagCard: React.FC<Props> = ({ country }) => {
    return (
        <Link
            to={`/detail/${country.name}`}
            className="hover:scale-105 transition shadow-sm"
        >
            <div className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
                <div>
                    <img
                        src={country.flag}
                        alt=""
                        className="object-cover h-48 w-full"
                    />
                </div>

                <div className="px-8 py-8">
                    <header>
                        <h2 className="text-xl font-black mb-6">
                            {country.name}
                        </h2>
                    </header>
                    <div className="mb-2 text-sm">
                        <span className="font-semibold">Population:</span>{" "}
                        {country.population}
                    </div>
                    <div className="mb-2 text-sm">
                        <span className="font-semibold">Region:</span>{" "}
                        {country.region}
                    </div>
                    <div className="mb-2 text-sm">
                        <span className="font-semibold">Capital:</span>{" "}
                        {country.capital}
                    </div>
                </div>
            </div>
        </Link>
    );
};
