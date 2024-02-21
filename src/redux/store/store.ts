import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "@redux/slice/userSlice";
import animeSlice from "@redux/slice/animeSlice";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import reduxStorage from "@utils/localStorage";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    anime: animeSlice.reducer,
});

const persistConfig = {
    key: "root",
    version: 1,
    storage: reduxStorage,
    timeout: 0,
    blacklist: [],
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer: {
    //     // Here we will be adding reducers
    //     user: userSlice.reducer,
    //     anime: animeSlice.reducer,
    // },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)

export default store