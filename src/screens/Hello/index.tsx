import React, { useEffect } from 'react'
import { localStorage } from '@utils/localStorage'
import Box from '@common/Box'
import Icon from '@common/Icon'
import { keys } from '@contants/keys'
import { screens } from '@contants/screens'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { useNavigation } from '@react-navigation/native'
import { setLanguage } from '@redux/slice/userSlice'
import { colors } from '@themes/colors'
import { convertLanguage } from '@utils/convert'
import { width } from '@utils/responsive'
import { useTranslation } from 'react-i18next'
import { setTheme } from '@redux/slice/userSlice'
import LottieView from 'lottie-react-native'
import { AppDispatch } from '@redux/store/store'
import {
  fetchTopAnime, fetchFavoriteAnime, fetchTopTvAnime,
  fetchTopMovieAnime, fetchPopularAnime, fetchNewReleaseAnime
} from '@redux/slice/animeSlice'
import LogoLight from '../../assets/images/svg/aniflix-light.svg'
import LogoDark from '../../assets/images/svg/aniflix-dark.svg'
import { languageUserSelector, themeUserSelector } from '@redux/selector/appSelector'
import { fetchBanks } from '@redux/slice/bankSlice'
import { bankSelector } from '@redux/selector/bankSelector'

const Hello = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { i18n } = useTranslation()
  const navigation = useNavigation<any>()
  const theme = useAppSelector(themeUserSelector)
  const language = useAppSelector(languageUserSelector)
  const banks = useAppSelector(bankSelector)
  useEffect(() => {
    const fetchAnime = async () => {
      const topAnimePromise = dispatch(fetchTopAnime());
      const favoriteAnimePromise = dispatch(fetchFavoriteAnime());
      const topTvAnimePromise = dispatch(fetchTopTvAnime());
      await Promise.all([topAnimePromise, favoriteAnimePromise, topTvAnimePromise]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const topMovieAnimePromise = dispatch(fetchTopMovieAnime());
      const popularAnimePromise = dispatch(fetchPopularAnime());
      await Promise.all([topMovieAnimePromise, popularAnimePromise]);
      await new Promise(resolve => setTimeout(resolve, 500));
      const newReleaseAnimePromise = dispatch(fetchNewReleaseAnime());
      await Promise.all([newReleaseAnimePromise]);
    };
    fetchAnime().then(() => {
      const timeOut = setTimeout(async () => {
        const lng = language.value
        i18n.changeLanguage(lng)
        const lngObj = convertLanguage(lng)
        dispatch(setLanguage(lngObj))
        const appTheme = theme || 'light'
        dispatch(setTheme(appTheme));
        navigation.replace(screens.MAIN)
      }, 250)

      return () => clearTimeout(timeOut)
    })
  }, [])

  useEffect(() => {
    if (banks.length === 0) {
      console.log('fetch banks')
      dispatch(fetchBanks())
    }
  }, [])

  useEffect(() => {
    const lng = localStorage.getString(keys.LANGUAGE) || 'en'
    i18n.changeLanguage(lng)
    const lngObj = convertLanguage(lng)
    dispatch(setLanguage(lngObj))
  }, [])

  return (
    <Box
      flex={1}
      alignCenter
      justifyCenter
      backgroundColor={'#11181e'}
    >
      {theme === 'light' ? <LogoDark width={width * 30 / 60} height={width * 30 / 60} /> : <LogoLight width={width * 30 / 60} height={width * 30 / 60} />}

      <LottieView
        source={require('@lotties/loading.json')}
        autoPlay
        loop
        style={{
          width: width * 40 / 100,
          height: width * 40 / 100,
        }}
      />
    </Box>
  )
}

export default Hello
