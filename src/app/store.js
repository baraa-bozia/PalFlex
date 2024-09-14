import { configureStore } from '@reduxjs/toolkit'
// import { courseReducer } from '../app/features/CourseD'
import cartReducer from  './features/CourseD'
export const store = configureStore({
  reducer: {
    course:cartReducer,
  },
})