import React, { useState, useCallback, Suspense } from 'react'
import Box from '@common/Box';
import Scroll from '@common/Scroll';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import InterestButton from './InterestButton';

const interests = [
  'Action', 'Drama', 'Comedy', 'Ecchi', 'Adventure',
  'Mecha', 'Romance', 'Science', 'Music', 'School',
  'Seinen', 'Shoujo', 'Fantasy', 'Mystery', 'Family',
  'Vampire', 'Isekai', 'Shounen', 'Television', 'Superheroes',
  'Magic', 'Game', 'Slice of Life', 'Horror', 'Thriller',
  'Supernatural'
];


const Form = () => {
  const theme = useAppSelector(themeUserSelector);
  const [selectedInterests, setSelectedInterests] = useState(new Set());
  const toggleInterest = useCallback((interest: any) => {
    setSelectedInterests(prevSelectedInterests => {
      const newSelectedInterests = new Set(prevSelectedInterests);
      if (newSelectedInterests.has(interest)) {
        newSelectedInterests.delete(interest);
      } else {
        newSelectedInterests.add(interest);
      }
      return newSelectedInterests;
    });
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