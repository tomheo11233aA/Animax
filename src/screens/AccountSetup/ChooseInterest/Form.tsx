import React, { useState, useCallback, useMemo } from 'react'
import Box from '@common/Box';
import Txt from '@common/Txt';
import Scroll from '@common/Scroll';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import InterestButton from './InterestButton';

const Form = () => {
  const interests = useMemo(() => [
    'Action', 'Drama', 'Comedy', 'Ecchi', 'Adventure',
    'Mecha', 'Romance', 'Science', 'Music', 'School',
    'Seinen', 'Shoujo', 'Fantasy', 'Mystery', 'Family',
    'Vampire', 'Isekai', 'Shounen', 'Television', 'Superheroes',
    'Magic', 'Game', 'Slice of Life', 'Horror', 'Thriller',
    'Supernatural'
  ], []);
  const theme = useAppSelector(themeUserSelector);
  const [selectedInterests, setSelectedInterests] = useState(new Set());
  const toggleInterest = useCallback((interest: any) => {
    const newSelectedInterests = new Set(selectedInterests);
    if (newSelectedInterests.has(interest)) {
      newSelectedInterests.delete(interest);
    } else {
      newSelectedInterests.add(interest);
    }
    setSelectedInterests(newSelectedInterests);
  }, []);

  const renderInterestButton = useCallback((interest: any) => {
    const selected = selectedInterests.has(interest);
    return (
      <InterestButton
        key={interest}
        onPress={() => toggleInterest(interest)}
        selected={selected}
        theme={theme}
        interest={interest}
      />
    );
  }, [selectedInterests, toggleInterest]);

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

export default React.memo(Form)