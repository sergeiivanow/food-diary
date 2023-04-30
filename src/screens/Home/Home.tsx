import React from 'react'
import * as UI from 'shared/ui'
import {MealSectionList, Meal} from 'entities/meal'
import {AddNewMealButton} from 'features/addNewMeal'
import {RemovableMealItem} from 'features/deleteMeal'

const renderItem = ({item}: {item: Meal}) => {
  return <RemovableMealItem item={item} />
}

export const Home = () => {
  return (
    <UI.Container>
      <MealSectionList renderItem={renderItem} />
      <AddNewMealButton />
    </UI.Container>
  )
}
