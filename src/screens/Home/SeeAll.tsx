import { FlatList, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { fetchTopAnime, fetchNewReleaseAnime } from '@redux/slice/animeSlice'
import { topAnimeSelector, newReleaseAnimeSelector } from '@redux/selector/animeSelector'
import { AppDispatch } from '@redux/store/store'
import Box from '@common/Box'
import Txt from '@common/Txt'
import TopHitsItem from './TopHit/TopHitsItem'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { useHideNavigation } from '@themes/hideNavigation'

type RootStackParamList = {
  SeeAll: { type: string }
}

type SeeAllScreenRouteProp = RouteProp<RootStackParamList, 'SeeAll'>;

interface Props {
  route: SeeAllScreenRouteProp
}

const { width } = Dimensions.get('window')

const SeeAll: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation()
  const dispatch: AppDispatch = useAppDispatch()
  const topAnime = useAppSelector(topAnimeSelector)
  const newReleaseAnime = useAppSelector(newReleaseAnimeSelector)
  useHideNavigation()
  useEffect(() => {
    if (route.params.type === 'topHits') {
      dispatch(fetchTopAnime(1))
    } else if (route.params.type === 'newEpisode') {
      dispatch(fetchNewReleaseAnime());
    }
  }, [route.params.type])

  const { numColumns } = React.useMemo(() => {
    let numColumns = Math.floor(width / 150)
    console.log(numColumns)
    return { numColumns }
  }, [width])

  return (
    <Box>
      {route.params.type === 'topHits' && (
        <FlatList
          style={{ marginLeft: 10, marginVertical: 10 }}
          data={topAnime}
          renderItem={({ item }) => (
            <TopHitsItem
              item={item}
            />
          )}
          keyExtractor={(item, index) => item.mal_id.toString()}
          showsHorizontalScrollIndicator={false}
          numColumns={numColumns}
        />
      )}
      {route.params.type === 'newEpisode' && (
        <FlatList
          style={{ marginLeft: 10, marginVertical: 10 }}
          data={newReleaseAnime}
          renderItem={({ item }) => (
            <TopHitsItem
              item={item}
            />
          )}
          keyExtractor={(item, index) => item.mal_id.toString()}
          showsHorizontalScrollIndicator={false}
          numColumns={numColumns}
        />
      )}
    </Box>
  )
}

export default React.memo(SeeAll)
