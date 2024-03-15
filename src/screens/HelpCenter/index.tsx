import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
import { width } from '@utils/responsive'
import { useTranslation } from 'react-i18next'
import Header3 from '@components/header/Header3'
import { useTheme } from '@hooks/redux'
import Tab from './Tab'

const HelpCenter = () => {
    const { t } = useTranslation()
    const color = useTheme()
    return (
        <KeyBoardSafe>
            <Scroll marginHorizontal={width * 0.05}>
                <Header3 title='Help Center' onPress={() => { }} type='more' />
                <Tab />
            </Scroll>
        </KeyBoardSafe>
    )
}

export default HelpCenter