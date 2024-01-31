import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopAnime, getFavoriteAnime, getTypeAnime, getPopularAnime, newReleaseAnime } from "@utils/callAPI";

export const fetchTopAnime = createAsyncThunk('anime/fetchTopAnime', async (page?: number) => {
    const response = await getTopAnime('airing', page ?? 1);
    return response?.data;
});

export const fetchFavoriteAnime = createAsyncThunk('anime/fetchFavoriteAnime', async () => {
    const response = await getFavoriteAnime('favorite');
    return response?.data;
});

export const fetchTypeAnime = createAsyncThunk('anime/fetchTypeMovieAnime', async (type: string) => {
    const response = await getTypeAnime(type);
    console.log('fetchTypeAnime')
    return response?.data;
});

export const fetchTopTvAnime = createAsyncThunk('anime/fetchTopTvAnime', async () => {
    const response = await getTypeAnime('tv');
    return response?.data;
});

export const fetchTopMovieAnime = createAsyncThunk('anime/fetchTopMovieAnime', async () => {
    const response = await getTypeAnime('movie');
    return response?.data;
});

export const fetchPopularAnime = createAsyncThunk('anime/fetchPopularAnime', async () => {
    const response = await getPopularAnime('bypopularity');
    return response?.data;
});

export const fetchNewReleaseAnime = createAsyncThunk('anime/fetchNewReleaseAnime', async () => {
    const response = await newReleaseAnime();
    return response?.data;
});

interface AnimeState {
    topAnime: any[];
    favoriteAnime: any[];
    typeAnime: any[];
    topTvAnime: any[];
    topMovieAnime: any[];
    popularAnime: any[];
    airingAnime: any[];
    newReleaseAnime: any[];
    loading: boolean;
    error: string | null;
}

const initialState: AnimeState = {
    topAnime: [],
    favoriteAnime: [],
    typeAnime: [],
    topTvAnime: [],
    topMovieAnime: [],
    popularAnime: [],
    newReleaseAnime: [],
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
            return { ...state, topAnime: action.payload, loading: false }
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
            return { ...state, favoriteAnime: action.payload, loading: false }
        });
        builder.addCase(fetchFavoriteAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for type anime
        // builder.addCase(fetchTypeAnime.pending, (state, action: PayloadAction<any>) => {
        //     state.loading = true;
        // });
        // builder.addCase(fetchTypeAnime.fulfilled, (state, action: PayloadAction<any>) => {
        //     return { ...state, typeAnime: action.payload, loading: false }
        // });
        // builder.addCase(fetchTypeAnime.rejected, (state, action: PayloadAction<any>) => {
        //     state.error = action.payload;
        //     state.loading = false;
        // });

        // case reducer for top tv anime
        builder.addCase(fetchTopTvAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTopTvAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return { ...state, topTvAnime: action.payload, loading: false }
        });
        builder.addCase(fetchTopTvAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for top movie anime
        builder.addCase(fetchTopMovieAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTopMovieAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return { ...state, topMovieAnime: action.payload, loading: false }
        });
        builder.addCase(fetchTopMovieAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for popular anime
        builder.addCase(fetchPopularAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchPopularAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return { ...state, popularAnime: action.payload, loading: false }
        });
        builder.addCase(fetchPopularAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for new release anime
        builder.addCase(fetchNewReleaseAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchNewReleaseAnime.fulfilled, (state, action: PayloadAction<any>) => {
            return { ...state, newReleaseAnime: action.payload, loading: false }
        });
        builder.addCase(fetchNewReleaseAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});

export default animeSlice