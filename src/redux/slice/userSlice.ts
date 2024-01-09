import { ILanguage, IUSerSlice } from "src/model/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: IUSerSlice = {
    isLogin: false,
    language: {
        title: "English",
        value: "en",
        image: require('@images/unAuth/america.png'),
    },
    theme: 'light',
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<ILanguage>) => {
            state.language = action.payload;
        },
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
        setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
            state.theme = action.payload;
        },
    },
});

export const {
    setLanguage,
    setLogin,
    setTheme,
} = userSlice.actions;

export default userSlice