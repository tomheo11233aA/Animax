import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,
{
  useState,
  useEffect,
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

const { Box, Img, Btn, Icon, Txt, Input, Scroll } = CommonComponents

type ItemData = {
  id: number,
  name: string,
  date: string
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
    >{item.date}</Txt>
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
  backgroundColor: string
  textColor: string
  backgroundColorBtn: string
  textColorBtn: string
  borderColor: string
  check: boolean
}

const ItemVideo = ({ item, onPress, backgroundColor,
  textColor, borderColor, check, backgroundColorBtn, textColorBtn
}: itemVideoProps) =>
(
  <Box
    marginBottom={16}
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
        {item.time}
      </Txt>
    </Box>
    <Box
      row={true}
      alignCenter={true}
      justifySpaceBetween={true}
    // backgroundColor={theme === 'dark' ? '#181A20' : color.white5}
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
      <Box
        column={true}
        justifySpaceBetween={true}
        height={wp(30)}
        width={wp(45)}
      // backgroundColor={theme === 'dark' ? '#181A20' : color.white5}
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





const ReleaseCalendar = () => {
  const { t } = useTranslation()
  const theme = useAppSelector(themeUserSelector)
  const color = useTheme()

  const [isSelected, setIsSelected] = useState<number>()
  // const [isCheck, setIsCheck] = useState<number>()
  const [isCheck, setIsCheck] = useState<number[]>([]);


  const renderItemDay = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === isSelected ? color.mainColor
      : theme === 'dark' ? '#181A20' : color.white5;
    const textColor = item.id === isSelected ? '#ffffff'
      : theme === 'dark' ? '#515253' : '#cdcdcd';

    return (
      <ItemDay
        item={item}
        onPress={() => setIsSelected(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  }

  const renderItemVideo = ({ item }: { item: itemDataVideo }) => {

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
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderColor={borderColor}
        check={check}
        backgroundColorBtn={backgroundColorBtn}
        textColorBtn={textColorBtn}
      />
    );
  }


  return (
    <KeyBoardSafe>
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
            data={DATA}
            renderItem={renderItemDay}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Box>
          <FlatList
            data={DATA_VIDEO}
            renderItem={renderItemVideo}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Box>
        <Box></Box>
      </Box>
    </KeyBoardSafe>
  )
}

export default React.memo(ReleaseCalendar)

//fake data
const DATA: ItemData[] = [
  {
    id: 1,
    name: 'Sun',
    date: '19'
  },
  {
    id: 2,
    name: 'Mon',
    date: '20'
  },
  {
    id: 3,
    name: 'Tue',
    date: '21'
  },
  {
    id: 4,
    name: 'Wed',
    date: '22'
  },
  {
    id: 5,
    name: 'Thu',
    date: '23'
  },
  {
    id: 6,
    name: 'Fri',
    date: '24'
  },
  {
    id: 7,
    name: 'Sat',
    date: '25'
  },
]
const DATA_VIDEO: itemDataVideo[] = [
  {
    id: 1,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '12:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 2,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '12:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 3,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '12:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 4,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '12:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  },
  {
    id: 5,
    name: 'The Falcon and the Winter Soldier',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
    Episodes: 6,
    time: '12:00',
    showtimes: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
  }
]
const styles = StyleSheet.create({})
