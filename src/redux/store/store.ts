import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "@redux/slice/userSlice";
import animeSlice from "@redux/slice/animeSlice";
import bankSlice from "@redux/slice/bankSlice";
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
    bank: bankSlice.reducer,
});

const persistConfig = {
    key: "root",
    version: 1,
    storage: reduxStorage,
    timeout: 30000,
    blacklist: [],
    whitelist: ["user","bank"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
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