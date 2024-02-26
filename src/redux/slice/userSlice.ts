import { ILanguage, IUSerSlice } from "src/model/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUSerSlice = {
    isLogin: false,
    language: {
        title: "English",
        value: "en",
        image: require('@images/unAuth/america.png'),
    },
    theme: 'light',
    globalLoading: false,
    myLists: [],
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
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.globalLoading = action.payload;
        },
        addAnimeList: (state, action: PayloadAction<any>) => {
            state.myLists = [...state.myLists, action.payload];
        },
        removeAnimeList: (state, action: PayloadAction<any>) => {
            // state.myLists = state.myLists.filter(anime => anime.id !== action.payload);
            state.myLists = state.myLists.filter(anime => anime.mal_id !== action.payload);
        }
    },
});

export const {
    setLanguage,
    setLogin,
    setTheme,
    setGlobalLoading,
    addAnimeList,
    removeAnimeList
} = userSlice.actions;

export default userSlice