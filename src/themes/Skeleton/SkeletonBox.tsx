import React from 'react'
import Box from '@common/Box'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SkeletonBox = () => {
    return (
        <Box
            marginBottom={20}
            marginLeft={5}
            row
        >
            <Box
                width={wp('40%')}
                height={hp('25%')}
                backgroundColor={'white'}
                radius={10}
            />
            <Box
                width={wp('40%')}
                height={hp('25%')}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
            <Box
                width={wp('40%')}
                height={hp('25%')}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
            <Box
                width={wp('40%')}
                height={hp('25%')}
                backgroundColor={'white'}
                radius={10}
                marginLeft={20}
            />
        </Box>
    )
}

export default React.memo(SkeletonBox)
