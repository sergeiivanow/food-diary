import React from 'react'
import {View, StyleSheet} from 'react-native'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {ScreenRoutes} from 'shared/config'
import {fluidSize} from 'shared/lib'

export const AddNewMealButton = () => {
  const {goTo} = useNavigationActions()
  return (
    <View style={styles.container}>
      <UI.PrimaryButton
        title="Добавить приём пищи"
        onPress={() => {
          goTo(ScreenRoutes.Meal)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    padding: fluidSize(12),
  },
})
