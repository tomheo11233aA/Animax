import { StyleSheet, Text,
  ImageBackground,
  TouchableOpacity, View
} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Started = () => {
  return (
    <ImageBackground
      source={require('../../../assets/media/banner1.jpg')}
      style={styles.backgroundImage}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.backgroundGradient}
      ></LinearGradient>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text
            style={styles.title}
          >WELCOME TO ANIMAX</Text>
          <Text style={styles.text}
          >The best streaming anime app of the ...</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default Started

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Đảm bảo rằng hình nền sẽ tràn màn hình
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  content: {
    alignItems: 'center', // Để căn giữa nội dung
    marginBottom: 50,
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  button: {
    paddingHorizontal: 20,
    width: '90%',
    height: 58,
    backgroundColor: '#06C149',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 58,
  },
})