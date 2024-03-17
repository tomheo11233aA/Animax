import React, { useEffect, useRef } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { useTheme } from '@hooks/redux'
import { useTranslation } from 'react-i18next'
import Scroll from '@common/Scroll'
import { generateHMACSHA256 } from '@utils/createHMACSHA256'
import { CHECK_SUM_KEY, CANCEL_URL, RETURN_URL, BASE_BANK_URL, X_CLIENT_ID, X_API_KEY } from '@env'
import { height, width } from '@utils/responsive'
import { CreatePaymentLinkRequest } from 'src/model/bank'
import Header2 from '@components/header/Header2'
import { localStorage } from '@utils/localStorage'
import Item from './Item'
import axios from 'axios'
import { payosValidation } from './Validation/payosValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import Form from './Form'
import Btn100 from '@components/button/Btn100'
import moment from 'moment';
import { Portal, Modal } from 'react-native-paper'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import LottieView from 'lottie-react-native'
import { Linking } from 'react-native'

const Payment = () => {
    const color = useTheme()
    const { t } = useTranslation()
    const type = localStorage.getString('type') || 'monthly'
    const [amount, setAmount] = React.useState('')
    useEffect(() => {
        if (type === 'monthly') {
            setAmount('2500')
        } else {
            setAmount('20000')
        }
    }, [])
    const { handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(payosValidation)
    });
    const [buyerName, setBuyerName] = React.useState('')
    const [buyerEmail, setBuyerEmail] = React.useState('')
    const [buyerPhone, setBuyerPhone] = React.useState('')
    const orderCode = Math.floor(Math.random() * 1000000).toString()
    const amountRef = useRef<any>(null);
    const descriptionRef = useRef<any>(null);
    const buyerEmailRef = useRef<any>(null);
    const buyerPhoneRef = useRef<any>(null);
    const [loading, setLoading] = React.useState(false)
    const expiryDate: any = moment().add(10, 'minutes').unix()
    const [visible, setVisible] = React.useState(false)
    const [checkoutUrl, setCheckoutUrl] = React.useState('');

    const handleCreatePaymentLink = async (inputData: any) => {
        setLoading(true)
        const { description } = inputData
        const data: CreatePaymentLinkRequest = {
            amount: Number(amount),
            description: description,
            orderCode: parseInt(orderCode),
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            buyerPhone: buyerPhone,
            cancelUrl: CANCEL_URL,
            returnUrl: RETURN_URL,
            signature: generateHMACSHA256({
                amount: amount,
                cancelUrl: CANCEL_URL,
                description: description,
                orderCode: orderCode,
                returnUrl: RETURN_URL
            }, CHECK_SUM_KEY),
            expiredAt: expiryDate
        }
        console.log(data)
        axios.post(BASE_BANK_URL + 'v2/payment-requests', data, {
            headers: {
                'x-client-id': X_CLIENT_ID,
                'x-api-key': X_API_KEY
            }
        }).then((res) => {
            if (res.data.code == '00') {
                setVisible(true)
                setCheckoutUrl(res.data.data.checkoutUrl)
            }

        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <KeyBoardSafe>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    contentContainerStyle={{
                        backgroundColor: color.bg3,
                        padding: width * 0.05,
                        margin: width * 0.05,
                        borderRadius: width * 0.05
                    }}
                >
                    <LottieView
                        source={require('@lotties/loading_3.json')}
                        autoPlay
                        loop
                        style={{
                            width: width * 0.5,
                            height: width * 0.5,
                            alignSelf: 'center'
                        }}
                    />
                    <Txt size={20} color={color.mainColor} fontFamily={fonts.MAINB} center marginVertical={height * 0.02}>
                        {t('Please wait...')}
                    </Txt>

                    <Txt size={16} color={color.white} center>
                        {t('Plese make sure you pay before the expired time')} <Txt size={16} color={color.mainColor} fontFamily={fonts.MAINB}>{moment.unix(expiryDate).format('HH:mm:ss')}</Txt>
                    </Txt>
                    <Btn100
                        title={t('Pay now')}
                        onPress={() => Linking.openURL(checkoutUrl)}
                        marginTop={height * 0.02}
                    />
                </Modal>
            </Portal>
            <Scroll
                alignCenter
                paddingHorizontal={width * 0.03}
            >
                <Header2 title='Paymnet' />
                <Item
                    color={color}
                    price={Number(amount)}
                    t={t}
                    type={type as 'monthly' | 'yearly'}
                />
                <Form
                    color={color}
                    buyerName={buyerName}
                    setBuyerName={setBuyerName}
                    buyerEmail={buyerEmail}
                    setBuyerEmail={setBuyerEmail}
                    buyerPhone={buyerPhone}
                    setBuyerPhone={setBuyerPhone}
                    setValue={setValue}
                    amountRef={amountRef}
                    buyerEmailRef={buyerEmailRef}
                    buyerPhoneRef={buyerPhoneRef}
                    descriptionRef={descriptionRef}
                    errors={errors}
                />

                <Btn100
                    isLoading={loading}
                    title={t('Pay')}
                    onPress={handleSubmit(handleCreatePaymentLink)}
                />
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(Payment)