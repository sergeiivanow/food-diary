import React from 'react'
import * as UI from 'shared/ui'
import {MealSectionList} from 'entities/meal'
import {AddNewMealButton} from 'features/addNewMeal'

export const Home = () => {
  return (
    <UI.Container>
      <MealSectionList />
      <AddNewMealButton />
    </UI.Container>
  )
}
