import {Colors} from '../../theme'

export interface ButtonProps {
  title: string
  loading?: boolean
  disabled?: boolean
  active?: boolean
  color?: Colors
  textColor?: Colors
}
