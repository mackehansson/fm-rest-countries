import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { setSearchQuery } from "../features/countries/countries-slice";
import { useAppDispatch, useAppSelector, useDebounce } from "../hooks";

export const Search = () => {
    const searchQuery = useAppSelector((state) => state.country.searchQuery);
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce<string>(value, 500);
    const dispatch = useAppDispatch();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setValue(val);
        if (val.length === 0) {
            dispatch(setSearchQuery(""));
        }
    };

    useEffect(() => {
        if (debouncedValue) {
            dispatch(setSearchQuery(value));
        }
    }, [debouncedValue, dispatch, value]);

    return (
        <>
            <div className="relative shadow-sm">
                <span className="left-10 absolute inset-y-0 flex items-center text-light-text dark:text-dark-text">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    className="h-14 border-0 bg-light-primary dark:bg-dark-primary rounded-md w-full box-border pl-[74px] text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text"
                    placeholder="Search for a country..."
                    value={value ? value : searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </>
    );
};
