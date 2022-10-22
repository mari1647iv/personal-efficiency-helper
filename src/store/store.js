import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './features/timer/timerSlice'

export const store = configureStore({
  reducer: {
    timer: timerReducer
  }
})