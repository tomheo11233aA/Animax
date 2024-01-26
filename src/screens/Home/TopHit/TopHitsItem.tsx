import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Img from '@common/Img'
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'

interface TopHitsItemProps {
    item: any;
    style?: any;
}

const TopHitsItem: React.FC<TopHitsItemProps> = ({ item, style }) => {
    return (
        <Box
            width={wp('40%')}
            height={hp('25%')}
            marginLeft={15}
            marginTop={20}
            style={style}
        >
            <Box
                width={wp('40%')}
                height={hp('25%')}
                radius={13}
                overflow={'hidden'}
            >
                <Img
                    source={{ uri: item.image }}
                    width={wp('40%')}
                    height={hp('25%')}
                    resizeMode='cover'
                />
            </Box>
            <Box
                absolute={true}
                top={hp('2%')}
                left={wp('3%')}
                width={wp('35%')}
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
                        {item.rating}
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

export default React.memo(TopHitsItem)