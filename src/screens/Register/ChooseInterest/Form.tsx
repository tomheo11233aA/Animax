import React, { useState } from 'react'
import Box from '@common/Box';
import Btn from '@common/Btn';
import Txt from '@common/Txt';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import Scroll from '@common/Scroll';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';

const interests = [
  'Action', 'Drama', 'Comedy', 'Ecchi', 'Adventure',
  'Mecha', 'Romance', 'Science', 'Music', 'School',
  'Seinen', 'Shoujo', 'Fantasy', 'Mystery', 'Family',
  'Vampire', 'Isekai', 'Shounen', 'Television', 'Superheroes',
  'Magic', 'Game', 'Slice of Life', 'Horror', 'Thriller',
  'Supernatural'
];

const Form = () => {
  const { t } = useTranslation();
  const [selectedInterests, setSelectedInterests] = useState(new Set());

  const toggleInterest = (interest: any) => {
    const newSelectedInterests = new Set(selectedInterests);
    if (newSelectedInterests.has(interest)) {
      newSelectedInterests.delete(interest);
    } else {
      newSelectedInterests.add(interest);
    }
    setSelectedInterests(newSelectedInterests);
  };

  const renderInterestButton = (interest: any) => {
    const selected = selectedInterests.has(interest);
    return (
      <Btn
        key={interest}
        onPress={() => toggleInterest(interest)}
        marginRight={wp('3%')}
        marginBottom={hp('2.5%')}
        paddingVertical={hp('1%')}
        paddingHorizontal={wp('5%')}
        radius={wp('6%')}
        backgroundColor={selected ? colors.lMainColor : colors.white}
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
  };

  return (
    <Scroll
      showsVerticalScrollIndicator={false}
    >
      <Box row wrap marginTop={20}>
        {interests.map(renderInterestButton)}
      </Box>
    </Scroll>
  )
}

export default Form