import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@redux/slice/userSlice";


export const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store