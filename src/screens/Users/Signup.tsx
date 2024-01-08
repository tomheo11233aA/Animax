import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image, TextInput
} from 'react-native'
import React from 'react'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

const Signup = () => {
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
                style={styles.Vinput}
            >
                <Image
                    style={styles.icon}
                    source={require('@images/email.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tên đăng nhập"
                    placeholderTextColor="#B4B4B4"
                />

            </View>
            <View
                style={styles.Vinput}
            >
                <Image
                    style={styles.icon}
                    source={require('@images/email.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tên đăng nhập"
                    placeholderTextColor="#B4B4B4"
                />

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
        marginLeft: 16,
    },
    Vinput: {
        width: '100%',
        height: 60,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
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
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
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