import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopAnime, getFavoriteAnime, getTypeAnime, getPopularAnime, newReleaseAnime, searchAnime } from "@utils/callAPI";

export const fetchTopAnime = createAsyncThunk('anime/fetchTopAnime', async (page?: number) => {
    const response = await getTopAnime('airing', page ?? 1);
    return response?.data;
});

export const fetchFavoriteAnime = createAsyncThunk('anime/fetchFavoriteAnime', async (page?: number) => {
    const response = await getFavoriteAnime('favorite', page ?? 1);
    return response?.data;
});

export const fetchTypeAnime = createAsyncThunk('anime/fetchTypeMovieAnime', async ({ type, page }: { type: string, page: number }) => {
    const response = await getTypeAnime(type, page ?? 1);
    return response?.data;
});

export const fetchTopTvAnime = createAsyncThunk('anime/fetchTopTvAnime', async (page?: number) => {
    const response = await getTypeAnime('tv', page ?? 1);
    return response?.data;
});

export const fetchTopMovieAnime = createAsyncThunk('anime/fetchTopMovieAnime', async (page?: number) => {
    const response = await getTypeAnime('movie', page ?? 1);
    return response?.data;
});

export const fetchPopularAnime = createAsyncThunk('anime/fetchPopularAnime', async (page?: number) => {
    const response = await getPopularAnime('bypopularity', page ?? 1);
    return response?.data;
});

export const fetchNewReleaseAnime = createAsyncThunk('anime/fetchNewReleaseAnime', async (page?: number) => {
    const response = await newReleaseAnime(page ?? 1);
    return response?.data;
});

export const searchAnimeAction = createAsyncThunk('anime/searchAnime', async () => {
    const response = await searchAnime();
    return response?.data;
});

interface AnimeState {
    topAnime: any[];
    pageTopAnime: number;
    favoriteAnime: any[];
    pageFavoriteAnime: number;
    typeAnime: any[];
    pageTypeAnime: number;
    topTvAnime: any[];
    pageTopTvAnime: number;
    topMovieAnime: any[];
    pageTopMovieAnime: number;
    popularAnime: any[];
    pagePopularAnime: number;
    airingAnime: any[];
    pageAiringAnime: number;
    newReleaseAnime: any[];
    pageNewReleaseAnime: number;
    searchAnime: any[];
    loading: boolean;
    error: string | null;
    myLists: any[];
}

const initialState: AnimeState = {
    pageTypeAnime: 1,
    pageAiringAnime: 1,
    pageFavoriteAnime: 1,
    pageNewReleaseAnime: 1,
    pagePopularAnime: 1,
    pageTopAnime: 1,
    pageTopMovieAnime: 1,
    pageTopTvAnime: 1,
    topAnime: [],
    favoriteAnime: [],
    typeAnime: [],
    topTvAnime: [],
    topMovieAnime: [],
    popularAnime: [],
    newReleaseAnime: [],
    airingAnime: [],
    searchAnime: [],
    loading: true,
    error: null,
    myLists: []
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
            // return { ...state, topAnime: action.payload, loading: false }
            state.topAnime = [...state.topAnime, ...action.payload];
            state.pageTopAnime += 1;
            state.loading = false;
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
            // return { ...state, favoriteAnime: action.payload, loading: false }
            state.favoriteAnime = [...state.favoriteAnime, ...action.payload];
            state.pageFavoriteAnime += 1;
            state.loading = false;
        });
        builder.addCase(fetchFavoriteAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for top tv anime
        builder.addCase(fetchTopTvAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTopTvAnime.fulfilled, (state, action: PayloadAction<any>) => {
            // return { ...state, topTvAnime: action.payload, loading: false }
            state.topTvAnime = [...state.topTvAnime, ...action.payload];
            state.pageTopTvAnime += 1;
            state.loading = false;
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
            // return { ...state, topMovieAnime: action.payload, loading: false }
            state.topMovieAnime = [...state.topMovieAnime, ...action.payload];
            state.pageTopMovieAnime += 1;
            state.loading = false;
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
            // return { ...state, popularAnime: action.payload, loading: false }
            state.popularAnime = [...state.popularAnime, ...action.payload];
            state.pagePopularAnime += 1;
            state.loading = false;
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
            // return { ...state, newReleaseAnime: action.payload, loading: false }
            state.newReleaseAnime = [...state.newReleaseAnime, ...action.payload];
            state.pageNewReleaseAnime += 1;
            state.loading = false;
        });
        builder.addCase(fetchNewReleaseAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for type anime
        builder.addCase(fetchTypeAnime.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(fetchTypeAnime.fulfilled, (state, action: PayloadAction<any>) => {
            // return { ...state, typeAnime: action.payload, loading: false }
            state.typeAnime = [...state.typeAnime, ...action.payload];
            state.pageTypeAnime += 1;
            state.loading = false;
        });
        builder.addCase(fetchTypeAnime.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });

        // case reducer for search anime
        builder.addCase(searchAnimeAction.pending, (state, action: PayloadAction<any>) => {
            state.loading = true;
        });
        builder.addCase(searchAnimeAction.fulfilled, (state, action: PayloadAction<any>) => {
            return { ...state, searchAnime: action.payload, loading: false }
        });
        builder.addCase(searchAnimeAction.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});

export default animeSlice