import { Dimensions } from 'react-native'
import React from 'react'
import Box from '@common/Box'
import Img from '@common/Img'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import Icon from '@common/Icon'
import { fonts } from '@themes/fonts'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface Props {
    item: any,
    theme: any,
    t: any,
    formatName: (name: string) => string,
    formatCategory: (category: string) => string,
}


const { width } = Dimensions.get('window')
const height = Dimensions.get('window').height

const AnimeItem: React.FC<Props> = ({ item, theme, t, formatName, formatCategory }) => {
    return (
        <Box
            width={width / 2}
            paddingVertical={hp(1.5)}
            marginHorizontal={hp(2.5)}
            row
        >
            <Img
                width={width / 2 - 30}
                height={height / 3.8}
                radius={10}
                source={{ uri: item.images.jpg.image_url }}
            ></Img>

            <Box
                marginLeft={wp(5)}
                width={width / 2 - 10}
                style={{
                    justifyContent: 'space-around',
                }}
            >
                <Txt
                    size={20}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                    color={theme.black}
                >
                    {formatName(item.title)}
                </Txt>
                <Txt
                    size={15}
                    color={theme.black}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                >
                    {item.aired.from ? new Date(item.aired.from).getFullYear() : 'N/A'}
                    {' | '}{t('Japan')}
                </Txt>
                <Txt
                    size={14}
                    color={theme.black}
                >
                    {t('Genre')}: {formatCategory(item.genres.map((genre: any) => genre.name).join(', '))}
                </Txt>
                <Btn
                    paddingVertical={hp(1.2)}
                    backgroundColor={theme.mainColor}
                    width={wp(30)}
                    radius={50}
                >
                    <Box
                        row
                        alignCenter
                    >
                        <Icon
                            source={require('@images/plus-sign.png')}
                            size={15}
                        />
                        <Txt
                            size={12}
                            color={'#fff'}
                            marginLeft={15}
                            fontFamily={fonts.MAINB}
                            fontWeight={'600'}
                        >
                            {t('My List')}
                        </Txt>
                    </Box>
                </Btn>
            </Box>
        </Box>
    )
}

export default React.memo(AnimeItem)