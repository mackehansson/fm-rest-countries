import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryModel } from "../../models";

export const countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.eu/rest/v2/" }),
    tagTypes: ["Countries"],
    endpoints: (builder) => ({
        getCountries: builder.query<CountryModel[], string>({
            query: (name) => `all`,
        }),
        getCountryByCode: builder.query<CountryModel, string>({
            query: (code: string) => `alpha/${code}`,
        }),
        searchCountryByName: builder.query<CountryModel[], string>({
            query: (name: string) => `name/${name}`,
        }),
    }),
});

export const {
    useGetCountriesQuery,
    useGetCountryByCodeQuery,
    useSearchCountryByNameQuery,
} = countryApi;
