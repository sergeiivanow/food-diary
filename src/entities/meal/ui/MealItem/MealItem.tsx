import React from 'react'
import {View} from 'react-native'
import * as UI from 'shared/ui'
import {Meal} from '../../model'

export function MealItem({item}: {item: Meal}) {
  const {ate} = item
  return (
    <View>
      <UI.Font>{ate}</UI.Font>
    </View>
  )
}
