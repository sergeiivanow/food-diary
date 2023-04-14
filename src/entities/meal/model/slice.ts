import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
      data: [
        {
          mealDate: new Date().toISOString(),
          ate: 'Шоколад',
          drank: 'Апельсиновый сок',
          contect: 'Забежал в столовку',
          evaluation: 'От 5 до 7',
          volume: '5 кулаков',
        },
      ],
    },
  ],
}

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Meal>) => {
      const updatedSecitons = [...state.mealSectionList]
      const matchedSection = updatedSecitons.filter(
        item => item.title === action.payload.mealDate,
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
  },
})

export const {add} = mealSlice.actions

export const mealReducer = mealSlice.reducer
