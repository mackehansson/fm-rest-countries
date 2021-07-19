import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import { setSelectedRegion } from "../features/countries/countries-slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RegionModel, Regions } from "../models";

export const Filter = () => {
    const regions = new Regions();
    const { selectedRegion } = useAppSelector((state) => state.country);
    const dispatch = useAppDispatch();

    const selectRegion = (sregion: RegionModel | null) => {
        if (!sregion) return;

        dispatch(setSelectedRegion(sregion.id === 0 ? null : sregion));
    };

    return (
        <div className="relative">
            <Listbox
                value={selectedRegion}
                onChange={(region) => selectRegion(region)}
            >
                <div className="relative">
                    <Listbox.Button className="w-full border-0 rounded-md h-14 flex items-center justify-between pt-0 pr-5 pb-0 pl-6 bg-light-primary dark:bg-dark-primary shadow-sm">
                        <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                            {selectedRegion
                                ? selectedRegion.name
                                : "Filter by Region"}
                        </span>
                        <span className="text-xs text-light-text dark:text-dark-text">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Listbox.Options className="mt-1 p-5 absolute w-full overflow-auto rounded-md bg-light-primary dark:bg-dark-primary shadow-lg">
                            {regions.allRegions.map((region) => (
                                <Listbox.Option
                                    key={region.id}
                                    value={region}
                                    disabled={region.unavailable}
                                    className="py-2 cursor-pointer text-light-text dark:text-dark-text"
                                >
                                    {region.name}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};
