import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fillProfileSchema } from './Validation/formValidation'

const FillProfile = () => {
  const { handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(fillProfileSchema)
  });
  return (
    <View>
      <Text>FillProfile</Text>
      <TextInput
        onChangeText={text => setValue('fullName', text)}
        placeholder="Name"
      />
      <Text>{errors.fullName?.message}</Text>
      <TextInput
        onChangeText={text => setValue('email', text)}
        placeholder="Email"
      />
      <Text>{errors.email?.message}</Text>
      <TextInput
        onChangeText={text => setValue('nickName', text)}
        placeholder="nickName"
      />
      <Text>{errors.nickName?.message}</Text>
      <TextInput
        onChangeText={text => setValue('phoneNumber', text)}
        placeholder="phoneNumber"
      />
      <Text>{errors.phoneNumber?.message}</Text>
      <TextInput
        onChangeText={text => setValue('gender', text)}
        placeholder="gender"
      />
      <Text>{errors.gender?.message}</Text>

      <TouchableOpacity onPress={handleSubmit(data => console.log(data))}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FillProfile

const styles = StyleSheet.create({})