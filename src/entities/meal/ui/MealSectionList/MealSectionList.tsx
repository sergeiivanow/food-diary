import React from 'react'
import {SectionList} from 'react-native'
import * as UI from 'shared/ui'
import {MealItem} from '../MealItem'
import {useMeal, Meal} from '../../model'

const renderItem = ({item}: {item: Meal}) => {
  return <MealItem item={item} />
}

export const MealSectionList = () => {
  const {mealSectionList} = useMeal()
  return (
    <SectionList
      sections={mealSectionList}
      keyExtractor={(item, index) => `meal-key-${index}`}
      renderItem={renderItem}
      renderSectionHeader={({section: {title}}) => (
        <UI.Font>{'Section ' + title}</UI.Font>
      )}
    />
  )
}
