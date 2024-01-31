import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { BOTTOM_TAB_HEIGHT } from '@utils/responsive'

export const useHideNavigation = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none"
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: {
        height: BOTTOM_TAB_HEIGHT,
        paddingTop: 10,
        borderTopWidth: 1,
        backgroundColor: 'white',
        position: 'absolute',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }
    });
  }, [navigation]);
}
