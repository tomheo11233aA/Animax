import React from 'react';
import Btn from '@common/Btn';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';

interface Props {
  onPress: () => void;
  selected: boolean;
  theme: string;
  interest: string;
}

const InterestButton: React.FC<Props>= ({ onPress, selected, theme, interest }) => {
  const { t } = useTranslation();
  return (
    <Btn
      onPress={onPress}
      // marginRight={wp('3%')}
      // marginBottom={hp('2.5%')}
      // paddingVertical={hp('1%')}
      // paddingHorizontal={wp('5%')}
      // radius={wp('6%')}
      marginRight={12}
      marginBottom={12}
      paddingVertical={8}
      paddingHorizontal={16}
      radius={24}
      backgroundColor={selected ? colors.lMainColor : theme === 'light' ? colors.white : 'transparent'}
      borderWidth={1.5}
      borderColor={selected ? '#44d076' : colors.mainColor}
    >
      <Txt
        color={selected ? colors.white : colors.mainColor}
        size={14}
        fontWeight={'600'}
        fontFamily={fonts.MAINB}
      >
        {t(interest)}
      </Txt>
    </Btn>
  );
}

export default React.memo(InterestButton);