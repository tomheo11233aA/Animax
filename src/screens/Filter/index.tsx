import React, { useState } from 'react'
import Header from './Header'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { useTheme } from '@hooks/redux'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Platform } from 'react-native'
import InterestButton from '@screens/AccountSetup/ChooseInterest/InterestButton'
import { useAppSelector } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'

const sort = ['Popular', 'Title', 'Recently updated', 'Recently premiered']
const type = ['All', 'Movie', 'TV', 'OVA', 'Special', 'ONA', 'Music']
const status = ['All', 'Finished Airing', 'Currently Airing', 'Upcoming']
const genre = ['Action', 'Drama', 'Comedy', 'Ecchi', 'Adventure',
    'Mecha', 'Romance', 'Science', 'Music', 'School',
    'Seinen', 'Shoujo', 'Fantasy', 'Mystery', 'Family',
    'Vampire', 'Isekai', 'Shounen', 'Television', 'Superheroes',
    'Magic', 'Game', 'Slice of Life', 'Horror', 'Thriller',
    'Supernatural']

const Filter = () => {
    const theme = useTheme()
    const color = useAppSelector(themeUserSelector)
    const [selectedSort, setSelectedSort] = useState(new Set());
    const [selectedType, setSelectedType] = useState(new Set());
    const [selectedStatus, setSelectedStatus] = useState(new Set());
    const [selectedGenre, setSelectedGenre] = useState(new Set());

    const toggleSort = (sort: any) => {
        setSelectedSort(prevSelectedSort => {
            const newSelectedSort = new Set(prevSelectedSort);
            if (newSelectedSort.has(sort)) {
                newSelectedSort.delete(sort);
            } else {
                newSelectedSort.add(sort);
            }
            return newSelectedSort;
        });
    }
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={20}
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === 'ios'}
            style={{
                flex: 1,
                paddingHorizontal: 14,
                backgroundColor: theme.bg
            }}
        >
            <Header />
            <Box flex={1}>
                <Txt size={20} fontWeight={'600'}>Sort</Txt>
                <Box row wrap marginTop={20}>
                    {sort.map((item, index) => (
                        <InterestButton
                            key={index}
                            onPress={() => toggleSort(item)}
                            selected={selectedSort.has(item)}
                            theme={color}
                            interest={item}
                        />
                    ))}
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    )
}

export default Filter
