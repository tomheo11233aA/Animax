import { FlatList, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { fetchTopAnime, fetchNewReleaseAnime } from '@redux/slice/animeSlice'
import { topAnimeSelector, newReleaseAnimeSelector } from '@redux/selector/animeSelector'
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

type RootStackParamList = {
  SeeAll: { type: string }
}

type SeeAllScreenRouteProp = RouteProp<RootStackParamList, 'SeeAll'>;

interface Props {
  route: SeeAllScreenRouteProp
}

const { width } = Dimensions.get('window')

const SeeAll: React.FC<Props> = ({ route }) => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  const theme = useTheme()
  const topAnime = useAppSelector(topAnimeSelector)
  const newReleaseAnime = useAppSelector(newReleaseAnimeSelector)
  const myFormatRoute = formatRoute(route.params.type)
  useHideNavigation()
  const formatName = useFormatName();
  const formatCategory = useFormatCategory();

  useEffect(() => {
    if (route.params.type === 'topHits') {
      dispatch(fetchTopAnime(1))
    } else if (route.params.type === 'newEpisode') {
      dispatch(fetchNewReleaseAnime());
    }
  }, [route.params.type])

  return (
    <Box
      backgroundColor={theme.bg}
    >
      <Header t={t} title={myFormatRoute} />
      {route.params.type === 'topHits' && (
        <FlatList
          contentContainerStyle={{
            paddingBottom: hp(15),
          }}
          data={topAnime}
          keyExtractor={(item, index) => index.toString()}
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
      )}
    </Box>
  )
}

export default React.memo(SeeAll)

