import React from 'react'
import Box from '@common/Box'
import Txt from '@common/Txt'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '@themes/colors'
import { fonts } from '@themes/fonts'
import LazyLoadImg from '@common/LazyLoadImg';
import Btn from '@common/Btn';
interface TopHitsItemProps {
    item: any;
    style?: any;
    onPress?: () => void;
}

const TopHitsItem: React.FC<TopHitsItemProps> = ({ item, style, onPress }) => {
    return (
        <Btn
            onPress={onPress}
        >
            <Box
                width={wp('40%')}
                height={hp('25%')}
                marginRight={20}
                marginTop={20}
                style={style}
            >
                <Box
                    width={wp('40%')}
                    height={hp('25%')}
                    radius={13}
                    overflow={'hidden'}
                >
                    <LazyLoadImg
                        source={{
                            uri: item.images.jpg.image_url
                        }}
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
        </Btn>
    )
}

export default React.memo(TopHitsItem)