import { RootState } from "@redux/store/store";

export const topAnimeSelector = (state: RootState) => state.anime.topAnime

export const favoriteAnimeSelector = (state: RootState) => state.anime.favoriteAnime

export const typeAnimeSelector = (state: RootState) => state.anime.typeAnime

export const popularAnimeSelector = (state: RootState) => state.anime.popularAnime

export const airingAnimeSelector = (state: RootState) => state.anime.airingAnime

export const loadingAnimeSelector = (state: RootState) => state.anime.loading

export const errorAnimeSelector = (state: RootState) => state.anime.error

export const animeSelector = (state: RootState) => state.anime

export const typeTvAnimeSelector = (state: RootState) => state.anime.topTvAnime

export const typeMovieAnimeSelector = (state: RootState) => state.anime.topMovieAnime

export const newReleaseAnimeSelector = (state: RootState) => state.anime.newReleaseAnime

export const pageTopAnimeSelector = (state: RootState) => state.anime.pageTopAnime

export const pageFavoriteAnimeSelector = (state: RootState) => state.anime.pageFavoriteAnime

export const pageTypeAnimeSelector = (state: RootState) => state.anime.pageTypeAnime

export const pageTopTvAnimeSelector = (state: RootState) => state.anime.pageTopTvAnime

export const pageTopMovieAnimeSelector = (state: RootState) => state.anime.pageTopMovieAnime

export const pagePopularAnimeSelector = (state: RootState) => state.anime.pagePopularAnime

export const pageAiringAnimeSelector = (state: RootState) => state.anime.pageAiringAnime

export const pageNewReleaseAnimeSelector = (state: RootState) => state.anime.pageNewReleaseAnime

export const searchAnimeSelector = (state: RootState) => state.anime.searchAnime