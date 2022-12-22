import {nextReduxCookieMiddleware, wrapMakeStore} from "next-redux-cookie-wrapper";
import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {categoriesApi} from "./reducer/category/query";
import {blogsApi} from "./reducer/blog/query";

const middlewares: any = [
    categoriesApi.middleware,
    blogsApi.middleware
]

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer
});

const makeStore = wrapMakeStore(() => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
            .prepend(nextReduxCookieMiddleware({subtrees:[]})).concat(...middlewares)
}))

export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const wrapper = createWrapper<AppStore>(makeStore)