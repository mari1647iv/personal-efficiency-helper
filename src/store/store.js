import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './features/timer/timerSlice'
import loadState from '../utils/loadState';
import saveState from '../utils/saveState';


const persistedState = loadState()

export const store = configureStore({
  reducer: {
    timer: timerReducer
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  saveState(store.getState())
})