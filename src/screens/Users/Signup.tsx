import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image, TextInput
} from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);

    const handleFocus = (a:any) => {
        a === 'email' ? setIsFocused(true) : setIsFocused2(true);
    };

    const handleBlur = (a:any) => {
        a === 'email' ? setIsFocused(false) : setIsFocused2(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.container}>
            <View style={styles.Vback}>
                <Image
                    style={styles.backicon}
                    source={require('@images/back.png')} />
            </View>
            <View style={styles.Vimage}>
                <Image
                    style={styles.image}
                    source={require('@images/avatar.png')} />
            </View>
            <View style={styles.content}>
                <Text
                    style={styles.textContent}
                >Create Your Account</Text>
            </View>

            <View
                style={[styles.Vinput,
                { borderColor: isFocused ? '#06C149' : '#FAFAFA' },
                { backgroundColor: isFocused ? '#EBFAF1' : '#FAFAFA' }
                ]}
            >
                <Image
                    style={[
                        styles.icon,
                        { tintColor: isFocused ? '#06C149' : '#B4B4B4' }
                    ]}
                    source={require('@images/email.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#B4B4B4"
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                />

            </View>
            <View
                style={
                    [styles.Vinput,
                    { borderColor: isFocused2 ? '#06C149' : '#FAFAFA' },
                    { backgroundColor: isFocused2 ? '#EBFAF1' : '#FAFAFA' }
                    ]
                }
            >
                <Image
                    style={[
                        styles.icon,
                        { tintColor: isFocused2 ? '#06C149' : '#B4B4B4' }
                    ]}
                    source={require('@images/padlock.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#B4B4B4"
                    secureTextEntry={!showPassword}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                />
                <TouchableOpacity
                    style={styles.VtoggleIcon}
                    onPress={togglePasswordVisibility}>
                    <Image
                        style={[
                            styles.toggleIcon,
                            { tintColor: isFocused2 ? '#06C149' : '#B4B4B4' }
                        ]}
                        
                        source={showPassword ? require('@images/eye.png') : require('@images/hidden.png')}
                    />
                </TouchableOpacity>

            </View>
            <View
                style={styles.Vcheckbox}
            >
                <CheckBox
                    disabled={false}
                    value={isChecked}
                    onValueChange={(newValue) => setChecked(newValue)}
                    tintColors={{ true: '#06C149', false: '#06C149' }}
                />
                <Text
                    style={styles.text}
                >Remember me</Text>

            </View>

            <TouchableOpacity
                style={styles.buttonSignin}
            >
                <Text
                    style={styles.text2}
                >Sign up</Text>
            </TouchableOpacity>
            <View style={styles.or}>
                <View style={styles.line} />
                <Text style={styles.orText}>or continue with</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.VButtonSocial}>
                <TouchableOpacity
                    style={styles.buttonSocial}
                >
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require('@images/google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonSocial}
                >
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require('@images/facebook.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.signup}>
                <Text
                    style={styles.text3}
                >Already have an account?</Text>
                <TouchableOpacity>
                    <Text
                        onPress={() => navigate(screens.SIGNINSOCIAL)}
                        style={styles.textSignup}
                    >Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
        padding: 24,
        backgroundColor: '#ffffff',
    },
    Vback: {
        position: 'absolute',
        top: 24,
        left: 24,
        width: 24,
        height: 24,
    },
    backicon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    Vimage: {
        width: '100%',
        height: 200,
        borderRadius: 50,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 40,
    },
    content: {
        alignItems: 'center',
        marginBottom: 30,
    },
    textContent: {
        fontSize: 30,
        fontWeight: '500',
        color: '#000',
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 8,
    },
    Vinput: {
        width: '100%',
        height: 60,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 16,
        padding: 8,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 16,
        marginLeft: 16,
        tintColor: '#B4B4B4',
    },
    input: {
        height: 60,
        width: '75%',
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        overflow: 'hidden',
    },
    toggleIcon: {
        width: 24,
        height: 24,
        marginLeft: 8,
        tintColor: '#B4B4B4',
    },
    VtoggleIcon: {
        position: 'absolute',
        right: 16,
        top: 18,
        // backgroundColor: 'red',
    },
    Vcheckbox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
    },
    VButtonSocial: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonSocial: {
        width: 85,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 32,
        marginHorizontal: 8,
    },
    or: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        marginTop: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#DDDDDD',
        marginHorizontal: 8,
    },
    orText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonSignin: {
        width: '100%',
        height: 60,
        backgroundColor: '#06C149',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 16,
        borderRadius: 50,
    },
    text2: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    signup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text3: {
        color: '#bbbbbb',
        fontSize: 16,
        fontWeight: '400',
    },
    textSignup: {
        color: '#06C149',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 8,
    },
})