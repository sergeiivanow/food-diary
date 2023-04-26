import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useStyles, Theme} from '../../theme'
import {fluidSize} from '../../lib'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({children}: ContainerProps) {
  const {styles} = useStyles(createStyles())
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const createStyles = () => (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: fluidSize(16),
      backgroundColor: theme.colors.background,
    },
  })
