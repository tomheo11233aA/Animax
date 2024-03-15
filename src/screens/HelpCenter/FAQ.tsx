import React, { useState } from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { height, width } from '@utils/responsive'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import Input from '@common/Input'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@hooks/redux'
import { SearchNormal1, Setting4, ArrowDown2 } from 'iconsax-react-native'
import { SVG_ICON_SIZE } from '@themes/styled'
import Item from './Item'
import { faqData } from '@utils/fakeData'

const FAQ = () => {
    const { t } = useTranslation()
    const color = useTheme()
    const [search, setSearch] = useState<string>('')
    const [isShow, setIsShow] = useState<{ [key: number]: boolean }>({})
    const toggleShow = (id: number) => {
        setIsShow(prev => ({ ...prev, [id]: !prev[id] }))
    }
    const filteredData = faqData.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()))
    return (
        <KeyBoardSafe>
            <Scroll>
                <Input
                    borderWidth={1}
                    height={height * 0.07}
                    hint={t('Search...')}
                    hintColor={'#5f5f5f'}
                    backgroundColor={color.bg2}
                    radius={width * 0.05}
                    color={color.white}
                    value={search}
                    onChangeText={(text: string) => setSearch(text)}
                    marginTop={height * 0.02}
                    isSvg
                    iconOne={<SearchNormal1 color={color.white} size={SVG_ICON_SIZE} />}
                    iconTwo={<Setting4 color={color.mainColor} size={SVG_ICON_SIZE} />}
                />

                {filteredData.map(({ id, title, content }) => (
                    <Item
                        color={color}
                        id={id}
                        title={title}
                        content={content}
                        isShow={isShow}
                        toggleShow={toggleShow}
                        t={t}
                        key={id}
                    />
                ))}
            </Scroll>
        </KeyBoardSafe>
    )
}

export default React.memo(FAQ)