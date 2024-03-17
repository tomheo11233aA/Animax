import React from 'react';
import {
    StyleSheet, ImageBackground,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue, interpolateColor } from 'react-native-reanimated';
import { fonts } from '@themes/fonts';
import { colors } from '@themes/colors';
import { navigate } from '@utils/navigationRef';
import { screens } from '@contants/screens';
import Box from '@common/Box';
import { width, height } from '@utils/responsive';
import Txt from '@common/Txt';
import Btn100 from '@components/button/Btn100';

const images = [
    { id: 1, image: require('@images/background.png') },
    { id: 2, image: require('@images/background2.png') },
    { id: 3, image: require('@images/background3.png') }
];

const Onboarding = () => {
    const { t } = useTranslation()
    const progressValue = useSharedValue<number>(0);
    return (
        <Box flex={1}>
            <Carousel
                data={images}
                renderItem={({ item }) => (
                    <ImageBackground
                        source={item.image}
                        style={styles.backgroundImage}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                            style={styles.backgroundGradient}
                        />
                    </ImageBackground>
                )}
                width={width}
                height={height}
                autoPlay
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
            />

            <Box
                absolute
                bottom={0}
                width={width}
                height={height * 0.33}
                paddingHorizontal={width * 0.05}
            >
                <Txt
                    size={width * 0.13}
                    color={'white'}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                >
                    {t('Welcome to')} 👋
                </Txt>
                <Txt
                    size={width * 0.13}
                    color={colors.mainColor}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                    marginBottom={width * 0.03}
                >
                    {t('Animax')}
                </Txt>

                <Txt
                    color={'white'}
                    fontFamily={fonts.MAIN}
                    fontWeight={'400'}
                    size={width * 0.04}
                >
                    {t('The best streaming anime app of the century to entertain you every day.')}
                </Txt>
                <Btn100 title='Get Started' onPress={() => navigate(screens.HOWTOLOGIN)} marginTop={height * 0.02} />
            </Box>
        </Box>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    backgroundGradient: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
})