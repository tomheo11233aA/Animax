import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Btn from '@common/Btn'
import { useTheme } from '@hooks/redux'
import { ArrowLeft, Scanner } from 'iconsax-react-native'
import { useTranslation } from 'react-i18next'
import Scroll from '@common/Scroll'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Txt from '@common/Txt'
import { goBack } from '@utils/navigationRef'
import { fonts } from '@themes/fonts'
import Box from '@common/Box'
import Header from './Header'
import CreditCardForm from '../CreditCard/CreditCardForm'
import { screens } from '@contants/screens'
import { navigate } from '@utils/navigationRef'

const Payment = () => {
    const color = useTheme()
    const { t } = useTranslation()
    return (
        <KeyBoardSafe>
            <Scroll
                paddingVertical={hp(5)}
                paddingHorizontal={wp(5)}
                alignCenter
            >
                <Header t={t} color={color} />
                <Txt marginTop={hp(3)} width={'100%'}>
                    {t('Select the payment method you want to use.')}
                </Txt>
                <Btn
                    width={'100%'}
                    padding={wp('4%')}
                    radius={wp('8%')}
                    backgroundColor={'green'}
                    onPress={() => navigate(screens.CREDITCARD_INPUT)}
                >
                    <Txt
                        size={14}
                        fontWeight={'bold'}
                        fontFamily={fonts.MAIN}
                    >
                        {t('Skip')}
                    </Txt>
                </Btn>
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(Payment)


var fakeData = [
    {
        "id": 1,
        "name_banking": "Vietcombank",
        "owner_banking": "Nguyen Van A",
        "number_banking": "123456789",
        "expire_date": "12/2023",
        "cvv": "123"
    },
    {
        "id": 2,
        "name_banking": "Vietcombank",
        "owner_banking": "Nguyen Van A",
        "number_banking": "123456789",
        "expire_date": "12/2023",
        "cvv": "123"
    },
    {
        "id": 3,
        "name_banking": "Vietcombank",
        "owner_banking": "Nguyen Van A",
        "number_banking": "123456789",
        "expire_date": "12/2023",
        "cvv": "123"
    },
    {
        "id": 4,
        "name_banking": "Vietcombank",
        "owner_banking": "Nguyen Van A",
        "number_banking": "123456789",
        "expire_date": "12/2023",
        "cvv": "123"
    }
]