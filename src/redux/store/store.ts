import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@redux/slice/userSlice";
import animeSlice from "@redux/slice/animeSlice";

export const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        user: userSlice.reducer,
        anime: animeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store