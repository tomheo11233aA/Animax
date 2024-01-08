import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image, ScrollView
} from 'react-native'
import React from 'react'
import Scroll from '@common/Scroll'
import { navigate } from '@utils/navigationRef'
import { screens } from '@contants/screens'

const Signinsocial = () => {
    return (
        <Scroll
            alignCenter
            justifyCenter
            backgroundColor={'#ffffff'}
            padding={24}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.Vback}>
                <Image
                    style={styles.backicon}
                    source={require('@images/back.png')} />
            </View>
            <View style={styles.Vimage}>
                <Image
                    style={styles.image}
                    source={require('@images/viewsignin.jpg')} />
            </View>
            <View style={styles.content}>
                <Text
                    style={styles.textContent}
                >Let's you in</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonSocial}
            >
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require('@images/facebook.png')}
                />
                <Text
                    style={styles.text}
                >Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonSocial}
            >
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require('@images/google.png')}
                />
                <Text
                    style={styles.text}
                >Continue with Google</Text>
            </TouchableOpacity>
            <View style={styles.or}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
            </View>
            <TouchableOpacity
                style={styles.buttonSignin}
                onPress={() => navigate(screens.CHOOSE_INTEREST)}
            >
                <Text
                    style={styles.text2}
                >Sign in with password</Text>
            </TouchableOpacity>
            <View style={styles.signup}>
                <Text
                    style={styles.text3}
                >Don't have an account?</Text>
                <TouchableOpacity>
                    <Text
                        onPress={() => navigate(screens.SIGNUP)}
                        style={styles.textSignup}
                    >Sign up</Text>
                </TouchableOpacity>
            </View>
        </Scroll>
    )
}

export default Signinsocial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 50,
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
        height: 250,
        borderRadius: 50,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 40,
    },
    content: {
        alignItems: 'center',
        marginBottom: 50,
    },
    textContent: {
        fontSize: 50,
        fontWeight: '500',
        color: '#000',
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 16,
    },
    buttonSocial: {
        width: '100%',
        height: 60,
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
        marginBottom: 16,
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
        marginBottom: 20,
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