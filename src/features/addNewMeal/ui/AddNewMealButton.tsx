import React from 'react'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {ScreenRoutes} from 'shared/config'

export const AddNewMealButton = () => {
  const {goTo} = useNavigationActions()
  return (
    <UI.TextButton
      title="Добавить приём пищи"
      onPress={() => {
        goTo(ScreenRoutes.Meal)
      }}
    />
  )
}
