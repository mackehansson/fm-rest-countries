export interface CountryModel {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: CurrencyModel[];
    languages: LanguageModel[];
    translations: TranslationsModel;
    flag: string;
    regionalBlocs: RegionalBlocModel[];
    cioc: string;
}

interface RegionalBlocModel {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: any[];
}

interface TranslationsModel {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}

interface LanguageModel {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface CurrencyModel {
    code: string;
    name: string;
    symbol: string;
}

export interface RegionModel {
    id: number;
    name: string;
    unavailable: boolean;
}

export class Regions {
    get allRegions(): RegionModel[] {
        return [
            { id: 0, name: "All", unavailable: false },
            { id: 1, name: "Africa", unavailable: false },
            { id: 2, name: "Americas", unavailable: false },
            { id: 3, name: "Asia", unavailable: false },
            { id: 4, name: "Europe", unavailable: false },
            { id: 5, name: "Oceania", unavailable: false },
        ];
    }
}
