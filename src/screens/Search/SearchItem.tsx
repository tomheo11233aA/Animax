import { Dimensions } from 'react-native'
import React from 'react'
import Box from '@common/Box'
import LazyLoadImg from '@common/LazyLoadImg'
import Txt from '@common/Txt'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'

interface Props {
    item: any,
}

const { width, height } = Dimensions.get('window')

const AnimeItem: React.FC<Props> = ({ item }) => {

    return (
        <Box
            width={width / 2}
            paddingVertical={hp(1.5)}
            alignSelf={'center'}
            style={{
                alignItems: 'center',
            }}
        >
            <LazyLoadImg
                width={width / 2 - 30}
                height={height / 3.8}
                radius={10}
                source={{ uri: item.images.jpg.image_url }}
            />
            <Box
                absolute={true}
                top={hp('3%')}
                width={width / 2 - 45}
                row
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    backgroundColor={'white'}
                    paddingHorizontal={7}
                    paddingVertical={2}
                    marginRight={5}
                    radius={5}
                >
                    <Txt
                        size={12}
                        color={'#000'}
                        fontWeight={'600'}
                        fontFamily={fonts.MAINB}
                    >
                        {item.score}
                    </Txt>
                </Box>
                <Box
                    backgroundColor={colors.mainColor}
                    paddingHorizontal={7}
                    paddingVertical={2}
                    marginRight={5}
                    radius={5}
                >
                    <Txt
                        size={12}
                        color={'#fff'}
                        fontWeight={'600'}
                        fontFamily={fonts.MAINB}
                    >
                        HD
                    </Txt>
                </Box>
            </Box>
        </Box>
    )
}

export default React.memo(AnimeItem)