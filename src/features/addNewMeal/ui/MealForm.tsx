import React, {useState} from 'react'
import * as UI from 'shared/ui'
import {useNavigationActions} from 'shared/lib'
import {useMeal} from 'entities/meal'

export function MealForm() {
  const {goBack} = useNavigationActions()
  const [value, setValue] = useState('')
  const {addNewMeal} = useMeal()
  function save() {
    addNewMeal({
      mealDate: new Date().toISOString(),
      ate: value,
      drank: 'Апельсиновый сок',
      contect: 'Забежал в столовку',
      evaluation: 'От 5 до 7',
      volume: '5 кулаков',
    })
    goBack()
  }
  return (
    <>
      <UI.TextInput value={value} onChangeText={setValue} />
      <UI.TextButton title="Save" onPress={save} />
    </>
  )
}
