import React from 'react';
import { View, Text } from 'react-native';
import { Coin1, Aave } from 'iconsax-react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@hooks/redux';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { height, width } from '@utils/responsive';
import KeyBoardSafe from '@reuse/KeyBoardSafe';
import Box from '@common/Box';
import Txt from '@common/Txt';
import Scroll from '@common/Scroll';
import Header3 from '@components/header/Header3';
import Btn from '@common/Btn';
import { SVG_ICON_SIZE } from '@themes/styled';

const CoinBox = ({ coin }: any) => {
  const color = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      backgroundColor={color.bg2}
      flex={1}
      radius={width * 0.03}
      justifySpaceBetween
    >
      <Box row alignSelf={'center'} alignCenter justifyCenter flex={1}>
        <Coin1 color={colors.yellow} variant='Bold' size={30} />
        <Txt size={20} fontFamily={fonts.MAINB} style={{ marginLeft: 10 }} center>{coin}</Txt>
      </Box>

      <Btn
        onPress={() => { }}
        padding={width * 0.015}
        backgroundColor={color.bg3}
        borderBottomLeftRadius={width * 0.03}
        borderBottomRightRadius={width * 0.03}
      >
        <Txt color={color.mainColor} center>{t('Exchange')} {'›'}</Txt>
      </Btn>
    </Box>
  );
};

const VIPBox = () => {
  const color = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      backgroundColor={color.bg2}
      flex={1}
      radius={width * 0.03}
      justifySpaceBetween
    >
      <Box row alignSelf={'center'} alignCenter marginVertical={height * 0.02} flex={1}>
        <Txt size={20} fontFamily={fonts.MAINB} style={{ marginLeft: 10 }} center>
          {t('You are not VIP')}
        </Txt>
      </Box>

      <Btn
        onPress={() => { }}
        padding={width * 0.015}
        backgroundColor={color.bg3}
        borderBottomLeftRadius={width * 0.03}
        borderBottomRightRadius={width * 0.03}
      >
        <Txt color={color.mainColor} center>{t('Get VIP')} {'›'}</Txt>
      </Btn>
    </Box>
  );
};

const DailyCheckInBox = ({ day, opened, onOpen }: any) => {
  const color = useTheme();
  const { t } = useTranslation();
  const rewards = [
    { type: 'coin', amount: 10 },
    { type: 'vip', days: 1 },
    { type: 'coin', amount: 20 },
    { type: 'coin', amount: 40 },
    { type: 'coin', amount: 80 },
    { type: 'coin', amount: 100 },
    { type: 'vip', days: 3 },
  ];

  const renderRewardIcon = () => {
    if (!opened) {
      return <Txt color={color.white} center>?</Txt>;
    } else {
      switch (rewards[day].type) {
        case 'coin':
          return <Coin1 color={colors.yellow} variant='Bold' size={SVG_ICON_SIZE} />;
        case 'vip':
          return <Aave color={colors.mainColor} variant='Bold' size={SVG_ICON_SIZE} />;
        default:
          return null;
      }
    }
  };


  return (
    <Box flex={1}>
      <Btn
        backgroundColor={opened ? color.bg3 : 'green'}
        paddingVertical={width * 0.02}
        radius={width * 0.02}
        marginHorizontal={width * 0.005}
        flex={1}
        justifyCenter
        alignCenter
        onPress={() => onOpen(day)}
      >
        {renderRewardIcon()}
        {opened && <Txt size={12} marginTop={height * 0.01} color={color.white} center>{rewards[day].type === 'coin' ? `${rewards[day].amount}` : `${rewards[day].days}DVIP`}</Txt>}

      </Btn>
      {/* <Txt marginTop={height * 0.01} size={12} color={color.white} center>{t(`Day ${day + 1}`)}</Txt> */}
      <Txt marginTop={height * 0.01} size={12} color={color.white} center>
        {t('Day')} {day + 1}
      </Txt>

    </Box>
  )
}

const Point = () => {
  let coin = 712;
  const { t } = useTranslation();
  const color = useTheme();
  const [openedDays, setOpenedDays] = React.useState<number[]>([]);
  const onOpenDay = (day: number) => {
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
    }
  }
  return (
    <KeyBoardSafe>
      <Scroll paddingHorizontal={width * 0.03}>
        <Header3 title='Earn Coin' type='more' onPress={() => { }} />
        <Box row marginVertical={height * 0.02}>
          <CoinBox coin={coin} />
          <Box width={width * 0.05} />
          <VIPBox />
        </Box>

        <Box marginBottom={height * 0.02} backgroundColor={color.bg2} padding={width * 0.03} radius={width * 0.03}>
          <Txt size={18} fontFamily={fonts.MAINB}>{t('Daily Check In')}</Txt>
          <Box row marginVertical={height * 0.01}>
            {[0, 1, 2, 3, 4, 5, 6].map((day) => (
              <DailyCheckInBox key={day} day={day} opened={openedDays.includes(day)} onOpen={onOpenDay} />
            ))}
          </Box>
        </Box>
      </Scroll>
    </KeyBoardSafe>
  );
};

export default Point;