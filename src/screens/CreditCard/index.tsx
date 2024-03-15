import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { useTheme } from '@hooks/redux'
import { useTranslation } from 'react-i18next'
import Scroll from '@common/Scroll'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Header from './Header'
import CreditCardForm from './CreditCardForm'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cardSchema } from './Validation/formValidation'
import CardInput from './Validation/CardInput'
import { formatCardNumber, formatExpiryDate } from './CreditCardForm'
import Box from '@common/Box'
import Txt from '@common/Txt'
import Dropdown from './Dropdown'
import { fonts } from '@themes/fonts'
import { Calendar } from 'iconsax-react-native'
import Btn from '@common/Btn'

const CreditCard = () => {
  const color = useTheme()
  const { t } = useTranslation()
  const [_, setSelectedBank] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [logo, setLogo] = React.useState('');
  const [error, setError] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [cardHolder, setCardHolder] = React.useState('')
  const [expiryDate, setExpiryDate] = React.useState('')
  const [nameBanking, setNameBanking] = React.useState('')
  const [fakeLoading, setFakeLoading] = React.useState<boolean>(true)
  const { handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(cardSchema)
  });
  const handleBankChange = async (value: any) => {
    try {
      setIsLoading(true);
      setSelectedBank(value);
      setNameBanking(value);
      setValue('bankName', value);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogoChange = async (value: any) => {
    setLogo(value);
  }
  const handleCardNumber = (value: string) => {
    const cardNumber = formatCardNumber(value);
    setCardNumber(cardNumber);
    setValue('cardNumber', value);
  }

  const handleCardHolder = (value: string) => {
    setCardHolder(value);
    setValue('cardHolderName', value);
  }

  const handleExpiryDate = (value: string) => {
    const expiryDate = formatExpiryDate(value);
    setExpiryDate(expiryDate);
    setValue('cardExpiryDate', value);
  }

  return (
    <KeyBoardSafe
      extraRollHeight={600}
    >
      <Scroll
        paddingVertical={hp(5)}
        paddingHorizontal={wp(5)}
        alignCenter
      >
        <Header t={t} color={color} />
        <CreditCardForm
          bankLogo={logo}
          onChangeCardNumber={handleCardNumber}
          onChangeCardHolder={handleCardHolder}
          onChangeExpiryDate={handleExpiryDate}
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expiryDate={expiryDate}
        />
        <Box height={1} width={'100%'} backgroundColor={color.line} marginTop={hp(2)} />
        <Box marginTop={hp(1)} width={'100%'}>
          <Dropdown onChange={handleBankChange} onLogoChange={handleLogoChange} />
          {errors.bankName && <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }} marginTop={7} bold>
            {t(`${errors.bankName?.message}`)}
          </Txt>}
          <Txt size={18} color={color.black} marginVertical={hp(2)} fontFamily={fonts.MAINB}>
            {t('Card Number')}
          </Txt>
          <CardInput
            placeholder={t('Card Number')}
            onChangeText={handleCardNumber}
            maxLength={19}
            value={cardNumber}
            keyboardType={'numeric'}
          />
          {errors.cardNumber && <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }} marginTop={7} bold>
            {t(`${errors.cardNumber?.message}`)}
          </Txt>}

          <Txt size={18} color={color.black} marginVertical={hp(2)} fontFamily={fonts.MAINB}>
            {t('Card Holder Name')}
          </Txt>
          <CardInput
            placeholder={t('Card Holder name')}
            onChangeText={handleCardHolder}
            maxLength={50}
            value={cardHolder}
          />
          {errors.cardHolderName && <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }} marginTop={7} bold>
            {t(`${errors.cardHolderName?.message}`)}
          </Txt>}

          <Box row width={'100%'} justifySpaceBetween>
            <Box width={'48%'}>
              <Txt size={18} color={color.black} marginVertical={hp(2)} fontFamily={fonts.MAINB}>
                {t('Expiry Date')}
              </Txt>
              <CardInput
                placeholder={t('Expiry Date')}
                onChangeText={handleExpiryDate}
                maxLength={5}
                value={expiryDate}
                icon={<Calendar size={20} color={color.white} />}
              />
              {errors.cardExpiryDate && <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }} marginTop={7} bold>
                {errors.cardExpiryDate?.message}
              </Txt>}
            </Box>

            <Box width={'48%'}>
              <Txt size={18} color={color.black} marginVertical={hp(2)} fontFamily={fonts.MAINB}>
                {t('CCV')}
              </Txt>
              <CardInput
                placeholder={t('CCV')}
                onChangeText={handleExpiryDate}
                maxLength={5}
                value={expiryDate}
              />
              {errors.cardExpiryDate && <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }} marginTop={7} bold>
                {errors.cardExpiryDate?.message}
              </Txt>}
            </Box>
          </Box>

          <Txt size={12} color={color.mainColor} paddingHorizontal={5} marginLeft={20} style={{ zIndex: -1 }}>
            {error}
          </Txt>
        </Box>

        <Btn
          width={wp('90%')}
          height={hp('7%')}
          radius={wp('10%')}
          row
          alignCenter
          justifyCenter
          backgroundColor={color.mainColor}
          // onPress={() => navigate(screens.CHOOSE_INTEREST)}
          marginTop={hp(5)}
        >
          <Txt
            size={wp('4%')}
            fontFamily={fonts.MAINB}
            color={color.white}
          >
            {t('Save Card')}
          </Txt>
        </Btn>

      </Scroll>
    </KeyBoardSafe>
  )
}

export default React.memo(CreditCard)

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