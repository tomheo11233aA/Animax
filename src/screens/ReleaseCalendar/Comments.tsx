import { StyleSheet, Text, View, FlatList, TextInput, ScrollView } from 'react-native'
import React,
{
    useState,
    useEffect,
    useRef,
}
    from 'react'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CommonComponents from '@common/CommonComponents';
import { useTranslation } from 'react-i18next'
import { themeUserSelector } from '@redux/selector/appSelector'
import { useAppSelector } from '@hooks/redux'
import { useTheme } from '@hooks/redux'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import { useAppDispatch } from '@hooks/redux';
import { AppDispatch } from '@redux/store/store';
import { colors } from '@themes/colors'
import { set } from 'lodash'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents

const toggleLike = (id: number, isLike: number[], setIsLike: (isLike: number[]) => void) => {
    if (isLike.includes(id)) {
        setIsLike(isLike.filter(item => item !== id))
    } else {
        setIsLike([...isLike, id])
    }
}

const Comments = () => {

    const [user, setUser] = useState({
        id: 1,
        name: 'Nguyễn Văn A',
        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
    })

    const navigation = useNavigation();

    useEffect(() => { // ẩn bottom tab bar khi vào màn hình detail (render component)
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: "none"
            }
        });
        return () => navigation.getParent()?.setOptions({ // hiện lại bottom tab bar trước khi unmount
            tabBarStyle: undefined
        });
    }, [navigation]);


    const { t } = useTranslation()
    const theme = useAppSelector(themeUserSelector)
    const color = useTheme()
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    // lọc danh sách comment mà user đã like vào mảng isLike
    const [isLike, setIsLike] = useState<number[]>([])

    useEffect(() => {
        const isLike = data[0].comments
            .filter(item => item.likes.some(like => like.id === user.id)).map(item => item.id)
        setIsLike(isLike)
    }, [])


    return (
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <Box
                flex={1}
                backgroundColor={color.bg}
                padding={24}
                paddingTop={24 + 24}
                paddingBottom={48}
            >
                <Box
                    row={true}
                    height={(30)}
                // backgroundColor={'red'}
                >
                    <Btn
                        onPress={() => goBack()}
                        height={(30)}
                    >
                        <Icon
                            size={20}
                            source={require('@images/back.png')}
                        />
                    </Btn>
                    <Box
                        marginLeft={16}
                        justifySpaceBetween={'true'}
                        row={true}
                        flex={1}
                        height={(30)}
                        alignCenter={'center'}
                    >
                        <Txt
                            color={color.white}
                            size={20}
                            fontWeight={'bold'}
                        >
                            {data[0].comments.length} {t('Comments')}
                        </Txt>
                        <Btn>
                            <Img
                                source={require('@images/more-information.png')}
                                width={25}
                                height={25}
                                tintColor={color.white}
                            ></Img>
                        </Btn>
                    </Box>
                </Box>
                <Box
                    marginTop={16}
                    row={true}
                    alignCenter={'center'}
                    height={height - 30 - 48}
                >
                    <FlatList
                        data={data[0].comments}
                        renderItem={({ item }) => (
                            <Box
                                marginBottom={24}
                            // backgroundColor={'red'}
                            >
                                <Box
                                    row={true}
                                    marginBottom={16}
                                >
                                    <Img
                                        source={{ uri: item.user.avatar }}
                                        width={width / 100 * 10}
                                        height={width / 100 * 10}
                                        radius={width / 100 * 5}
                                    />
                                    <Box
                                        marginLeft={16}
                                        justifySpaceBetween={'true'}
                                        row={true}
                                        flex={1}
                                        height={width / 100 * 10}
                                        alignCenter={'center'}
                                    >
                                        <Txt
                                            color={color.white}
                                            size={14}
                                            fontWeight={'bold'}
                                        >
                                            {item.user.name}
                                        </Txt>
                                        <Btn>
                                            <Img
                                                source={require('@images/more-information.png')}
                                                width={20}
                                                height={20}
                                                tintColor={color.white}
                                            ></Img>
                                        </Btn>
                                    </Box>
                                </Box>
                                <Box
                                    marginBottom={16}
                                >
                                    <Txt
                                        color={color.white}
                                        size={13}
                                    >
                                        {item.content}
                                    </Txt>
                                </Box>
                                <Box
                                    row={true}
                                >
                                    <Btn
                                        onPress={() => toggleLike(item.id, isLike, setIsLike)}
                                        marginRight={8}
                                    >
                                        <Img
                                            source={
                                                isLike.includes(item.id)
                                                    ? require('@images/detail/love.png')
                                                    : require('@images/detail/love2.png')}
                                            width={20}
                                            height={20}
                                            tintColor={
                                                isLike.includes(item.id)
                                                    ? color.mainColor
                                                    : color.white
                                            }
                                        ></Img>
                                    </Btn>
                                    <Txt
                                        color={color.white}
                                        size={12}
                                        width={width / 100 * 20}
                                        marginRight={16}
                                        lineHeight={20}
                                    // fontFamily={fonts.MAIN}
                                    >
                                        {item.likes.length}
                                    </Txt>
                                    <Txt
                                        color={color.white}
                                        size={12}
                                        lineHeight={20}
                                    >
                                        {item.date}
                                    </Txt>
                                </Box>
                            </Box>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={
                            <Box
                                marginBottom={height / 100 * 12}
                            />
                        }
                    />
                </Box>

                <Box
                    absolute={true}
                    bottom={48}
                    left={-1}
                    right={-1}
                    height={height / 100 * 12}
                    borderTopLeftRadius={width / 100 * 5}
                    borderTopRightRadius={width / 100 * 5}
                    borderBottomWidth={0}
                    borderTopWidth={1}
                    borderLeftWidth={1}
                    borderRightWidth={1}
                    borderColor={'#35383F'}
                    row={true}
                    backgroundColor={color.bg}
                    paddingTop={24}
                    paddingHorizontal={23}
                >
                    <Box
                        flex={1}
                        justifySpaceBetween={'true'}
                        row={true}
                    // backgroundColor={'red'}
                    >
                        <Input
                            hint={t('Write a comment...')}
                            hintColor={'#646669'}
                            width={width - 120}
                            height={height / 100 * 7}
                            backgroundColor={'#35383F'}
                            radius={width / 100 * 5}
                            padding={8}
                            paddingRight={40}
                            color={color.white}
                            fontSize={14}
                            fontWeight={'bold'}
                            font={fonts.MAIN}
                        />
                        
                        <Btn
                            absolute={true}
                            right={width - 320}
                            top={height / 100 * 7 / 2 - 10}
                        >
                            <Icon
                                size={20}
                                source={require('@images/detail/send.png')}
                            />
                        </Btn>
                        <Btn
                            width={height / 100 * 7}
                            height={height / 100 * 7}
                            radius={50}
                            backgroundColor={color.mainColor}
                        >
                            <Img
                                source={require('@images/more-information.png')}
                                width={20}
                                height={20}
                                tintColor={color.white}
                            ></Img>
                        </Btn>
                    </Box>
                </Box>
            </Box>
        </KeyboardAvoidingView>
        

    )
}

export default React.memo(Comments)

const data = [
    {
        id: 1,
        title: 'Detective Conan - Thám Tử Lừng Danh Conan',
        poster: 'https://shizukatsukiko.files.wordpress.com/2020/08/detective-conan-anime-hd-wallpaper-preview.jpg',
        description: 'Anime Detective Conan (Thám Tử Lừng Danh Conan) xoay quanh câu chuyện về cậu thám tử thiếu niên Shinichi đang trong hình hài của cậu nhóc Conan 6 tuổi. Để có thể trở về được hình dáng cũ thì Conan cần phải được nắm được những bí mật quan trọng của tổ chức Áo Đen – Một tổ chức tội phạm toàn cầu. Trên hành trình điều tra về tổ chức áo đen Conan đã giúp cảnh sát giải quyết nhiều vụ án nguy hiểm và nan giải.',
        rating: 9.5,
        year: '1996',
        ageRating: '13+',
        country: 'Japan',
        hasSub: true, // phụ đề
        hasDub: true, // lồng tiếng/thuyết minh
        comments:
            [
                {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Nguyễn Văn A',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 1, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                    ]

                },
                {
                    id: 2,
                    user: {
                        id: 2,
                        name: 'Nguyễn Văn B',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 3,
                    user: {
                        id: 3,
                        name: 'Nguyễn Văn C',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 1, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 4,
                    user: {
                        id: 4,
                        name: 'Nguyễn Văn D',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 5,
                    user: {
                        id: 5,
                        name: 'Nguyễn Văn E',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 6,
                    user: {
                        id: 5,
                        name: 'Nguyễn Văn E',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 7,
                    user: {
                        id: 5,
                        name: 'Nguyễn Văn E',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 8,
                    user: {
                        id: 5,
                        name: 'Nguyễn Văn E',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
                {
                    id: 9,
                    user: {
                        id: 5,
                        name: 'Nguyễn Văn cuoi',
                        avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
                    },
                    content: 'Phim hay quá',
                    date: '2021-08-20T09:00:00.000Z',
                    likes: [
                        { id: 20, name: 'Nguyễn Văn A' },
                        { id: 21, name: 'Nguyễn Văn B' },
                        { id: 22, name: 'Nguyễn Văn C' },
                        { id: 23, name: 'Nguyễn Văn D' },
                        { id: 24, name: 'Nguyễn Văn E' },
                        { id: 25, name: 'Nguyễn Văn F' },
                    ]
                },
            ],
        genres: [
            'Action',
            'Adventure',
            'Comedy',
            'Mystery',
            'Police',
            'Shounen'
        ],
        episodes: [
            {
                episode: 1,
                title: 'Thám Tử Lừng Danh Conan - Tập 1',
                duration: '25',
                thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
            },
            {
                episode: 2,
                title: 'Thám Tử Lừng Danh Conan - Tập 2',
                duration: '25',
                thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
            },
            {
                episode: 3,
                title: 'Thám Tử Lừng Danh Conan - Tập 3',
                duration: '25',
                thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
            },
            {
                episode: 4,
                title: 'Thám Tử Lừng Danh Conan - Tập 4',
                duration: '25',
                thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
            },
        ]
    },
]

const styles = StyleSheet.create({})