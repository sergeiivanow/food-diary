import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {isSameDay} from 'date-fns'

export interface Meal {
  mealDate: string
  ate: string
  drank: string
  contect: string
  evaluation: string
  volume: string
}

export interface MealSection {
  title: string
  data: Meal[]
}

export type MealSectinList = MealSection[]

export interface MealState {
  mealSectionList: MealSectinList
}

const initialState: MealState = {
  mealSectionList: [
    {
      title: new Date().toISOString(),
      data: [],
    },
  ],
}

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Meal>) => {
      const updatedSecitons = [...state.mealSectionList]
      const matchedSection = updatedSecitons.filter(item =>
        isSameDay(new Date(item.title), new Date(action.payload.mealDate)),
      )[0]
      if (matchedSection) {
        // update found section
        matchedSection.data.push(action.payload)
      } else {
        // create new section
        updatedSecitons.push({
          title: action.payload.mealDate,
          data: [action.payload],
        })
      }
      state.mealSectionList = updatedSecitons
    },
    remove: (state, action: PayloadAction<string>) => {
      const updatedSecitons = [...state.mealSectionList]
      for (let item of updatedSecitons) {
        item.data = item.data.filter(_item => _item.mealDate !== action.payload)
      }
      state.mealSectionList = updatedSecitons
    },
  },
})

export const {add, remove} = mealSlice.actions

export const mealReducer = mealSlice.reducer
