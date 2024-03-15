import React, { useEffect } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Carousel from 'react-native-snap-carousel';
import Banner from './Banner';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import TopHitsAnime from './TopHit/TopHitsAnime';
import NewEpisodeRelease from './NewRelease/NewEpisodeRelease';
import Scroll from '@common/Scroll';
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import MostFavorite from './MostFavorite/MostFavorite';
import TopTVSeries from './TopTVSeries/TopTVSeries';
import TopMovie from './TopMovie/TopMovie';
import MostPopular from './MostPopular/MostPopular';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { AppDispatch } from '@redux/store/store';
import { searchAnimeAction } from '@redux/slice/animeSlice';
import {
  topAnimeSelector, favoriteAnimeSelector, typeTvAnimeSelector,
  typeMovieAnimeSelector, popularAnimeSelector, newReleaseAnimeSelector
} from '@redux/selector/animeSelector'
import HomeLoading from '@themes/Skeleton/HomeLoading';
import Box from '@common/Box';
import Img from '@common/Img';
import Btn from '@common/Btn';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Notification } from 'iconsax-react-native';
import { Dimensions } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';
import { SVG_ICON_SIZE } from '@themes/styled';

const { width } = Dimensions.get('window');
const Home = () => {
  const { t } = useTranslation()
  const dispatch: AppDispatch = useAppDispatch()
  const [fakeLoading, setFakeLoading] = React.useState(true)
  const topAnime = useAppSelector(topAnimeSelector)
  const favoriteAnime = useAppSelector(favoriteAnimeSelector)
  const typeTvAnime = useAppSelector(typeTvAnimeSelector)
  const typeMovieAnime = useAppSelector(typeMovieAnimeSelector)
  const popularAnime = useAppSelector(popularAnimeSelector)
  const newReleaseAnime = useAppSelector(newReleaseAnimeSelector)

  const formatName = (name: string) => {
    if (name.length > 21) {
      return name.slice(0, 21) + '...'
    }
    return name
  }
  const formatCategory = (category: string) => {
    if (category.length > 30) {
      return category.slice(0, 30) + '...'
    }
    return category
  }

  useEffect(() => {
    dispatch(searchAnimeAction())
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const renderItem = ({ item }: any) => (
    <Banner
      banner={item}
      formatName={formatName}
      formatCategory={formatCategory}
      t={t}
    />
  );

  if (fakeLoading) {
    return (
      <KeyBoardSafe>
        <HomeLoading />
      </KeyBoardSafe>
    )
  }

  return (
    <KeyBoardSafe>
      <Scroll
        flex={1}
        marginBottom={BOTTOM_TAB_HEIGHT}
      >
        <Carousel
          data={bannerData}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          autoplay={true}
          loop={true}
          containerCustomStyle={{
            height: hp('45%'),
          }}
        />
        <Box
          row
          absolute
          justifySpaceBetween
          width={'100%'}
          alignCenter
        >
          <Img
            source={require('@images/logo.png')}
            width={80}
            height={80}
          />
          <Box
            row
            marginRight={20}
          >
            <Btn
              onPress={() => navigate(screens.SEARCH)}
              padding={10}
            >
              <SearchNormal1 color={'white'} size={SVG_ICON_SIZE} />
            </Btn>

            <Btn
              onPress={() => navigate(screens.SEARCH)}
              marginLeft={20}
              padding={10}
            >
              <Notification color={'white'} size={SVG_ICON_SIZE} />
            </Btn>
          </Box>
        </Box>
        <TopHitsAnime
          t={t}
          banner={topAnime}>
        </TopHitsAnime>
        <NewEpisodeRelease
          t={t}
          banner={newReleaseAnime}>
        </NewEpisodeRelease>
        <MostFavorite
          t={t}
          banner={favoriteAnime}>
        </MostFavorite>
        <TopTVSeries
          t={t}
          banner={typeTvAnime}>
        </TopTVSeries>
        <TopMovie
          t={t}
          banner={typeMovieAnime}>
        </TopMovie>
        <MostPopular
          t={t}
          banner={popularAnime}>
        </MostPopular>
      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(Home)


var bannerData = [
  {
    id: 1,
    name: 'Demon Slayer: Kimetsu no Yaiba',
    category: 'Action, Adventure, Fantasy, Historical, Shounen, Supernatural',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2FbannerHome1.jpg?alt=media&token=a79982cb-6b8b-4e0f-b1d6-8572c9b0db8e',
    rating: 9.8,
  },
  {
    id: 2,
    name: 'Your Name',
    category: 'Drama, Romance, School, Supernatural',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner2.jpg?alt=media&token=9f0ef8e5-32a2-4cdf-b6b7-c46c50dd7145',
    rating: 9.5,
  },
  {
    id: 3,
    name: 'Solo Leveling',
    category: 'Action, Adventure, Fantasy, Shounen, Webtoons',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner3.jpg?alt=media&token=68e311bc-0605-48a1-8cf1-83d1d8655e5c',
    rating: 9.9,
  },
  {
    id: 4,
    name: 'Naruto Shippuden',
    category: 'Action, Adventure, Comedy, Super Power, Martial Arts, Shounen',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner4.jpg?alt=media&token=ef9d4522-7208-4848-b92f-ca8345d24775',
    rating: 9.5,
  },
  {
    id: 4,
    name: 'Baka to Test to Shoukanjuu',
    category: 'Comedy, Romance, School, Super Power',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner5.jpg?alt=media&token=28771098-df99-46f8-b2e4-9d983532dad2',
    rating: 10,
  }
]
