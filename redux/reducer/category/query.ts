import {type BaseQueryFn, createApi, fetchBaseQuery, type FetchArgs} from "@reduxjs/toolkit/query/react";
import {CustomError} from "../../types";
import {HYDRATE} from "next-redux-wrapper";
import {apiUrl} from "../../../configs";
import type {CategoryResponse} from "../../../apiTypes";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
    extractRehydrationInfo: (action, {reducerPath}) => {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['Categories'],
    endpoints: (builder) => ({
        // Queries
        getCategories: builder.query<CategoryResponse, void>({
            query: () => `/categories`,
            providesTags: ['Categories']
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    util: {getRunningQueriesThunk: getCategoriesRunningQueriesThunk}
} = categoriesApi;

export const {getCategories} = categoriesApi.endpoints;