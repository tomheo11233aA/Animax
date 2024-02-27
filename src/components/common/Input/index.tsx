import { getSize } from '@utils/responsive';
import { isNumber } from 'lodash';
import React, { forwardRef, useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMargin, handlePadding, handleRound, handleSquare } from '../shared';
import styles from '@common/Box/styles';
import Box from '@common/Box';
import Btn from '@common/Btn';
import Img from '@common/Img';
import Txt from '@common/Txt';
import { useTheme } from '@hooks/redux';
import { colors } from '@themes/colors';
import { TextInputFocusEventData, NativeSyntheticEvent } from 'react-native';

const Input = forwardRef<TextInput, Props>(({
    readonly,
    value,
    onChangeText,
    hint,
    hintColor = '#6666',
    security,
    font,
    fontSize = 16,
    iconOne,
    iconTwo,
    onPress,
    tintColor,
    sizeIcon = 25,
    onFocus,
    onBlur,
    color = 'black',
    textAlign = 'left',
    keyboardType = 'default',
    autoCapitalize = 'none',
    fontWeight,
    disabled = true,
    flex,
    flexShrink,
    flexGrow,
    row,
    column,
    shadow,
    backgroundColor,
    space,
    padding,
    margin,
    alignStart,
    alignCenter,
    alignEnd,
    wrap,
    justifyCenter,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceBetween,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal = 20,
    marginVertical,
    marginHorizontal,
    radius,
    height,
    width,
    square,
    round,
    borderWidth,
    relative,
    absolute,
    top,
    left,
    right,
    bottom,
    borderColor,
    children,
    overflow,
    alignSelf,
    style,
    shadowColor,
    opacity,
    elevation,
    maxWidth,
    maxHeight,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    isPaddingIos,
    isPaddingAdnroid,
    zIndex,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    coin,
    returnKeyType,
    onSubmitEditing,
    ...rest
}: Props, ref) => {
    const insets = useSafeAreaInsets();
    const myColor = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        onFocus && onFocus(e);
    }
    const onBlurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
    };
    const backgroundColors = isFocused ? '#EBFAF1' : (backgroundColor ? backgroundColor : myColor.black4)
    const myBoderColor = isFocused ? colors.mainColor : (borderColor ? borderColor : myColor.black4);
    const tintColors = isFocused ? colors.mainColor : (tintColor ? tintColor : myColor.black);
    const blockStyles = [
        isPaddingAdnroid && { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        isPaddingIos && {
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : getSize.m(20),
        },
        { color: color },
        flex && styles.block,
        flexShrink && styles.flexShrink,
        flexGrow && styles.flexGrow,
        !flex && { flex: 0 },
        maxWidth && { maxWidth },
        maxHeight && { maxHeight },
        width && { width: width },
        height && { height: height },
        font && { fontFamily: font },
        fontSize && { fontSize: fontSize },
        row && styles.row,
        column && styles.column,
        shadow && {
            ...styles.shadow,
            shadowColor: shadowColor,
            elevation: elevation || 3,
        },
        wrap && { flexWrap: 'wrap' },
        { backgroundColor: backgroundColors },
        padding && { ...handlePadding(getSize.m(padding)) },
        margin && { ...handleMargin(getSize.m(margin)) },
        alignStart && styles.alignStart,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        justifyCenter && styles.justifyCenter,
        justifyStart && styles.justifyStart,
        justifyEnd && styles.justifyEnd,
        justifySpaceAround && styles.justifySpaceAround,
        justifySpaceBetween && styles.justifySpaceBetween,
        space && { justifyContent: `space-${space}` },
        paddingTop && { paddingTop: getSize.m(paddingTop) },
        paddingRight && { paddingRight: getSize.m(paddingRight) },
        paddingBottom && { paddingBottom: getSize.m(paddingBottom) },
        paddingLeft && { paddingLeft: getSize.m(paddingLeft) },
        marginBottom && { marginBottom: getSize.m(marginBottom) },
        marginRight && { marginRight: getSize.m(marginRight) },
        marginLeft && { marginLeft: getSize.m(marginLeft) },
        paddingHorizontal && { paddingHorizontal: getSize.m(paddingHorizontal) },
        paddingVertical && { paddingVertical: getSize.m(paddingVertical) },
        marginHorizontal && { marginHorizontal: getSize.m(marginHorizontal) },
        marginVertical && { marginVertical: getSize.m(marginVertical) },
        radius && { borderRadius: getSize.s(radius) },
        borderWidth && { borderWidth: borderWidth },
        square && { ...handleSquare(getSize.s(square)) },
        round && { ...handleRound(getSize.s(round)) },
        isNumber(opacity) && { opacity: opacity },
        { borderColor: myBoderColor },
        relative && { position: 'relative' },
        absolute && { position: 'absolute' },
        isNumber(top) && { top: getSize.v(top) },
        isNumber(left) && { left: getSize.s(left) },
        isNumber(right) && { right: getSize.s(right) },
        isNumber(bottom) && { bottom: getSize.v(bottom) },
        overflow && { overflow },
        alignSelf && { alignSelf },
        borderTopWidth && { borderTopWidth },
        borderRightWidth && { borderRightWidth },
        borderBottomWidth && { borderBottomWidth },
        borderLeftWidth && { borderLeftWidth },
        zIndex && { zIndex },
        borderBottomLeftRadius && { borderBottomLeftRadius },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderTopRightRadius && { borderTopRightRadius },
        { ...StyleSheet.flatten(style) },
    ];

    return (
        <Box
            row
            width={width}
            height={height}
            marginTop={marginTop}
            marginBottom={marginBottom}
            style={blockStyles} {...rest}
        >
            {iconOne &&
                <Box
                    alignCenter
                    justifyCenter
                    height={'100%'}
                >
                    <Image
                        source={iconOne}
                        style={{
                            width: sizeIcon,
                            height: sizeIcon,
                            marginRight: getSize.m(10),
                        }}
                        tintColor={tintColors}
                    />
                </Box>
            }
            <TextInput
                style={{
                    flex: 1,
                    color: color,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    fontFamily: font,
                    width: '100%',
                }}
                value={value}
                onChangeText={onChangeText}
                placeholder={hint}
                placeholderTextColor={hintColor}
                secureTextEntry={security ? true : false}
                keyboardType={keyboardType}
                editable={readonly ? false : true}
                autoCapitalize={autoCapitalize}
                textAlign={textAlign}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                ref={ref}
            />
            {iconTwo &&
                <Btn
                    onPress={onPress}
                    height={'100%'}
                >
                    <Img
                        source={iconTwo}
                        tintColor={tintColor}
                        style={{
                            width: sizeIcon,
                            height: sizeIcon,
                        }}
                    />
                </Btn>
            }
            {coin &&
                <Btn
                    onPress={onPress}
                    height={'100%'}
                >
                    <Txt
                        center
                        justify={'center'}
                        alignSelf={'center'}
                    >
                        {coin}
                    </Txt>
                </Btn>
            }
        </Box>
    );
});

export default React.memo(Input);

interface Props {
    returnKeyType?: 'done' | 'next' | 'go';
    onSubmitEditing?: () => void;
    value?: any,
    onChangeText?: any,
    hint?: any,
    font?: any,
    selectionColor?: any,
    fontSize?: any,
    hintColor?: any,
    security?: any,
    iconOne?: any,
    iconTwo?: any,
    onPress?: any,
    onFocus?: any,
    onBlur?: any,
    color?: any,
    sizeIcon?: any,
    textAlign?: any,
    keyboardType?: any,
    autoCapitalize?: any,
    disabled?: any,
    flex?: any,
    flexShrink?: any,
    flexGrow?: any,
    row?: any,
    column?: any,
    shadow?: any,
    backgroundColor?: any,
    space?: any,
    padding?: any,
    margin?: any,
    alignStart?: any,
    alignCenter?: any,
    alignEnd?: any,
    wrap?: any,
    justifyCenter?: any,
    justifyEnd?: any,
    justifyStart?: any,
    justifySpaceAround?: any,
    justifySpaceBetween?: any,
    borderBottomLeftRadius?: any,
    paddingTop?: any,
    fontWeight?: any,
    paddingBottom?: any,
    paddingLeft?: any,
    paddingRight?: any,
    marginBottom?: any,
    marginLeft?: any,
    marginRight?: any,
    marginTop?: any,
    paddingVertical?: any,
    tintColor?: any,
    paddingHorizontal?: any,
    marginVertical?: any,
    marginHorizontal?: any,
    radius?: any,
    height?: any,
    width?: any,
    square?: any,
    round?: any,
    borderWidth?: any,
    relative?: any,
    absolute?: any,
    top?: any,
    left?: any,
    right?: any,
    bottom?: any,
    borderColor?: any,
    children?: any,
    overflow?: any,
    alignSelf?: any,
    style?: any,
    shadowColor?: any,
    opacity?: any,
    elevation?: any,
    maxWidth?: any,
    maxHeight?: any,
    borderTopWidth?: any,
    borderRightWidth?: any,
    borderBottomWidth?: any,
    borderLeftWidth?: any,
    isPaddingIos?: any,
    isPaddingAdnroid?: any,
    zIndex?: any,
    borderTopLeftRadius?: any,
    borderTopRightRadius?: any,
    readonly?: boolean,
    coin?: any,
}


