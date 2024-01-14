import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch } from '@hooks/redux'
import { setLogin } from '@redux/slice/userSlice'
import { AppDispatch } from '@redux/store/store'
import { TouchableOpacity } from 'react-native'

const Profile = () => {
  const dispatch: AppDispatch = useAppDispatch()
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => {
        dispatch(setLogin(false))
      }
      }>
        <Text style={{color: 'black'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})