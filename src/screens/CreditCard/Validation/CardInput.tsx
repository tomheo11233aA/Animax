import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import Input from '@common/Input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeUserSelector } from '@redux/selector/appSelector';
import { useAppSelector } from '@hooks/redux';
import { useTheme } from '@hooks/redux';

interface CardInputProps {
    placeholder: string;
    onChangeText: (value: string) => void;
    icon?: any;
    maxLength?: number;
    value?: string;
    keyboardType?: any;
}

const CardInput: React.FC<CardInputProps> = ({
    placeholder,
    onChangeText,
    maxLength,
    value,
    keyboardType,
    icon
}) => {
    const theme = useAppSelector(themeUserSelector);
    const color = useTheme();
    return (
        <>
            <Input
                onChangeText={onChangeText}
                backgroundColor={theme === 'light' ? color.black3 : color.black3}
                radius={wp('5%')}
                height={hp(7)}
                width={'100%'}
                hint={placeholder}
                font={fonts.MAIN}
                hintColor={'#888888'}
                color={theme === 'light' ? color.bg : color.bg}
                value={value}
                maxLength={maxLength}
                keyboardType={keyboardType}
                isSvg
                iconTwo={icon}
            />
        </>
    );
};

export default React.memo(CardInput);
