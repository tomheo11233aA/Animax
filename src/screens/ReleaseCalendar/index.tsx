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
    marginBottom={24}
    width={50}
    height={77}
    backgroundColor={backgroundColor}
    borderColor={textColor}
    borderWidth={2}
    radius={30}
    onPress={onPress}
    marginRight={16}
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



const ReleaseCalendar = () => {
  const { t } = useTranslation()
  const theme = useAppSelector(themeUserSelector)
  const color = useTheme()

  const [isSelected, setIsSelected] = useState<number>()

  const renderItemDay = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === isSelected ? color.mainColor 
    : theme === 'dark' ? '#181A20': color.white5;
    const textColor = item.id === isSelected ? '#ffffff' 
    : theme === 'dark' ?'#515253': '#cdcdcd';

    return (
      <ItemDay
        item={item}
        onPress={() => setIsSelected(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
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
          marginBottom={24}
          justifySpaceAround={true}
        >
          <FlatList
            data={DATA}
            renderItem={renderItemDay}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Box></Box>
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
const styles = StyleSheet.create({})
