import React, { useState, useEffect, useCallback } from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import Icon from '@common/Icon'
import Input from '@common/Input'
import { FlatList } from 'react-native'
import { debounce } from 'lodash'
import AxiosInstance from '@helper/AxiosInstance'
import TopHitsItem from '@screens/Home/TopHit/TopHitsItem'
import { useTheme } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '@themes/fonts'
import { goBack } from '@utils/navigationRef'
import { colors } from '@themes/colors'
import LottieView from 'lottie-react-native'

const Search = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const theme = useAppSelector(themeUserSelector);
    const color = useTheme()
    const fetchSearch = useCallback(async (searchInput: string) => {
        setLoading(true)
        try {
            const response = await AxiosInstance().get(`anime?q=${searchInput}`)
            setData(response.data)
        } catch (error) {
            console.log('error', error)
        } finally {
            setLoading(false)
        }
    }, [])
    const debouncedSearch = useCallback(debounce(fetchSearch, 1000), [])
    useEffect(() => {
        debouncedSearch(search)
        return debouncedSearch.cancel
    }, [search])
    return (
        <Box
            flex={1}
            backgroundColor={color.bg}
        >
            <Box
                row={true}
                padding={10}
                marginTop={hp('4%')}
                justifySpaceAround={true}
            >
                <Btn
                    marginRight={10}
                    onPress={() => goBack()}>
                    <Icon
                        source={require('@images/home/back.png')}
                        tintColor={theme === 'light' ? color.black3 : 'white'}
                        size={24}
                    />
                </Btn>
                <Input
                    onChangeText={setSearch}
                    backgroundColor={theme === 'light' ? color.black3 : color.black3}
                    radius={wp('4%')}
                    height={hp(7)}
                    width={'70%'}
                    borderWidth={1}
                    hint={'Full name'}
                    font={fonts.MAIN}
                    hintColor={'#888888'}
                    color={theme === 'light' ? color.black : color.white}
                    iconOne={require('@images/home/search.png')}
                    tintColor={theme === 'light' ? color.black3 : color.black}
                    sizeIcon={18}
                />
                <Box
                    backgroundColor={'#e6feef'}
                    radius={wp('4%')}
                    style={{
                        justifyContent: 'center',
                        paddingHorizontal: 15
                    }}
                    height={hp(7)}
                >
                    <Icon
                        source={require('@images/home/filter.png')}
                        size={18}
                        tintColor={colors.mainColor}
                    />
                </Box>

            </Box>
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
                    style={{ marginLeft: 10 }}
                    data={data}
                    renderItem={({ item }) => (
                        <TopHitsItem
                            item={item}
                        />
                    )}
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
