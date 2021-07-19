import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryModel, CountryStateModel, RegionModel } from "../../models";

const initialState: CountryStateModel = {
    countries: [],
    names: [],
    searchQuery: "",
    selectedRegion: null,
    themeMode: "",
};

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<CountryModel[]>) => {
            state.countries = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setSelectedRegion: (
            state,
            action: PayloadAction<RegionModel | null>
        ) => {
            state.selectedRegion = action.payload;
        },
        setThemeMode: (state, action: PayloadAction<string>) => {
            state.themeMode = action.payload;
        },
    },
});

export default countrySlice.reducer;

export const { setCountries, setSearchQuery, setSelectedRegion, setThemeMode } =
    countrySlice.actions;
