import React from "react";
import { MessagePresenter } from "../components";
import { useGetCountryByCodeQuery } from "../features/countries/country-api-service";
import { Link } from "react-router-dom";

interface Props {
    code: string;
}

export const FlagDetail: React.FC<Props> = ({ code }) => {
    const { data, error, isLoading } = useGetCountryByCodeQuery(code);

    if (isLoading) return <MessagePresenter message="Loading ..." />;

    if (error)
        return <MessagePresenter message="Error while fetching countries" />;

    if (!data) {
        return <MessagePresenter message="Didnt find that country." />;
    }

    return (
        <div className="desktop:grid desktop:grid-cols-2 desktop:gap-36">
            <div>
                <img src={data.flag} alt="" className="object-cover w-full" />
            </div>

            <div className="text-light-text dark:text-dark-text">
                <div className="font-semibold text-4xl mt-12 mb-12">
                    {data.name}
                </div>

                <div className="desktop:grid desktop:grid-cols-2 desktop:gap-4 desktop:mb-4 mb-6">
                    <div>
                        <span className="font-semibold">Native Name:</span>{" "}
                        {data.nativeName}
                    </div>
                    <div>
                        <span className="font-semibold">Top Level Domain:</span>{" "}
                        {data.topLevelDomain.map((domain, index) => (
                            <span key={index}>{domain}</span>
                        ))}
                    </div>
                    <div>
                        <span className="font-semibold">Population:</span>{" "}
                        {data.population}
                    </div>
                    <div>
                        <span className="font-semibold">Currencies:</span>{" "}
                        {data.currencies.map((currency, index) => (
                            <span key={index}>{currency.name}</span>
                        ))}
                    </div>
                    <div>
                        <span className="font-semibold">Region:</span>{" "}
                        {data.region}
                    </div>
                    <div>
                        <span className="font-semibold">Languages:</span>{" "}
                        {data.languages.map((language, index) => (
                            <span key={index}>{language.name}</span>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {data.subregion}
                </div>

                <div className="mb-12">
                    <span className="font-semibold">Capital:</span>{" "}
                    {data.capital}
                </div>

                {data.borders.length > 0 && (
                    <div className="desktop:flex desktop:items-center desktop:gap-4">
                        <div className="mb-4 desktop:mb-0 text-2xl">
                            Border Countries:
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            {data.borders.map((land, index) => (
                                <Link
                                    to={`/detail/${land}`}
                                    key={index}
                                    className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-1 px-5 inline-block text-xs rounded-md shadow-md"
                                >
                                    {land}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
