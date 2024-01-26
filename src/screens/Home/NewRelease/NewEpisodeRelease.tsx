import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import { FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Img from '@common/Img'
import TopHitsItem from '../TopHit/TopHitsItem'

interface Props {
    t: any
    banner: any
}
const NewEpisodeRelease: React.FC<Props> = ({ t, banner }) => {
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
                    {t('New Episode Releases')}
                </Txt>
                <Btn
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
                data={banner}
                renderItem={({ item }) => (
                    <TopHitsItem
                        item={item}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={<Box width={20} />}
            />
        </>
    )
}

export default React.memo(NewEpisodeRelease)
