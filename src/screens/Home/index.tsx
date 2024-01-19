import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Box from '@common/Box'
import Img from '@common/Img'
import Icon from '@common/Icon'
import Btn from '@common/Btn'
import Txt from '@common/Txt'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, Image } from 'react-native'
import { fonts } from '@themes/fonts'
import { colors } from '@themes/colors'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  const formatName = (name: string) => {
    if (name.length > 21) {
      return name.slice(0, 21) + '...'
    }
    return name
  }
  const formatCategory = (category: string) => {
    if (category.length > 30) {
      return category.slice(0, 30) + '...'
    }
    return category
  }
  return (
    <KeyBoardSafe>
      <Box flex={1}>
        
        <Swiper
          autoplay
          autoplayTimeout={3}
          showsPagination={false}
          style={{
            alignSelf: 'center',
          }}
        >
          {bannerData.map((banner) => (
            <Box
              key={banner.id}
              width={'100%'}
              height={'45%'}
            >
              <ImageBackground
                source={{ uri: banner.image }}
                style={styles.backgroundImage}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 10, 50)']}
                  style={styles.backgroundGradient}
                />
                
                <Box
                  absolute
                  bottom={0}
                  left={0}
                  right={0}
                  marginLeft={20}
                  marginBottom={20}
                >
                  <Txt
                    color={'#fff'}
                    size={25}
                    fontFamily={fonts.MAINB}
                    fontWeight={'600'}
                  >
                    {formatName(banner.name)}
                  </Txt>
                  <Txt
                    color={'#fff'}
                    size={14}
                  >
                    {formatCategory(banner.category)}
                  </Txt>

                  <Box row marginTop={10}>
                    <Btn
                      radius={100}
                      marginRight={10}
                      backgroundColor={colors.lMainColor}
                      paddingHorizontal={20}
                      paddingVertical={10}
                    >
                      <Box
                        row
                        alignCenter
                      >
                        <Icon
                          source={require('@images/auth/play-circle.png')}
                          size={20}
                        />
                        <Txt
                          size={15}
                          color={'#fff'}
                          marginLeft={15}
                          fontFamily={fonts.MAINB}
                        >
                          {t('Play')}
                        </Txt>
                      </Box>

                    </Btn>

                    <Btn
                      radius={100}
                      marginRight={10}
                      paddingHorizontal={20}
                      borderColor={'#fff'}
                      borderWidth={2}
                    >
                      <Box
                        row
                        alignCenter
                      >
                        <Icon
                          source={require('@images/plus-sign.png')}
                          size={20}
                        />
                        <Txt
                          size={15}
                          color={'#fff'}
                          marginLeft={15}
                          fontFamily={fonts.MAINB}
                        >
                          {t('My List')}
                        </Txt>
                      </Box>

                    </Btn>
                  </Box>
                </Box>
              </ImageBackground>
            </Box>
          ))}
        </Swiper>
      </Box>
    </KeyBoardSafe>
  )
}

export default Home

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backgroundGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
})

var bannerData = [
  {
    id: 1,
    name: 'Demon Slayer: Kimetsu no Yaiba',
    category: 'Action, Adventure, Fantasy, Historical, Shounen, Supernatural',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2FbannerHome1.jpg?alt=media&token=a79982cb-6b8b-4e0f-b1d6-8572c9b0db8e',
  },
  {
    id: 2,
    name: 'Your Name',
    category: 'Drama, Romance, School, Supernatural',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner2.jpg?alt=media&token=9f0ef8e5-32a2-4cdf-b6b7-c46c50dd7145',
  },
  {
    id: 3,
    name: 'Solo Leveling',
    category: 'Action, Adventure, Fantasy, Shounen, Webtoons',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner3.jpg?alt=media&token=68e311bc-0605-48a1-8cf1-83d1d8655e5c',
  },
  {
    id: 4,
    name: 'Naruto Shippuden',
    category: 'Action, Adventure, Comedy, Super Power, Martial Arts, Shounen',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner4.jpg?alt=media&token=ef9d4522-7208-4848-b92f-ca8345d24775',
  },
  {
    id: 4,
    name: 'Baka to Test to Shoukanjuu',
    category: 'Comedy, Romance, School, Super Power',
    image: 'https://firebasestorage.googleapis.com/v0/b/aniflix-958d2.appspot.com/o/%E1%BA%A2nh%2Fbanner5.jpg?alt=media&token=28771098-df99-46f8-b2e4-9d983532dad2',
  }
]
