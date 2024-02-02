import { FlatList } from 'react-native'
import React, { useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { fetchTopAnime, fetchFavoriteAnime, fetchTopTvAnime, fetchTopMovieAnime, fetchPopularAnime, fetchNewReleaseAnime } from '@redux/slice/animeSlice'
import {
  topAnimeSelector, favoriteAnimeSelector, typeTvAnimeSelector,
  typeMovieAnimeSelector, popularAnimeSelector, newReleaseAnimeSelector, pageTopAnimeSelector,
  pageFavoriteAnimeSelector, pageTopTvAnimeSelector, pageTopMovieAnimeSelector, pagePopularAnimeSelector, pageNewReleaseAnimeSelector
} from '@redux/selector/animeSelector'
import { AppDispatch } from '@redux/store/store'
import Box from '@common/Box'
import { useHideNavigation } from '@themes/hideNavigation'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { formatRoute } from '@utils/formatRoute'
import AnimeItem from './AnimeItem'
import useFormatName from '@utils/formatName'
import useFormatCategory from '@utils/formatCategory'
import { ActivityIndicator } from 'react-native'
type RootStackParamList = {
  SeeAll: { type: string }
}

type SeeAllScreenRouteProp = RouteProp<RootStackParamList, 'SeeAll'>;

const MAX_PAGE = 20
interface Props {
  route: SeeAllScreenRouteProp
}

const SeeAll: React.FC<Props> = ({ route }) => {
  const { t } = useTranslation()
  useHideNavigation()
  const theme = useTheme()
  const [loading, setLoading] = useState(false);
  const dispatch: AppDispatch = useAppDispatch()
  const formatName = useFormatName();
  const formatCategory = useFormatCategory();

  const animeSelectors: any = {
    topHits: useAppSelector(topAnimeSelector),
    newEpisode: useAppSelector(newReleaseAnimeSelector),
    favorite: useAppSelector(favoriteAnimeSelector),
    tvSeries: useAppSelector(typeTvAnimeSelector),
    movie: useAppSelector(typeMovieAnimeSelector),
    popular: useAppSelector(popularAnimeSelector),
    pageTopAnime: useAppSelector(pageTopAnimeSelector),
    pageFavoriteAnime: useAppSelector(pageFavoriteAnimeSelector),
    pageTopTvAnime: useAppSelector(pageTopTvAnimeSelector),
    pageTopMovieAnime: useAppSelector(pageTopMovieAnimeSelector),
    pagePopularAnime: useAppSelector(pagePopularAnimeSelector),
    pageNewReleaseAnime: useAppSelector(pageNewReleaseAnimeSelector)
  }
  const myFormatRoute = formatRoute(route.params.type)

  const renderAnimeList = (animeType: string) => (
    <FlatList
      contentContainerStyle={{
        paddingBottom: hp(15),
      }}
      data={animeSelectors[animeType]}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.3}
      ListFooterComponent={() => loading && <ActivityIndicator size="large" />}
      renderItem={({ item }) => (
        <AnimeItem
          item={item}
          theme={theme}
          t={t}
          formatName={formatName}
          formatCategory={formatCategory}
        />
      )}
    />
  )

  const loadMoreData = async () => {
    if (
      !loading && animeSelectors.pageTopAnime < MAX_PAGE
      && animeSelectors.pageFavoriteAnime < MAX_PAGE
      && animeSelectors.pageTopTvAnime < MAX_PAGE
      && animeSelectors.pageTopMovieAnime < MAX_PAGE
      && animeSelectors.pagePopularAnime < MAX_PAGE
      && animeSelectors.pageNewReleaseAnime < MAX_PAGE) {
      setLoading(true)
      switch (route.params.type) {
        case 'topHits':
          await dispatch(fetchTopAnime(animeSelectors.pageTopAnime))
          break
        case 'newEpisode':
          await dispatch(fetchNewReleaseAnime(animeSelectors.pageNewReleaseAnime))
          break
        case 'favorite':
          await dispatch(fetchFavoriteAnime(animeSelectors.pageFavoriteAnime))
          break
        case 'tvSeries':
          await dispatch(fetchTopTvAnime(animeSelectors.pageTopTvAnime))
          break
        case 'movie':
          await dispatch(fetchTopMovieAnime(animeSelectors.pageTopMovieAnime))
          break
        case 'popular':
          await dispatch(fetchPopularAnime(animeSelectors.pagePopularAnime))
          break
      }
      setLoading(false)
    }
  }

  return (
    <Box
      backgroundColor={theme.bg}
    >
      <Header t={t} title={myFormatRoute} />
      {renderAnimeList(route.params.type)}
    </Box>
  )
}

export default React.memo(SeeAll)

