import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useTheme} from '../../theme'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  const styles = useStyles()
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const useStyles = () => {
  const {theme} = useTheme()
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors.card,
        },
      }),
    [theme],
  )
  return styles
}
