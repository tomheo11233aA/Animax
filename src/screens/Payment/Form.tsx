import React, { } from 'react'
import { fonts } from '@themes/fonts'
import { width, height } from '@utils/responsive'
import Input from '@common/Input'
import Txt from '@common/Txt'

interface Props {
    color: any,
    buyerName: string,
    setBuyerName: (text: string) => void,
    buyerEmail: string,
    setBuyerEmail: (text: string) => void,
    buyerPhone: string,
    setBuyerPhone: (text: string) => void,
    setValue: any,
    amountRef: any,
    buyerEmailRef: any,
    buyerPhoneRef: any,
    descriptionRef: any,
    errors: any
}

const Form = (props: Props) => {
    const {
        color,
        buyerName,
        setBuyerName,
        buyerEmail,
        setBuyerEmail,
        buyerPhone,
        setBuyerPhone,
        setValue,
        amountRef,
        buyerEmailRef,
        buyerPhoneRef,
        descriptionRef,
        errors
    } = props
    return (
        <>
            <Input
                marginTop={height * 0.02}
                backgroundColor={color.black2}
                radius={width * 0.04}
                height={height * 0.07}
                borderWidth={1}
                hint={'Full name'}
                font={fonts.MAIN}
                hintColor={color.grayBlue}
                color={color.black}
                onChangeText={setBuyerName}
                value={buyerName}
                returnKeyType='next'
                onSubmitEditing={() => descriptionRef.current?.focus()}
                ref={amountRef}
            />
            <Input
                marginTop={height * 0.02}
                backgroundColor={color.black2}
                radius={width * 0.04}
                height={height * 0.07}
                borderWidth={1}
                hint={'Email'}
                font={fonts.MAIN}
                hintColor={color.grayBlue}
                color={color.black}
                onChangeText={setBuyerEmail}
                value={buyerEmail}
                returnKeyType='next'
                onSubmitEditing={() => buyerPhoneRef.current?.focus()}
                ref={buyerEmailRef}
                keyboardType={'email-address'}
            />

            <Input
                marginTop={height * 0.02}
                backgroundColor={color.black2}
                radius={width * 0.04}
                height={height * 0.07}
                borderWidth={1}
                hint={'Phone'}
                font={fonts.MAIN}
                hintColor={color.grayBlue}
                color={color.black}
                onChangeText={setBuyerPhone}
                value={buyerPhone}
                returnKeyType='next'
                ref={buyerPhoneRef}
                keyboardType={'phone-pad'}
                onSubmitEditing={() => descriptionRef.current?.focus()}
            />

            <Input
                marginTop={height * 0.02}
                backgroundColor={color.black2}
                radius={width * 0.04}
                height={height * 0.07}
                borderWidth={1}
                hint={'Description'}
                font={fonts.MAIN}
                hintColor={color.grayBlue}
                color={color.black}
                onChangeText={(text: string) => setValue('description', text)}
                returnKeyType='done'
                ref={descriptionRef}
            />
            {errors.description && <Txt color={'red'} alignSelf={'flex-start'} marginTop={height * 0.01}>
                {'*'} {errors.description.message}
            </Txt>}
        </>
    )
}

export default Form