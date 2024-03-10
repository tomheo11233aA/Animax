import React, { useState, useEffect, useCallback } from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { FlatList, Keyboard, Dimensions } from 'react-native'
import { debounce } from 'lodash'
import AxiosInstance from '@helper/AxiosInstance'
import { useTheme } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import { AppDispatch } from '@redux/store/store'
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { searchAnimeAction } from '@redux/slice/animeSlice'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '@themes/fonts'
import LottieView from 'lottie-react-native'
import useFormatName from '@utils/formatName'
import useFormatCategory from '@utils/formatCategory'
import AnimeItem from '@screens/Home/AnimeItem'
import { useTranslation } from 'react-i18next'
import { searchAnimeSelector } from '@redux/selector/animeSelector'
import { useHideNavigation } from '@themes/hideNavigation'
import Header from './Header'
import SearchItem from './SearchItem'

const { width, height } = Dimensions.get('window')
const numColumns = width > 600 ? 3 : 2
const Search = () => {
    const { t } = useTranslation()
    const [search, setSearch] = useState('')
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const theme = useAppSelector(themeUserSelector);
    // useHideNavigation()
    const color = useTheme()
    const formatName = useFormatName();
    const formatCategory = useFormatCategory();
    const searchAnime = useAppSelector(searchAnimeSelector)
    const fetchSearch = useCallback(async (searchInput: string) => {
        setLoading(true)
        try {
            const response = await AxiosInstance().get(`anime?q=${searchInput}`)
            setData(response.data)
        } catch (error) {
            console.log('error', error)
        } finally {
            setLoading(false)
            Keyboard.dismiss()
        }
    }, [])
    const debouncedSearch = useCallback(debounce(fetchSearch, 500), [])
    useEffect(() => {
        if (search) {
            debouncedSearch(search)
        } else {
            setData(searchAnime)
        }
        return debouncedSearch.cancel
    }, [search])
    const dispatch: AppDispatch = useAppDispatch()
    const checkSearch = () => {
        if (searchAnime.length === 0) {
            dispatch(searchAnimeAction())
            console.log('searchAnime', searchAnime)
        }
    }
    useEffect(() => {
        checkSearch()
    }, [])
    return (
        <Box
            flex={1}
            backgroundColor={color.bg}
        >
            <Header
                setSearch={setSearch}
                theme={theme}
                color={color}
            />
            {loading ? (
                <Box
                    absolute={true}
                    backgroundColor='rgba(0,0,0,0.5)'
                    flex={1}
                    width='100%'
                    height='100%'
                    zIndex={999}
                    justifyCenter
                    alignCenter
                >
                    <LottieView
                        source={require('@lotties/loading.json')}
                        autoPlay
                        loop
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />
                    <Txt
                        size={16}
                        color={color.white}
                        fontFamily={fonts.MAIN}
                    >Loading...</Txt>
                </Box>

            ) : null}
            {data.length > 0 ? (
                <FlatList
                    contentContainerStyle={{ paddingBottom: hp('5%') }}
                    data={data}
                    renderItem={({ item }) => (
                        <SearchItem
                            item={item}
                        />
                    )}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <Box
                    justifyCenter
                    alignCenter
                    flex={1}
                >
                    <Txt
                        size={16}
                        color={color.black}
                        fontFamily={fonts.MAIN}
                    >No data</Txt>
                </Box>
            )}
        </Box>
    )
}

export default React.memo(Search)
