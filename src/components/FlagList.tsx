import { useMemo } from "react";
import { FlagCard, MessagePresenter } from "../components";
import { useGetCountriesQuery } from "../features/countries/country-api-service";
import { useAppSelector } from "../hooks";

export const FlagList = () => {
    const { searchQuery, selectedRegion } = useAppSelector(
        (state) => state.country
    );
    const { data, error, isLoading } = useGetCountriesQuery("Sweden");

    const filteredItems = useMemo(() => {
        if (data) {
            return data.filter((item) => {
                if (selectedRegion) {
                    return (
                        item.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) &&
                        item.region === selectedRegion.name
                    );
                } else {
                    return item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                }
            });
        }
    }, [data, selectedRegion, searchQuery]);

    if (isLoading) return <MessagePresenter message="Loading ..." />;

    if (error)
        return <MessagePresenter message="Error while fetching countries" />;

    if (!filteredItems) {
        return <MessagePresenter message="Didnt find any countries." />;
    }

    return (
        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-16">
            {filteredItems.map((country, index) => (
                <FlagCard country={country} key={index} />
            ))}
        </div>
    );
};
