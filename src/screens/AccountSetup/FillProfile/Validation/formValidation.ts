import * as yup from 'yup';

export const fillProfileSchema = yup.object().shape({
    // fullName: yup.string().required('Full name is required'),
    // nickName: yup.string().required('Nick name is required'),
    // email: yup.string().email('Invalid email').required('Email is required'),
    // phoneNumber: yup.string().required('Phone number is required'),
    // gender: yup.string().required('Gender is required'),
    // test not required
    fullName: yup.string(),
    nickName: yup.string(),
    email: yup.string(),    
    phoneNumber: yup.string(),
    gender: yup.string(),

});