import React from 'react'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {ScreenRoutes} from 'shared/config'

export const Home = () => {
  const {goTo} = useNavigationActions()
  return (
    <UI.Container>
      <UI.TextButton
        title="Добавить приём пищи"
        onPress={() => {
          goTo(ScreenRoutes.Meal)
        }}
      />
    </UI.Container>
  )
}
