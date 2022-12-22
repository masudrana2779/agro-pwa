import {type BaseQueryFn, createApi, fetchBaseQuery, type FetchArgs} from "@reduxjs/toolkit/query/react";
import {CustomError} from "../../types";
import {HYDRATE} from "next-redux-wrapper";
import {apiUrl} from "../../../configs";
import type {CategoryResponse} from "../../../apiTypes";

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, unknown>,
    extractRehydrationInfo: (action, {reducerPath}) => {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['Blog'],
    endpoints: (builder) => ({
        // Queries
        getBlogs: builder.query<CategoryResponse, void>({
            query: () => `/blogs`,
            providesTags: ['Blog']
        }),
    }),
})

export const {
    useGetBlogsQuery,
    util: {getRunningQueriesThunk: getCategoriesRunningQueriesThunk}
} = blogsApi;

export const {getBlogs} = blogsApi.endpoints;