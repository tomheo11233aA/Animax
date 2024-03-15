import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import { FlatList } from 'react-native'
import TopHitsItem from './TopHitsItem'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'
import { FlashList } from '@shopify/flash-list'
import { height } from '@utils/responsive'

interface Props {
    t: any
    banner: any
}
const TopHitsAnime: React.FC<Props> = ({ t, banner }) => {
    return (
        <>
            <Box
                marginTop={20}
                marginLeft={20}
                marginRight={10}
                row
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Txt
                    size={17}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                >
                    {t('Top Hits Anime')}
                </Txt>
                <Btn
                    marginVertical={5}
                    marginHorizontal={10}
                    onPress={() => navigate(screens.SEE_ALL, { type: 'topHits' })}
                >
                    <Txt
                        size={12}
                        color={colors.mainColor}
                        fontWeight={'600'}
                        fontFamily={fonts.MAINB}
                    >
                        {t('See All')}
                    </Txt>
                </Btn>
            </Box>
            <Box
                width={'100%'}
                height={height * 0.27}
            >
                <FlashList
                    data={banner}
                    renderItem={({ item }) => (
                        <TopHitsItem
                            item={item}
                            onPress={() => navigate(screens.DETAIL, { item: item })}
                        />
                    )}
                    contentContainerStyle={{paddingLeft: 20}}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    estimatedItemSize={200}
                />
            </Box>
        </>
    )
}

export default React.memo(TopHitsAnime)
