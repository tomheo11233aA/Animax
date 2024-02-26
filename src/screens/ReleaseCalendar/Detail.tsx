import {
  StyleSheet, Text, View, FlatList,
  ScrollView, Modal,
} from 'react-native'
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
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import { useAppDispatch, useAppSelector, useTheme } from '@hooks/redux';
import {
  topAnimeSelector, favoriteAnimeSelector, typeTvAnimeSelector, typeMovieAnimeSelector,
  popularAnimeSelector, newReleaseAnimeSelector
} from '@redux/selector/animeSelector'
import { AppDispatch } from '@redux/store/store';
import { colors } from '@themes/colors'
import { set } from 'lodash'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'
import { Image } from 'react-native-reanimated/lib/typescript/Animated'
import { useNavigation } from '@react-navigation/native'
import TextTicker from 'react-native-text-ticker';
import ReadMore from 'react-native-read-more-text';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TopHitsItem from '../Home/TopHit/TopHitsItem';

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents

const toggleLike = (id: number, isLike: number[], setIsLike: (isLike: number[]) => void) => {
  if (isLike.includes(id)) {
    setIsLike(isLike.filter(item => item !== id))
  } else {
    setIsLike([...isLike, id])
  }
}



const Detail = () => {

  const [user, setUser] = useState({
    id: 1,
    name: 'Nguyễn Văn A',
    avatar: 'https://play-lh.googleusercontent.com/_KdqU1n8c9f5Wts_vWj1ObIIrfhFs3VNLLMRf_dtUB5nJ_bjND2E1Cmyys4C078ZVA',
  })

  const navigation = useNavigation();

  useEffect(() => { // ẩn bottom tab bar khi vào màn hình detail (render component)
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      }

    });
    return () => navigation.getParent()?.setOptions({ // hiện lại bottom tab bar trước khi unmount
      tabBarStyle: undefined
    });
  }, [navigation]);

  const { t } = useTranslation()
  const theme = useAppSelector(themeUserSelector)
  const color = useTheme()

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: t('More Like This') },
    { key: 'second', title: t('Comments') + ' (' + data[0].comments.length + ')' },
  ]);

  const topAnime = useAppSelector(topAnimeSelector) // lấy danh sách top anime từ redux
  //lấy 6 phần tử ngẫu nhiên trong mảng data
  // const dataRandom = data.sort(() => Math.random() - Math.random()).slice(0, 6)

  // lọc danh sách comment mà user đã like vào mảng isLike
  const [isLike, setIsLike] = useState<number[]>([])

  useEffect(() => {
    const isLike = data[0].comments
      .filter(item => item.likes.some(like => like.id === user.id)).map(item => item.id)
    setIsLike(isLike)
  }, [])

  // lấy comment nhiều like nhất
  const commentLike = data[0].comments.sort((a, b) => b.likes.length - a.likes.length)[0]
  const checkLike = isLike.includes(commentLike.id)

  const FirstRoute = () => (
    <Box
      // backgroundColor={'red'}
      width={wp(100) - 48}
      flex={1}
    >
      <FlatList
        data={topAnime}
        renderItem={({ item }) => (
          <TopHitsItem
            item={item}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<Box width={20} />}
      />
    </Box>

  );
  const SecondRoute = () => (
    <Box
      // backgroundColor={'red'}
      width={wp(100) - 48}
      flex={1}
      height={(500)}
    >
      <Box
        row={true}
        marginBottom={24}
        marginTop={24}
        // backgroundColor={'yellow'}
        justifySpaceBetween={'true'}
      >
        <Txt
          color={color.white}
          size={16}
          fontWeight={'bold'}
        >
          {data[0].comments.length}{t(' Comments')}
        </Txt>
        <Btn>
          <Txt
            color={color.mainColor}
            size={12}
          >
            {t('See all')}
          </Txt>
        </Btn>
      </Box>
      {/* item */}
      <Box
        marginBottom={24}
      // backgroundColor={'red'}
      >
        <Box
          row={true}
          marginBottom={16}
        >
          <Img
            source={{ uri: commentLike.user.avatar }}
            width={wp(10)}
            height={wp(10)}
            radius={wp(5)}
          />
          <Box
            marginLeft={16}
            justifySpaceBetween={'true'}
            row={true}
            flex={1}
            height={wp(10)}
            alignCenter={'center'}
          >
            <Txt
              color={color.white}
              size={14}
              fontWeight={'bold'}
            >
              {commentLike.user.name}
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
            {commentLike.content}
          </Txt>
        </Box>
        <Box
          row={true}
        >
          <Btn
            onPress={() => toggleLike(commentLike.id, isLike, setIsLike)}
            marginRight={8}
          >
            <Img
              source={
                checkLike
                  ? require('@images/detail/love.png')
                  : require('@images/detail/love2.png')}
              width={20}
              height={20}
              tintColor={
                checkLike
                  ? color.mainColor
                  : color.white
              }
            ></Img>
          </Btn>
          <Txt
            color={color.white}
            size={12}
            width={wp(20)}
            marginRight={16}
            lineHeight={20}
          // fontFamily={fonts.MAIN}
          >
            {commentLike.likes.length}
          </Txt>
          <Txt
            color={color.white}
            size={12}
            lineHeight={20}
          >
            {commentLike.date}
          </Txt>
        </Box>
      </Box>
    </Box>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: color.mainColor }}
      style={{ backgroundColor: color.bg }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? colors.mainColor : '#9e9e9e' }} numberOfLines={1}>
          {route.title}
        </Text>
      )}
    />
  );

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <KeyBoardSafe>
      <Box
        flex={1}
        backgroundColor={theme === 'dark' ? color.bg : color.bg}
        padding={24}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible2}
          onRequestClose={toggleModal2}
        >
          <Box
            flex={1}
            backgroundColor={'rgba(0,0,0,0.6)'}
            justifyEnd={'true'}
          >
            <Btn
              flex={1}
              onPress={toggleModal2}
              justifyEnd={'true'}
            />
            <Box
              width={wp(100)}
              backgroundColor={theme === 'dark' ? color.bg : color.white5}
              padding={30}
              elevation={5}
              borderTopLeftRadius={40}
              borderTopRightRadius={40}
            >
              <Text
                style={{
                  fontFamily: fonts.MAINB,
                  fontSize: 20,
                  color: theme === 'dark' ? color.black : color.white,
                  marginBottom: 24,
                  textAlign: 'center'
                }}
              >{t('Download')}</Text>
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
                height={wp(0.5)}
                backgroundColor={theme === 'dark' ? '#35383F' : '#E0E0E0'}
              />
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
              >
                <Text
                  style={{
                    fontFamily: fonts.MAINB,
                    fontSize: 16,
                    color: theme === 'dark' ? color.black : color.white,
                    textAlign: 'center'
                  }}
                >{t('Episodes')}</Text>
                <Text
                  style={{
                    fontFamily: fonts.MAIN,
                    fontSize: 14,
                    color: theme === 'dark' ? color.mainColor : color.mainColor,
                    textAlign: 'center'
                  }}
                >720p</Text>
              </Box>
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
              >
                <FlatList
                  data={data[0].episodes}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => {
                    return (
                      <Box
                        row={true}
                        marginBottom={16}
                        alignCenter={'center'}
                        justifySpaceBetween={'true'}
                        height={wp(27)}
                        width={wp(40)}
                        marginRight={16}
                      // backgroundColor={'red'}
                      >
                        <Img
                          source={{ uri: item.thumbnail }}
                          width={'100%'}
                          height={'100%'}
                          radius={5}
                          resizeMode='cover'
                        />
                        <Box
                          alignCenter={'center'}
                          absolute={true}
                          width={'100%'}
                          height={'20%'}
                          justifyCenter={'center'}
                          backgroundColor={'rgba(0,0,0,0.3)'}
                          bottom={18}
                        >
                        </Box>
                        <Box
                          alignCenter={'center'}
                          justifyCenter={'center'}
                          width={'100%'}
                          absolute={true}
                          bottom={20}
                          left={0}
                        >
                          <Txt
                            color={theme === 'dark' ? color.white : color.white5}
                            size={12}
                            fontFamily={fonts.MAIN}
                          >
                            {t('Episode ')}{item.episode} - {item.duration} {t('mins')}
                          </Txt>
                        </Box>
                      </Box>
                    )
                  }}
                />
              </Box>
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
                height={wp(0.5)}
                backgroundColor={theme === 'dark' ? '#35383F' : '#E0E0E0'}
              />
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
              >
                <Btn
                  alignCenter={true}
                  width={wp(40)}
                  height={wp(12)}
                  backgroundColor={theme === 'dark' ? '#35383F' : '#E6F9ED'}
                  radius={30}
                  onPress={() => { }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.MAINB,
                      fontSize: 16,
                      color: theme === 'dark' ? color.white : color.mainColor,
                      textAlign: 'center'
                    }}
                  >Cancel</Text>
                </Btn>
                <Btn
                  alignCenter={true}
                  width={wp(40)}
                  height={wp(12)}
                  backgroundColor={theme === 'dark' ? color.mainColor : color.mainColor}
                  radius={30}
                  onPress={() => { }}
                >
                  <Text
                    style={{
                      fontFamily: fonts.MAINB,
                      fontSize: 16,
                      color: theme === 'dark' ? color.white : color.white5,
                      textAlign: 'center'
                    }}
                  >Download</Text>
                </Btn>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <Box
            flex={1}
            backgroundColor={'rgba(0,0,0,0.6)'}
            justifyEnd={'true'}
          >
            <Btn
              flex={1}
              onPress={toggleModal}
              justifyEnd={'true'}
            />
            <Box
              width={wp(100)}
              backgroundColor={theme === 'dark' ? color.bg : color.white5}
              padding={30}
              elevation={5}
              borderTopLeftRadius={40}
              borderTopRightRadius={40}
            >
              <Text
                style={{
                  fontFamily: fonts.MAINB,
                  fontSize: 20,
                  color: theme === 'dark' ? color.black : color.white,
                  marginBottom: 24,
                  textAlign: 'center'
                }}
              >{t('Share to')}</Text>
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
                height={wp(0.5)}
                backgroundColor={theme === 'dark' ? '#35383F' : '#E0E0E0'}
              />
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
              >
                <Btn>
                  <Img
                    source={require('@images/detail/facebook64.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Facebook</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/twitter.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Twitter</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/instagram.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Instagram</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/linkedin.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Linkedin</Text>
                </Btn>
              </Box>
              <Box
                row={true}
                justifySpaceBetween={'true'}
                marginBottom={24}
              >
                <Btn>
                  <Img
                    source={require('@images/detail/gmail.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Gmail</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/telegram.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Telegram</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/whatsapp.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Whatsapp</Text>
                </Btn>
                <Btn>
                  <Img
                    source={require('@images/detail/tik-tok.png')}
                    width={56}
                    height={56}
                    marginBottom={8}
                  ></Img>
                  <Text
                    style={{
                      fontFamily: fonts.MAIN,
                      fontSize: 10,
                      color: theme === 'dark' ? color.black : color.white,
                      textAlign: 'center',
                    }}
                  >Tik-Tok</Text>
                </Btn>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Box
          width={wp(100)}
          height={hp(33)}
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
          // backgroundColor={'red'}
          alignCenter={'center'}
          marginBottom={24}
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
            alignCenter={'center'}
          >
            <Btn
              marginRight={16}
            // backgroundColor={'red'}
            >
              <Img
                source={require('@images/detail/bookmark.png')}
                width={24}
                height={24}
                tintColor={color.white}
              ></Img>
            </Btn>
            <Btn
              onPress={toggleModal}
            >
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
            height={wp(10)}
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
              tintColor={theme === 'dark' ? color.white : color.white5}
              marginRight={8}
            ></Img>
            <Txt
              color={theme === 'dark' ? color.white : color.white5}
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
            height={wp(10)}
            backgroundColor={color.bg}
            radius={20}
            borderWidth={2}
            borderColor={color.mainColor}
            paddingHorizontal={8}
            onPress={toggleModal2}
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
        <Box
          marginBottom={16}
        >
          <Txt
            color={color.white}
            size={12}
            fontFamily={fonts.MAIN}
            marginBottom={12}
            numberOfLines={1}
          >
            {t('Genres')}: {data[0].genres.join(', ')}
          </Txt>
          <ReadMore
            numberOfLines={3} // Số dòng hiển thị khi đoạn text được rút gọn
            renderTruncatedFooter={(handlePress: () => void) => (
              <Txt
                onPress={handlePress}
                color={color.mainColor} // Màu sắc chữ khi ở trạng thái rút gọn
                size={12}
                fontFamily={fonts.MAIN}
              >
                {t('Read More')}
              </Txt>
            )}
            renderRevealedFooter={(handlePress: () => void) => (
              <Txt
                onPress={handlePress}
                color={color.mainColor} // Màu sắc chữ khi ở trạng thái mở rộng
                size={12}
                fontFamily={fonts.MAIN}
              >
                {t('Show Less')}
              </Txt>
            )}
          // Các thuộc tính kiểu dáng khác có thể được thêm vào ở đây
          >
            <Txt
              color={color.white}
              size={12}
              fontFamily={fonts.MAIN}
            >
              {data[0].description}
            </Txt>
          </ReadMore>
        </Box>
        {/* list episodes */}
        <Box>
          <Box
            row={true}
            marginBottom={24}
            justifySpaceBetween={'true'}
            alignCenter={'center'}
          // backgroundColor={'red'}
          >
            <Txt
              color={color.white}
              size={18}
              fontFamily={fonts.MAINB}
            >
              {t('Episodes')}
            </Txt>
            <Box>
              <Img
                source={require('@images/detail/find.png')}
                width={24}
                height={24}
                tintColor={color.white}
                absolute={true}
                left={10}
                top={wp(10) / 2 - 12}
                zIndex={1}
              // backgroundColor={'red'}
              />
              <Input
                height={wp(10)}
                width={wp(49)}
                hint={t('Search for episodes')}
                hintColor={'#5f5f5f'}
                backgroundColor={color.bg}
                radius={5}
                borderWidth={1}
                borderColor={'#5f5f5f'}
                paddingLeft={(35)}
                color={color.white}
                fontSize={14}
                font={fonts.MAIN}
              />
            </Box>
          </Box>
          <FlatList
            data={data[0].episodes}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Box
                  row={true}
                  marginBottom={16}
                  alignCenter={'center'}
                  justifySpaceBetween={'true'}
                  height={wp(27)}
                  width={wp(40)}
                  marginRight={16}
                // backgroundColor={'red'}
                >
                  <Img
                    source={{ uri: item.thumbnail }}
                    width={'100%'}
                    height={'100%'}
                    radius={5}
                    resizeMode='cover'
                  />
                  <Box
                    alignCenter={'center'}
                    absolute={true}
                    width={'100%'}
                    height={'60%'}
                    justifyCenter={'center'}
                    backgroundColor={'rgba(0,0,0,0.5)'}
                  >
                    <Img
                      source={require('@images/detail/play.png')}
                      width={24}
                      height={24}
                      tintColor={color.mainColor}
                      marginRight={8}
                    ></Img>
                  </Box>
                  <Box
                    alignCenter={'center'}
                    justifyCenter={'center'}
                    width={'100%'}
                    absolute={true}
                    bottom={20}
                    left={0}
                  >
                    <Txt
                      color={theme === 'dark' ? color.white : color.white5}
                      size={12}
                      fontFamily={fonts.MAIN}
                    >
                      {t('Episode ')}{item.episode} - {item.duration} {t('mins')}
                    </Txt>
                  </Box>
                </Box>
              )
            }}
          />
        </Box>
        <Box
          // backgroundColor={'red'}
          width={wp(100) - 48}
          // flex={1}
          height={hp(35)}
        >
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: wp(100) }}
            renderTabBar={renderTabBar}
          />
        </Box>
      </Box>
    </KeyBoardSafe>
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
            { id: 20, name: 'Nguyễn Văn A' },
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
            { id: 20, name: 'Nguyễn Văn A' },
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
  {
    id: 2,
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
            { id: 20, name: 'Nguyễn Văn A' },
            { id: 21, name: 'Nguyễn Văn B' },
            { id: 22, name: 'Nguyễn Văn C' },
            { id: 23, name: 'Nguyễn Văn D' },
            { id: 24, name: 'Nguyễn Văn E' },
            { id: 25, name: 'Nguyễn Văn F' },
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
            { id: 20, name: 'Nguyễn Văn A' },
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
  {
    id: 3,
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
            { id: 20, name: 'Nguyễn Văn A' },
            { id: 21, name: 'Nguyễn Văn B' },
            { id: 22, name: 'Nguyễn Văn C' },
            { id: 23, name: 'Nguyễn Văn D' },
            { id: 24, name: 'Nguyễn Văn E' },
            { id: 25, name: 'Nguyễn Văn F' },
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
            { id: 20, name: 'Nguyễn Văn A' },
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
  {
    id: 4,
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
            { id: 20, name: 'Nguyễn Văn A' },
            { id: 21, name: 'Nguyễn Văn B' },
            { id: 22, name: 'Nguyễn Văn C' },
            { id: 23, name: 'Nguyễn Văn D' },
            { id: 24, name: 'Nguyễn Văn E' },
            { id: 25, name: 'Nguyễn Văn F' },
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
            { id: 20, name: 'Nguyễn Văn A' },
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
  {
    id: 5,
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
            { id: 20, name: 'Nguyễn Văn A' },
            { id: 21, name: 'Nguyễn Văn B' },
            { id: 22, name: 'Nguyễn Văn C' },
            { id: 23, name: 'Nguyễn Văn D' },
            { id: 24, name: 'Nguyễn Văn E' },
            { id: 25, name: 'Nguyễn Văn F' },
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
            { id: 20, name: 'Nguyễn Văn A' },
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
  }
]


const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // For Android shadow
  },
})