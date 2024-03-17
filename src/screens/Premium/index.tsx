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
import Header1 from '@components/header/Header1'

const Premium = () => {
    const color = useTheme()
    const { t } = useTranslation()
    return (
        <KeyBoardSafe>
            <Scroll
                paddingHorizontal={wp(5)}
                alignCenter
            >
                <Header1 />

                <Txt size={32} fontFamily={fonts.MAINB}>
                    {t('Subrice to Premium!')}
                </Txt>

                <Txt marginTop={hp(2)} size={16} color={color.white} center>
                    {t('Enjoy watching Full-HD animes, without restrictions and without ads')}
                </Txt>

                <Item
                    color={color}
                    price={2500}
                    t={t}
                    type='monthly'
                />

                <Item
                    color={color}
                    price={20000}
                    t={t}
                    type='yearly'
                />

            </Scroll>
        </KeyBoardSafe>
    )
}

export default Premium