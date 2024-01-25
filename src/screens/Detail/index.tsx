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
import TextTicker from 'react-native-text-ticker';

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
      backgroundColor={theme === 'dark' ? color.bg : color.bg}
      padding={24}
    >
      <Box
        width={wp(100)}
        height={hp(35)}
        justifyCenter={'center'}
        alignCenter={'center'}
        backgroundColor={'red'}
        marginLeft={-24}
        marginTop={-24}
        marginBottom={24}
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
      <Box
        row={true}
        justifySpaceBetween={'true'}
      >
        <TextTicker
          style={{
            fontFamily: fonts.MAINB,
            fontSize: 24,
            color: theme === 'dark' ? color.black : color.white,
            width: wp(100) - 48 - 96,
          }}
          duration={12000} // Độ dài thời gian để chữ chạy qua màn hình (milliseconds)
          loop // Cho phép chạy vô hạn

        >
          {data[0].title}
        </TextTicker>
        <Box
          row={true}
          marginBottom={24}
        >
          <Btn
            marginRight={16}
          >
            <Img
              source={require('@images/detail/bookmark.png')}
              width={24}
              height={24}
              tintColor={color.white}
            ></Img>
          </Btn>
          <Btn>
            <Img
              source={require('@images/detail/send.png')}
              width={24}
              height={24}
              tintColor={color.white}
            ></Img>
          </Btn>
        </Box>
      </Box>
      <Box
        marginBottom={24}
        row={true}
        alignCenter={'center'}
      >
        <Img
          source={require('@images/detail/half-star.png')}
          width={20}
          height={20}
          tintColor={color.mainColor}
          marginRight={8}
        ></Img>
        <Txt
          color={color.mainColor}
          size={14}
          fontFamily={fonts.MAIN}
          marginRight={8}
        >
          {data[0].rating}
        </Txt>
        <Img
          source={require('@images/detail/next.png')}
          width={20}
          height={20}
          tintColor={color.mainColor}
          marginRight={16}
        ></Img>
        <Txt
          color={color.white}
          size={14}
          fontFamily={fonts.MAIN}
          marginRight={16}
        >
          {data[0].year}
        </Txt>

        <Btn
          alignCenter={true}
          // width={wp(23)}
          height={wp(8)}
          backgroundColor={color.bg}
          radius={7}
          borderWidth={1}
          borderColor={color.mainColor}
          paddingHorizontal={8}
          marginRight={16}
          disabled={true}
          onPress={() => { }}
        >
          <Txt
            color={color.mainColor}
            size={12}
            fontFamily={fonts.MAIN}
          >
            {data[0].ageRating}
          </Txt>
        </Btn>
        <Btn
          alignCenter={true}
          // width={wp(23)}
          height={wp(8)}
          backgroundColor={color.bg}
          radius={7}
          borderWidth={1}
          borderColor={color.mainColor}
          paddingHorizontal={8}
          marginRight={16}
          disabled={true}
          onPress={() => { }}
        >
          <Txt
            color={color.mainColor}
            size={12}
            fontFamily={fonts.MAIN}
          >
            {data[0].country}
          </Txt>
        </Btn>
        {
          data[0].hasSub && (
            <Btn
              alignCenter={true}
              // width={wp(23)}
              height={wp(8)}
              backgroundColor={color.bg}
              radius={7}
              borderWidth={1}
              borderColor={color.mainColor}
              paddingHorizontal={8}
              marginRight={16}
              disabled={true}
              onPress={() => { }}
            >
              <Txt
                color={color.mainColor}
                size={12}
                fontFamily={fonts.MAIN}
              >
                {t('Sub')}
              </Txt>
            </Btn>
          )
        }
        {
          data[0].hasDub && (
            <Btn
              alignCenter={true}
              // width={wp(23)}
              height={wp(8)}
              backgroundColor={color.bg}
              radius={7}
              borderWidth={1}
              borderColor={color.mainColor}
              paddingHorizontal={8}
              marginRight={16}
              disabled={true}
              onPress={() => { }}
            >
              <Txt
                color={color.mainColor}
                size={12}
                fontFamily={fonts.MAIN}
              >
                {t('Dub')}
              </Txt>
            </Btn>
          )
        }
      </Box>
      <Box
        row={true}
        marginBottom={24}
        alignCenter={'center'}
        justifySpaceBetween={'true'}
      >
        <Btn
          row={true}
          alignCenter={true}
          width={wp(43)}
          height={wp(11)}
          backgroundColor={color.mainColor}
          radius={20}
          borderWidth={2}
          borderColor={color.mainColor}
          paddingHorizontal={8}
          onPress={() => { }}
        >
          <Img
            source={require('@images/detail/play.png')}
            width={24}
            height={24}
            tintColor={color.white}
            marginRight={8}
          ></Img>
          <Txt
            color={color.white}
            size={18}
            fontFamily={fonts.MAIN}
          >
            {t('Play')}
          </Txt>
        </Btn>
        <Btn
          row={true}
          alignCenter={true}
          width={wp(43)}
          height={wp(11)}
          backgroundColor={color.bg}
          radius={20}
          borderWidth={2}
          borderColor={color.mainColor}
          paddingHorizontal={8}
          onPress={() => { }}
        >
          <Img
            source={require('@images/detail/download.png')}
            width={24}
            height={24}
            tintColor={color.mainColor}
            marginRight={8}
          ></Img>
          <Txt
            color={color.mainColor}
            size={18}
            fontFamily={fonts.MAIN}
          >
            {t('Download')}
          </Txt>
        </Btn>
      </Box>
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