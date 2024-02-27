import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import { FlatList } from 'react-native'
import TopHitsItem from '../TopHit/TopHitsItem'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

interface Props {
    t: any
    banner: any
}
const MostPopular: React.FC<Props> = ({ t, banner }) => {
    return (
        <>
            <Box
                marginTop={20}
                marginLeft={20}
                marginRight={20}
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
                    {t('Most Popular')}
                </Txt>
                <Btn
                    marginVertical={5}
                    marginHorizontal={10}
                    onPress={() => navigate(screens.SEE_ALL, { type: 'popular' })}
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
            <FlatList
                style={{ marginLeft: 10 }}
                data={banner}
                renderItem={({ item }) => (
                    <TopHitsItem
                        item={item}
                        onPress={() => navigate(screens.DETAIL, { item: item })}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

export default React.memo(MostPopular)
