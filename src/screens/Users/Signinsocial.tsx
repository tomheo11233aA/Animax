import {
    StyleSheet, Text, View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'

const Signinsocial = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Vimage}>
                <Image 
                    style={styles.image}
                source={require('@images/viewsignin.jpg')} />
            </View>
            <View style={styles.content}>
                <Text>Let's you in</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonSocial, styles.buttonSignin]}
            >
                <Text>Sign in with Google</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text>Or</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonSocial}
            >
                <Text>Sign in with Facebook</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signinsocial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
    },
    Vimage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 40,
    },
    content: {
        alignItems: 'center', // Để căn giữa nội dung
        marginBottom: 50,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    buttonSocial: {
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSignin: {
        marginBottom: 16,
    },
})