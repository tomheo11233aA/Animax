import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { fetchTopAnime, fetchFavoriteAnime, fetchTopTvAnime, fetchTopMovieAnime, fetchPopularAnime, fetchNewReleaseAnime } from '@redux/slice/animeSlice'
import {
  topAnimeSelector, favoriteAnimeSelector, typeTvAnimeSelector,
  typeMovieAnimeSelector, popularAnimeSelector, newReleaseAnimeSelector
} from '@redux/selector/animeSelector'
import { AppDispatch } from '@redux/store/store'
import Box from '@common/Box'
import { useHideNavigation } from '@themes/hideNavigation'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { formatRoute } from '@utils/formatRoute'
import AnimeItem from './AnimeItem'
import useFormatName from '@utils/formatName'
import useFormatCategory from '@utils/formatCategory'
import { ActivityIndicator } from 'react-native'

type RootStackParamList = {
  SeeAll: { type: string }
}

type SeeAllScreenRouteProp = RouteProp<RootStackParamList, 'SeeAll'>;

interface Props {
  route: SeeAllScreenRouteProp
}

const SeeAll: React.FC<Props> = ({ route }) => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  const theme = useTheme()
  const [page, setPage] = React.useState(1)
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const animeSelectors: any = {
    topHits: useAppSelector(topAnimeSelector),
    newEpisode: useAppSelector(newReleaseAnimeSelector),
    favorite: useAppSelector(favoriteAnimeSelector),
    tvSeries: useAppSelector(typeTvAnimeSelector),
    movie: useAppSelector(typeMovieAnimeSelector),
    popular: useAppSelector(popularAnimeSelector)
  }
  const myFormatRoute = formatRoute(route.params.type)
  useHideNavigation()
  const formatName = useFormatName();
  const formatCategory = useFormatCategory();
  const renderAnimeList = (animeType: string) => (
    <FlatList
      contentContainerStyle={{
        paddingBottom: hp(15),
      }}
      data={animeSelectors[animeType]}
      keyExtractor={(item, index) => item.mal_id.toString()}
      // onEndReached={loadMoreData}
      onEndReachedThreshold={0.3}
      ListFooterComponent={() => loading && hasMore && <ActivityIndicator size="large" />}
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
    if (!loading && hasMore) {
      setLoading(true);
      const nextPage = page + 1;
      setPage(nextPage);
      if (route.params.type === 'topHits') {
        await dispatch(fetchTopAnime(nextPage));
      }
      setLoading(false);
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

