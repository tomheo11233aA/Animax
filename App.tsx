import Container from '@navigations/Container'
import React from 'react'
import Animated from 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'
import Orientation from 'react-native-orientation-locker';
// import { useAppSelector, useAppDispatch } from '@hooks/redux'
// import { globalLoadingUserSelector } from '@redux/selector/appSelector'
// import { setGlobalLoading } from '@redux/slice/userSlice'
Orientation.lockToPortrait()

const App = () => {
  // const globalLoading = useAppSelector(globalLoadingUserSelector)
  // const dispatch = useAppDispatch()
  // dispatch(setGlobalLoading(true))
  // console.log('globalLoading', globalLoading)
  return (
    <Animated.View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <Container />
        </PaperProvider>
      </SafeAreaProvider>
    </Animated.View>
  )
}

export default App