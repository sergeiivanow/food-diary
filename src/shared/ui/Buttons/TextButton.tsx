import React from 'react'
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native'
import {TouchableOpacityProps} from 'react-native'
import {fluidSize} from '../../lib'
import {useStyles} from '../../theme'
import {Font} from '../Font'
import {ButtonProps} from './types'

export function TextButton(props: ButtonProps & TouchableOpacityProps) {
  const {styles} = useStyles(createStyles)
  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      activeOpacity={0.8}
      color={props.color}
      style={styles.container}
      {...props}>
      {props.loading ? (
        <ActivityIndicator testID="loading" />
      ) : (
        <Font
          family="roboto"
          weight="regular"
          size="large"
          color={props.textColor ?? 'text'}>
          {props.title ?? ''}
        </Font>
      )}
    </TouchableOpacity>
  )
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      height: fluidSize(44, 'vertical'),
      borderRadius: fluidSize(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
