import {useAppDispatch, useAppSelector} from 'shared/lib/hooks'
import {add, remove, Meal} from './slice'

export function useMeal() {
  const dispatch = useAppDispatch()
  const mealSectionList = useAppSelector(state => state.meal.mealSectionList)

  function addNewMeal(data: Meal) {
    dispatch(add(data))
  }

  function removeMealByDate(mealDate: string) {
    dispatch(remove(mealDate))
  }

  return {
    mealSectionList,
    removeMealByDate,
    addNewMeal,
  }
}
