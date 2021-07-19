import { CountryModel, RegionModel } from "./CountryModels";

export interface CountryStateModel {
    countries: CountryModel[];
    names: string[];
    searchQuery: string;
    selectedRegion: RegionModel | null;
    themeMode: string;
}
