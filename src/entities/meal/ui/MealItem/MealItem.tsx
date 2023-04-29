import React from 'react'
import {View, StyleSheet} from 'react-native'
import * as UI from 'shared/ui'
import {Meal} from '../../model'
import {useStyles, Theme} from 'shared/theme'
import {fluidSize} from 'shared/lib'
import {parseISO, format} from 'date-fns'
import {ru} from 'date-fns/locale'

export function MealItem({item}: {item: Meal}) {
  const {styles} = useStyles(createStyles)
  const {mealDate, ate, drank, contect, evaluation, volume} = item
  const date = parseISO(mealDate)
  return (
    <View style={styles.container}>
      <UI.Font size="medium">{ate}</UI.Font>
      <UI.Font size="medium">{drank}</UI.Font>
      <View style={styles.row}>
        <View>
          <UI.Font size="xSmall">{contect}</UI.Font>
        </View>
        <View>
          <UI.Font size="xSmall">{format(date, 'HH:mm', {locale: ru})}</UI.Font>
        </View>
      </View>
      <UI.Font>{`Насыщение: ${evaluation}`}</UI.Font>
      <UI.Font>{`Объем: ${volume}`}</UI.Font>
    </View>
  )
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderRadius: fluidSize(8),
      padding: fluidSize(12),
      backgroundColor: theme.colors.itemCard,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
