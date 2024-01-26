import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Btn from '@common/Btn'
import Icon from '@common/Icon'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { useTranslation } from 'react-i18next'

interface BannerProps {
    banner: any,
    formatName: (name: string) => string,
    formatCategory: (category: string) => string,
    t: any,
}

const Banner: React.FC<BannerProps> = ({
    banner,
    formatName,
    formatCategory,
    t,
}) => {
    return (
        <Box
            height={'100%'}
        >
            <ImageBackground
                source={{ uri: banner.image }}
                style={styles.backgroundImage}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['rgba(0, 0, 0, 0)', 'rgba(20, 0, 20, 3)']}
                    style={styles.backgroundGradient}
                />
                <Box
                    absolute
                    bottom={0}
                    left={0}
                    right={0}
                    marginLeft={20}
                    marginBottom={20}
                >
                    <Txt
                        color={'#fff'}
                        size={25}
                        fontFamily={fonts.MAINB}
                        fontWeight={'600'}
                    >
                        {formatName(banner.name)}
                    </Txt>
                    <Txt
                        color={'#fff'}
                        size={13}
                        marginTop={10}
                    >
                        {formatCategory(banner.category)}
                    </Txt>

                    <Box row marginTop={20}>
                        <Btn
                            radius={100}
                            backgroundColor={colors.mainColor}
                            paddingHorizontal={20}
                            paddingVertical={7}
                        >
                            <Box
                                row
                                alignCenter
                            >
                                <Icon
                                    source={require('@images/auth/play-circle.png')}
                                    size={15}
                                />
                                <Txt
                                    size={12}
                                    color={'#fff'}
                                    marginLeft={15}
                                    fontFamily={fonts.MAINB}
                                    fontWeight={'600'}
                                >
                                    {t('Play')}
                                </Txt>
                            </Box>

                        </Btn>

                        <Btn
                            radius={100}
                            paddingHorizontal={15}
                            paddingVertical={7}
                            borderColor={'#fff'}
                            borderWidth={2}
                            marginLeft={10}
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
            </ImageBackground>
        </Box>
    )
}

export default React.memo(Banner)

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    backgroundGradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
})