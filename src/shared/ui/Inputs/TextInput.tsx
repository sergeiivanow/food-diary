import React, {forwardRef} from 'react'
import {TextInputProps, TextInput as RNTextInput} from 'react-native'
import styled from '@emotion/native'
import {FontSizes, FontWeights, Colors} from '@emotion/react'
import {useTheme} from '@emotion/react'

export interface InputProps {
  width?: number | string
  height?: number | string
  flex?: number
  size?: FontSizes
  weight?: FontWeights
  lineHeight?: number
  color?: Colors
  placeholderTextColor?: string
  multiline?: boolean
}

const StyledTextInput = styled.TextInput<InputProps>`
  height: 40px;
  padding: 0px;
  font-family: ${({theme, weight}) =>
    theme.fontNames.roboto[weight ?? 'regular']};
  font-size: ${({theme, size}) => theme.fontSizes[size ?? 'medium']};
  line-height: ${({theme, size, lineHeight}) => {
    if (!lineHeight) {
      return lineHeight // auto
    }
    return lineHeight * parseInt(theme.fontSizes[size ?? 'medium'], 10) + 'px'
  }};
  color: ${({theme, color}) => theme.colors[color ?? 'text']};
  border: 1px solid red;
`

export const TextInput = forwardRef<RNTextInput, InputProps & TextInputProps>(
  (props, ref) => {
    const theme = useTheme()

    return (
      <StyledTextInput
        {...props}
        ref={ref}
        placeholderTextColor={props.placeholderTextColor ?? theme.colors.text}
      />
    )
  },
)
