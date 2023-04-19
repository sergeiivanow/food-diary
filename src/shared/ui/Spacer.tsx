import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Colors, useTheme} from '../theme'

interface SpacerProps {
  size: number
  color: Colors
}

export const Spacer = (props: SpacerProps) => {
  const styles = useStyles(props)
  return <View style={styles.container} />
}

const useStyles = (props: SpacerProps) => {
  const {theme} = useTheme()
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: props.size,
          width: props.size,
          backgroundColor: theme.colors[props.color],
        },
      }),
    [theme, props],
  )
  return styles
}
