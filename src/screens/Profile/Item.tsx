import Box from '@common/Box'
import Icon from '@common/Icon'
import Txt from '@common/Txt'
import { colors } from '@themes/colors'
import React, { useEffect } from 'react'
import { IOption } from './List'
import { TouchableOpacity } from 'react-native'
import { ArrowRight2 } from 'iconsax-react-native'
import { useTheme } from '@hooks/redux'
import { fonts } from '@themes/fonts'
import { Switch } from 'react-native-paper'
import { useAppSelector } from '@hooks/redux'
import { themeUserSelector } from '@redux/selector/appSelector'

interface Props {
    item: IOption;
    t: any;
    onClick?: () => void;
}

const Item = ({ item, t, onClick }: Props) => {
    const color = useTheme()
    const theme = useAppSelector(themeUserSelector)
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    useEffect(() => {
        setIsSwitchOn(theme === 'light' ? false : true)
    }, [theme])
    return (
        <TouchableOpacity onPress={onClick}>
            <Box
                row
                alignCenter
                key={item.title}
                justifySpaceBetween
                paddingHorizontal={10}
                paddingVertical={10}
                borderColor={colors.gray}
            >
                <Box row alignCenter marginBottom={3}>
                    {item.icon}
                    {item.title === 'Logout' ? <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB} color={'red'}>{t(item.title)}</Txt> : <Txt marginLeft={20} size={16} fontFamily={fonts.MAINB}>{t(item.title)}</Txt>}
                </Box>
                <Box row>
                    {item.selectedLanguage && <Txt size={16} marginRight={10}>{item.selectedLanguage}</Txt>}
                    {item.title === 'Dark Mode' ? <Switch
                        value={isSwitchOn}
                        onChange={() => {
                            setIsSwitchOn(!isSwitchOn);
                            onClick && onClick();
                        }}
                        color={colors.mainColor}
                    /> : <ArrowRight2 size={20} color={color.black} />}

                </Box>

            </Box>
        </TouchableOpacity>
    )
}

export default React.memo(Item)