import {useAppSelector} from 'shared/lib/hooks'

export function useMeal() {
  // const dispatch = useAppDispatch()
  const mealSectionList = useAppSelector(state => state.meal.mealSectionList)

  return {
    mealSectionList,
  }
}
