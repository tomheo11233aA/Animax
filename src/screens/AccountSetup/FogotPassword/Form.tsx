import Box from '@common/Box'
import Img from '@common/Img'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useState, useCallback, Suspense } from 'react'
import Txt from '@common/Txt'
import { fonts } from '@themes/fonts'
import { t } from 'i18next'
import { IconButton } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native'
import Icon from '@common/Icon'

const Form = () => {
  return (
    <Box>
      <Img
        source={require('@images/forgot-password.png')}
        alignSelf={'center'}
        width={wp('60%')}
        height={hp('30%')}
        top={40}
      />
      <Txt
        fontFamily={fonts.MAIN}
        size={17}
        marginLeft={16}
        marginTop={70}
        marginBottom={10}
      >
        {t('Select which contact details should we use to reset your password')}
      </Txt>


      <View style={styles.infoBox}>
        <View style={styles.iconContainer}>
        <Icon
                source={require('@images/message.png')}
                size={25} 
                tintColor="#41ab67"
                />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>via SMS:</Text>
          <Text style={styles.phoneNumber}>+1 111 *****99</Text>
        </View>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.iconContainer}>
        <Icon
                source={require('@images/email.png')}
                size={25} 
                tintColor="#41ab67"
                />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>via Email:</Text>
          <Text style={styles.email}>and**ley@yourdomain.com</Text>
        </View>
      </View>

      {/* <View style={styles.infoContainer}>
      <Icon
                source={require('@images/Group.png')}
                size={25} 
                tintColor="#41ab67"
                />
        <Text style={styles.text}>via SMS:</Text>
        <Text style={styles.phoneNumber}>+1 111 *****99</Text>
      </View> */}

    </Box>

  )
}

const styles = StyleSheet.create({
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#00FF00',
  },
  iconContainer: {
    backgroundColor: '#00FF00', 
    padding: 10,
    borderRadius: 50,
    marginRight: 15,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  infoText: {
    color: '#000000',
    marginBottom: 5,
  },
  phoneNumber: {
    color: '#000000',
    fontWeight: 'bold',
  },
  email: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default React.memo(Form)