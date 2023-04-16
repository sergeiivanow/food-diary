import {useAppDispatch, useAppSelector} from 'shared/lib/hooks'
import {add, Meal} from './slice'

export function useMeal() {
  const dispatch = useAppDispatch()
  const mealSectionList = useAppSelector(state => state.meal.mealSectionList)

  function addNewMeal(data: Meal) {
    dispatch(add(data))
  }

  return {
    mealSectionList,
    addNewMeal,
  }
}
