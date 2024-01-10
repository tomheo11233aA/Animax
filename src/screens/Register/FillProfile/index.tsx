// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import Scroll from '@common/Scroll';
// import { fillProfileSchema } from './Validation/formValidation';
// import Box from '@common/Box';
// import Btn from '@common/Btn';
// import Txt from '@common/Txt';
// import { colors } from '@themes/colors';
// import { fonts } from '@themes/fonts';
// import { useTranslation } from 'react-i18next';
// import { navigate } from '@utils/navigationRef';
// import { screens } from '@contants/screens';
// import { useAppSelector } from '@hooks/redux';
// import { themeUserSelector } from '@redux/selector/appSelector';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const FillProfile = () => {
//   const { handleSubmit, formState: { errors }, setValue } = useForm({
//     resolver: yupResolver(fillProfileSchema)
//   });
//   const { t } = useTranslation();
//   const theme = useAppSelector(themeUserSelector);
//   const handleContinue = () => {
//     navigate(screens.FORGOT_PASSWORD)
//   }
//   return (
//     <Scroll
//       backgroundColor={'#ffffff'}
//       padding={24}
//       showsVerticalScrollIndicator={false}
//     >
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Image
//             source={require('@images/back.png')} />
//           <Text style={styles.headerText}>Fill Your Profile</Text>
//         </View>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={require('@images/avatar.png')}
//             style={styles.avatar}
//           />
//           <TouchableOpacity style={styles.editButton}>
//             <Text style={styles.editButtonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <TextInput
//           onChangeText={text => setValue('fullName', text)}
//           placeholder="Name"
//           style={styles.input}
//         />
//         <Text style={styles.errors}>{errors.fullName?.message}</Text>
//         <TextInput
//           onChangeText={text => setValue('email', text)}
//           placeholder="Email"
//           style={styles.input}
//         />
//         <Text style={styles.errors}>{errors.email?.message}</Text>
//         <TextInput
//           onChangeText={text => setValue('nickName', text)}
//           placeholder="Nick Name"
//           style={styles.input}
//         />
//         <Text style={styles.errors}>{errors.nickName?.message}</Text>
//         <TextInput
//           onChangeText={text => setValue('phoneNumber', text)}
//           placeholder="Phone Number"
//           style={styles.input}
//         />
//         <Text style={styles.errors}>{errors.phoneNumber?.message}</Text>
//         <TextInput
//           onChangeText={text => setValue('gender', text)}
//           placeholder="Gender"
//           style={styles.input}
//         />
//         <Text style={styles.errors}>{errors.gender?.message}</Text>

//         <Box marginTop={15} row justifyCenter style={{ justifyContent: 'space-between' }}>
//           <Btn
//             width={'48%'}
//             padding={wp('4%')}
//             radius={wp('8%')}
//             backgroundColor={theme === 'light' ? colors.lMainColor2 : colors.black3}
//             onPress={() => navigate(screens.FORGOT_PASSWORD)}
//           >
//             <Txt
//               // color={theme === 'light' ? colors.mainColor : colors.white}
//               size={14}
//               fontWeight={'bold'}
//               fontFamily={fonts.MAIN}
//             >
//               {t('Skip')}
//             </Txt>
//           </Btn>
//           <Btn
//             width={'48%'}
//             radius={wp('8%')}
//             backgroundColor={colors.mainColor}
//             shadow
//             shadowColor={'#41ab67'}
//             elevation={5}
//             onPress={handleSubmit(handleContinue)}
//           >
//             <Txt
//               color={colors.white}
//               size={14}
//               fontWeight={'bold'}
//               fontFamily={fonts.MAIN}
//             >
//               {t('Continue')}
//             </Txt>
//           </Btn>
//         </Box>
//       </View>
//     </Scroll>
//   )
// }

// export default FillProfile

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',

//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingLeft: 20
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     marginBottom: 50,
//     paddingTop: 20
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 30,
//   },
//   editButton: {
//     position: 'absolute',
//     backgroundColor: 'green',
//     right: 110,
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 90
//   },
//   editButtonText: {
//     color: '#fff',
//     fontSize: 24
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   buttonSkip: {
//     marginTop: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,

//   },
//   errors: {
//     color: '#e3242b',
//     paddingBottom: 20,
//     marginTop: -10,
//   },
// })

import React from 'react'
import Header from './Header'
import Form from './Form'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Scroll from '@common/Scroll'
const FillProfile = () => {
  return (
    <KeyBoardSafe>
      <Scroll
        style={{
          justifyContent: 'space-between'
        }}
        padding={24}
        flex={1}>
        <Header />
        <Form />
      </Scroll>

    </KeyBoardSafe>
  )
}

export default FillProfile
