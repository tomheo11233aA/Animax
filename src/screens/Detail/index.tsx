import { StyleSheet, Text, View, FlatList } from 'react-native'
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
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useNavigation } from '@react-navigation/native'

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents



const Detail = () => {

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
  return (
    <Box
      flex={1}
      backgroundColor= {theme === 'dark' ? color.bg : color.bg}
      padding={24}
    >
      {/* <Txt
        fontFamily={fonts.MAIN}
        size={20}
        color={theme === 'dark' ? color.black : color.white}
      >Detail</Txt> */}
      <Box
        width={wp(100)}
        height={hp(35)}
        justifyCenter={'center'}
        alignCenter={'center'}
        backgroundColor={'red'}
        marginLeft={-24}
        marginTop={-24}
        // marginTop={-24}
      >
        <Img
          source={
            {
              uri: data[0].poster
            }
          }
          width={('100%')}
          height={('100%')}
          resizeMode='cover'
        />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Box>
  )
}

export default React.memo(Detail)

//fake data film detail
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
    episodes: [
      {
        episode: 1,
        title: 'Thám Tử Lừng Danh Conan - Tập 1',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 2,
        title: 'Thám Tử Lừng Danh Conan - Tập 2',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 3,
        title: 'Thám Tử Lừng Danh Conan - Tập 3',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 4,
        title: 'Thám Tử Lừng Danh Conan - Tập 4',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
    ]
  },
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
    episodes: [
      {
        episode: 1,
        title: 'Thám Tử Lừng Danh Conan - Tập 1',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 2,
        title: 'Thám Tử Lừng Danh Conan - Tập 2',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 3,
        title: 'Thám Tử Lừng Danh Conan - Tập 3',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 4,
        title: 'Thám Tử Lừng Danh Conan - Tập 4',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
    ]
  },
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
    episodes: [
      {
        episode: 1,
        title: 'Thám Tử Lừng Danh Conan - Tập 1',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 2,
        title: 'Thám Tử Lừng Danh Conan - Tập 2',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 3,
        title: 'Thám Tử Lừng Danh Conan - Tập 3',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 4,
        title: 'Thám Tử Lừng Danh Conan - Tập 4',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
    ]
  },
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
    episodes: [
      {
        episode: 1,
        title: 'Thám Tử Lừng Danh Conan - Tập 1',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 2,
        title: 'Thám Tử Lừng Danh Conan - Tập 2',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 3,
        title: 'Thám Tử Lừng Danh Conan - Tập 3',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 4,
        title: 'Thám Tử Lừng Danh Conan - Tập 4',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
    ]
  },
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
    episodes: [
      {
        episode: 1,
        title: 'Thám Tử Lừng Danh Conan - Tập 1',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 2,
        title: 'Thám Tử Lừng Danh Conan - Tập 2',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 3,
        title: 'Thám Tử Lừng Danh Conan - Tập 3',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
      {
        episode: 4,
        title: 'Thám Tử Lừng Danh Conan - Tập 4',
        duration: '25 phút',
        thumbnail: 'https://cdn.tgdd.vn/Files/2023/08/02/1540758/nhung-cau-noi-hay-nhat-trong-phim-tham-tu-lung-danh-conan-202308021125158172.jpg',
      },
    ]
  }
]

const styles = StyleSheet.create({})