import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopAnime, getFavoriteAnime, getTypeAnime, getPopularAnime, getAiringAnime } from "@utils/callAPI";

export const fetchTopAnime = createAsyncThunk('anime/fetchTopAnime', async () => {
    const response = await getTopAnime('airing');
    return response?.data;
});

export const fetchFavoriteAnime = createAsyncThunk('anime/fetchFavoriteAnime', async () => {
    const response = await getFavoriteAnime('favorite');
    return response?.data;
});

export const fetchTypeAnime = createAsyncThunk('anime/fetchTypeAnime', async (type: string) => {
    const response = await getTypeAnime(type);
    return response?.data;
});

export const fetchPopularAnime = createAsyncThunk('anime/fetchPopularAnime', async () => {
    const response = await getPopularAnime('bypopularity');
    return response?.data;
});

export const fetchAiringAnime = createAsyncThunk('anime/fetchAiringAnime', async (page: number) => {
    const response = await getAiringAnime('airing', page, 10);
    return response?.data;
});

interface AnimeState {
    topAnime: any[];
    favoriteAnime: any[];
    typeAnime: any[];
    popularAnime: any[];
    airingAnime: any[];
    loading: boolean;
    error: string | null;
}

const initialState: AnimeState = {
    topAnime: [],
    favoriteAnime: [],
    typeAnime: [],
    popularAnime: [],
    airingAnime: [],
    loading: true,
    error: null
}

/**
 * Redux slice for managing anime state.
 */
const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // case reducer for top anime
        builder.addCase(fetchTopAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTopAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, topAnime: action.payload, loading: false}
        });
        builder.addCase(fetchTopAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for favorite anime
        builder.addCase(fetchFavoriteAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchFavoriteAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, favoriteAnime: action.payload, loading: false}
        });
        builder.addCase(fetchFavoriteAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for type anime
        builder.addCase(fetchTypeAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTypeAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, typeAnime: action.payload, loading: false}
        });
        builder.addCase(fetchTypeAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for popular anime
        builder.addCase(fetchPopularAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchPopularAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, popularAnime: action.payload, loading: false}
        });
        builder.addCase(fetchPopularAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for airing anime
        builder.addCase(fetchAiringAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchAiringAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return {...state, airingAnime: action.payload, loading: false}
        });
        builder.addCase(fetchAiringAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

    }
});

export default animeSlice