import React, { } from 'react'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import LottieView from 'lottie-react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
    t: any;
    theme: any;
}

const ModalLoading = ({ t, theme }: Props) => {
    return (
        <>
            <LottieView
                source={require('@lotties/loading_2.json')}
                autoPlay
                loop
                style={{ width: wp("50%"), height: hp("20%"), position: 'absolute', top: 0, alignSelf: 'center' }}
            />
            <Txt
                size={18}
                fontFamily={fonts.MAINB}
                color={theme === 'light' ? 'white' : 'black'}
                absolute
                style={{
                    bottom: hp("10%"),
                }}
                width={wp("60%")}
                center
            >
                {t('Please wait...')}
            </Txt>
            <Txt
                size={16}
                fontFamily={fonts.MAIN}
                color={theme === 'light' ? 'white' : 'black'}
                absolute
                style={{
                    bottom: 0,
                    marginBottom: 20,
                }}
                width={wp("60%")}
                center
            >
                {t('Application theme will be changing in a few seconds...')}
            </Txt>
        </>
    )
}

export default React.memo(ModalLoading)