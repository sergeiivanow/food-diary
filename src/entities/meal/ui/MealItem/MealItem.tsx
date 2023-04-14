import React from 'react'
import {View} from 'react-native'
import * as UI from 'shared/ui'
import {Meal} from '../../model'

export function MealItem({item}: {item: Meal}) {
  const {mealDate} = item
  return (
    <View>
      <UI.Font>{mealDate}</UI.Font>
    </View>
  )
}
