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

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents

type ItemData = {
  id: number,
  name: string,
  date: Date
}

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
}

const ItemDay = ({ item, onPress, backgroundColor, textColor }: ItemProps) =>
(
  <Btn
    alignCenter={true}
    justifySpaceBetween={true}
    width={50}
    height={77}
    backgroundColor={backgroundColor}
    borderColor={textColor}
    borderWidth={2}
    radius={30}
    onPress={onPress}
    marginRight={8}
    marginLeft={8}
  >
    <Txt
      fontFamily={fonts.MAIN}
      size={14}
      fontWeight={200}
      color={textColor}
      marginTop={16}
    >{item.name}</Txt>
    <Txt
      fontFamily={fonts.MAIN}
      size={16}
      fontWeight={700}
      color={textColor}
      marginBottom={16}
    >{item.id}</Txt>
  </Btn>
)

type itemDataVideo = {
  id: number,
  name: string,
  image: string
  Episodes: number,
  time: string,
  showtimes: string[],
}

type itemVideoProps = {
  item: itemDataVideo
  onPress: () => void
  onPressDetail: () => void
  backgroundColor: string
  textColor: string
  backgroundColorBtn: string
  textColorBtn: string
  borderColor: string
  check: boolean
}

const ItemVideo = ({ item, onPress, backgroundColor, onPressDetail,
  textColor, borderColor, check, backgroundColorBtn, textColorBtn
}: itemVideoProps) =>
(
  <Box
    marginBottom={16}
  // backgroundColor={'red'}
  >
    <Box
      row={true}
      alignCenter={true}
      marginBottom={8}
    >
      <Box
        height={7}
        width={wp(4)}
        backgroundColor={'#06C149'}
        radius={3}
        marginRight={8}
      />
      <Txt
        fontFamily={fonts.MAIN}
        size={14}
        fontWeight={'100'}
        color={textColor}
      >
        {/* // convert time to hh:mm */}
        {(new Date(item.time)).getHours().toString().padStart(2, '0')}
        :{(new Date(item.time)).getMinutes().toString().padStart(2, '0')}
      </Txt>
    </Box>
    <Box
      row={true}
      alignCenter={true}
      justifySpaceBetween={true}
    // backgroundColor={'red'}
    >
      <Btn
        onPress={onPressDetail}
      >
        <Img
          source={{
            uri: item.image
          }}
          width={wp(40)}
          height={wp(30)}
          radius={10}
          resizeMode='stretch'

        />
      </Btn>
      <Box
        column={true}
        justifySpaceBetween={true}
        height={wp(30)}
        width={wp(45)}
      // backgroundColor={"red"}
      >
        <Txt
          fontFamily={fonts.MAIN}
          size={16}
          fontWeight={'700'}
          color={textColor}
          numberOfLines={2}
        >
          {item.name}
        </Txt>
        <Txt
          fontFamily={fonts.MAIN}
          size={14}
          fontWeight={'600'}
          color={'#b1b1b3'}
        >
          Episodes {item.Episodes}
        </Txt>
        <Btn
          row={true}
          alignCenter={true}
          width={wp(23)}
          height={wp(8)}
          backgroundColor={backgroundColorBtn}
          radius={20}
          borderWidth={2}
          borderColor={borderColor}
          onPress={onPress}
        >
          <Img
            source={
              check ? require('@images/check.png') : require('@images/plus-sign.png')
            }
            width={wp(4)}
            height={wp(4)}
            tintColor={textColorBtn}
            marginRight={8}
          />
          <Txt
            fontFamily={fonts.MAIN}
            size={14}
            fontWeight={'100'}
            color={textColorBtn}
          >
            My list
          </Txt>
        </Btn>
      </Box>
    </Box>
  </Box>
)

const toggleSelected = (itemId: number, selectedArray: number[],
  setSelectedArray: React.Dispatch<React.SetStateAction<number[]>>) => {
  //React.Dispatch<React.SetStateAction<number[]> là kiểu dữ liệu của setSelectedArray
  const index = selectedArray.indexOf(itemId);
  let newArray = [...selectedArray];

  if (index === -1) {
    newArray.push(itemId);
  } else {
    newArray.splice(index, 1);
  }

  setSelectedArray(newArray);
};

const getCurrentMonthDays = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Tính số ngày trong tháng hiện tại
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Tạo mảng chứa thông tin về các ngày trong tháng
  const daysInMonth = [];
  for (let day = 1; day <= lastDayOfMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayInfo = {
      id: day,
      name: date.toLocaleDateString('en-US', { weekday: 'short' }), // Lấy tên ngày (vd: Mon, Tue, ...)
      date: date, // Lấy ngày trong tháng
    };
    daysInMonth.push(dayInfo);
  }

  return daysInMonth;
};

const DATA = getCurrentMonthDays();





const ReleaseCalendar = () => {
  const { t } = useTranslation()
  const theme = useAppSelector(themeUserSelector)
  const color = useTheme()
  const flatListRef = useRef<FlatList<ItemData>>(null);


  useEffect(() => {
    const index = new Date().getDate() - 1;
    const dataLength = DATA.length;

    // kiểm tra index có nằm trong khoảng của data hay không
    if (flatListRef.current && index >= 0 && index < dataLength) {
      flatListRef.current.scrollToIndex({ index: index, animated: true });
    } else {
      // console.log('Index out of range');
    }
  }, []);


  const [currentTime, setCurrentTime] = useState<Date>(new Date()); // khởi tạo giá trị ban đầu cho state currentTime
  const [formatTime, setFormatTime] = useState<string>('');

  const [dataBeforeCurrentTime, setDataBeforeCurrentTime] = useState<itemDataVideo[]>([]);
  const [dataAfterCurrentTime, setDataAfterCurrentTime] = useState<itemDataVideo[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      // const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(now);
      setFormatTime(`${hours}:${minutes}`);
      // console.log(new Date(currentTime));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //lọc dữ liệu trước currentTime và sau currentTime
  useEffect(() => {
    const filteredData = DATA_VIDEO.filter((item) => {
      const videoTime = new Date(item.time);
      // console.log(videoTime);
      return videoTime < currentTime;
    });

    setDataBeforeCurrentTime(filteredData);

    setDataAfterCurrentTime(DATA_VIDEO.filter((item) => !filteredData.includes(item)));
  }, [currentTime]);

  const [isSelected, setIsSelected] = useState<number>(currentTime.getDate());
  const [isCheck, setIsCheck] = useState<number[]>([]);
  const [daySelected, setDaySelected] = useState<Date>(new Date());


  const renderItemDay = ({ item }: { item: ItemData }) => {

    const backgroundColor = item.id === isSelected ? color.mainColor
      : theme === 'dark' ? '#181A20' : color.white5;
    const textColor = item.id === isSelected ? '#ffffff'
      : theme === 'dark' ? '#515253' : '#cdcdcd';

    return (
      <ItemDay
        item={item}
        onPress={() => {
          setIsSelected(item.id)
          setDaySelected(item.date)
        }}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  }

  const renderItemVideo = ({ item }: { item: itemDataVideo }) => {
    const daySelectedDate = daySelected.getDate();
    const daySelectedItemDate = new Date(item.time).getDate();

    const daySelectedMonth = daySelected.getMonth();
    const daySelectedItemMonth = new Date(item.time).getMonth();

    const daySelectedYear = daySelected.getFullYear();
    const daySelectedItemYear = new Date(item.time).getFullYear();

    if (daySelectedDate !== daySelectedItemDate ||
      daySelectedMonth !== daySelectedItemMonth ||
      daySelectedYear !== daySelectedItemYear) {
      return null;
    }

    const isCheckItem = isCheck.includes(item.id);

    const backgroundColor = theme === 'dark' ? '#181A20' : color.white5;
    const textColor = theme === 'dark' ? color.white : color.black;
    const borderColor = color.mainColor;
    const backgroundColorBtn = !isCheckItem ? color.mainColor
      : theme === 'dark' ? color.bg : color.bg;
    const textColorBtn = !isCheckItem ? '#ffffff'
      : theme === 'dark' ? color.mainColor : color.mainColor;
    const check = isCheckItem ? true : false;


    return (
      <ItemVideo
        item={item}
        onPress={() => toggleSelected(item.id, isCheck, setIsCheck)}
        onPressDetail={() => navigate(screens.DETAIL)} //chuyển sang màn hình detail. truyền id của item qua màn hình detail
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        check={check}
        backgroundColorBtn={backgroundColorBtn}
        textColorBtn={textColorBtn}
      />
    );
  }

  const HeaderComponent = () => (
    //nếu ngày hiện tại khác ngày được chọn thì không hiển thị currentTime
    daySelected.getDate() !== currentTime.getDate() ? null :
      <Box
        row={true}
        alignCenter={true}
        marginBottom={16}
      >
        <Box
          height={2}
          flex={1}
          backgroundColor={color.mainColor}
          marginRight={8}
          radius={2}
        />
        <Txt
          fontFamily={fonts.MAIN}
          size={14}
          fontWeight={'400'}
          color={theme === 'dark' ? color.white : color.black}
        >
          {t('Current Time -')} {formatTime}
        </Txt>
        <Box
          height={2}
          flex={1}
          backgroundColor={color.mainColor}
          marginLeft={8}
          radius={2}
        />
      </Box>
  );


  return (
    // <KeyBoardSafe>
    <Box
      flex={1}
      backgroundColor={theme === 'dark' ? color.bg : color.bg}
    >
      <Box
        flex={1}
        padding={24}
      >
        <Box
          row={true}
          alignCenter={true}
          justifySpaceBetween={true}
          marginBottom={24}
          marginTop={24}
        >
          <Img
            source={require('@images/avatar.png')}
            width={wp(7)}
            height={wp(7)}
            marginRight={16}
          />
          <Txt
            fontFamily={fonts.MAIN}
            size={24}
            fontWeight={'bold'}
            color={theme === 'dark' ? color.white : color.white}
            width={wp(70)}
          >{t('Release Calendar')}</Txt>
          <Img
            source={require('@images/more-information.png')}
            width={wp(6)}
            height={wp(6)}
            tintColor={theme === 'dark' ? color.white : color.black}
          />
        </Box>
        <Box
          row={true}
          alignCenter={true}
          marginBottom={16}
          justifySpaceAround={true}
          width={wp(100)}
          marginLeft={-24}
        >
          <FlatList
            ref={flatListRef}
            data={DATA}
            renderItem={renderItemDay}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            getItemLayout={(data, index) => (
              { length: 66, offset: 66 * (index - 2), index }
            )}
          //thiết lập chiều dài (theo chiều cuộn flatlist) của mỗi item là 66
          // để khi cuộn flatlist thì item sẽ cuộn theo
          // offset là khoảng cách từ item đầu tiên đến item hiện tại
          // index là vị trí của item hiện tại
          // hàm này giúp cho flatlist cuộn đến vị trí item hiện tại
          />
        </Box>
        <Box
          flex={1}
          marginBottom={BOTTOM_TAB_HEIGHT/2+24}
        >

          {/* dữ liệu sau currentTime */}
          <FlatList
            data={dataAfterCurrentTime}
            renderItem={renderItemVideo}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
              <>
                {/* dữ liệu trước currentTime */}
                <FlatList
                  data={dataBeforeCurrentTime}
                  renderItem={renderItemVideo}
                  keyExtractor={item => item.id.toString()}
                  showsVerticalScrollIndicator={false} />
                <HeaderComponent />
              </>
            )}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default React.memo(ReleaseCalendar)

//fake data
const DATA_VIDEO: itemDataVideo[] = [
  {
    id: 1,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-19 22:41',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 2,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-19 22:40',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 3,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-16 21:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 4,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-19 20:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 5,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-02-16 19:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 6,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-19 00:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 7,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-19 17:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 8,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-16 16:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']

  },
  {
    id: 9,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '2024-01-16 15:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']

  },
]
const styles = StyleSheet.create({})
