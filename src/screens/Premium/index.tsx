import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Btn from '@common/Btn'
import { useTheme } from '@hooks/redux'
import { ArrowLeft } from 'iconsax-react-native'
import { useTranslation } from 'react-i18next'
import Scroll from '@common/Scroll'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Txt from '@common/Txt'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import Item from './Item'

const Premium = () => {
    const color = useTheme()
    const { t } = useTranslation()
    return (
        <KeyBoardSafe>
            <Scroll
                paddingVertical={hp(5)}
                paddingHorizontal={wp(5)}
                alignCenter
            >
                <Btn
                    row
                    padding={10}
                    alignStart
                    style={{
                        alignSelf: 'flex-start'
                    }}
                    onPress={() => goBack()}
                >
                    <ArrowLeft size={wp(5)} color={color.white} />
                </Btn>

                <Txt marginTop={hp(3)} size={32} fontFamily={fonts.MAINB}>
                    {t('Subrice to Premium!')}
                </Txt>

                <Txt marginTop={hp(2)} size={16} color={color.white} center>
                    {t('Enjoy watching Full-HD animes, without restrictions and without ads')}
                </Txt>

                <Item
                    color={color}
                    price={25000}
                    t={t}
                    type='monthly'
                />

                <Item
                    color={color}
                    price={200000}
                    t={t}
                    type='yearly'
                />

            </Scroll>
        </KeyBoardSafe>
    )
}

export default Premium