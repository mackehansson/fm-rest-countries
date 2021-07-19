import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countries-slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countryApi } from "../features/countries/country-api-service";

const store = configureStore({
    reducer: {
        country: countryReducer,
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
