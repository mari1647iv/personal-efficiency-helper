import { createSlice } from '@reduxjs/toolkit'
import { POMODORO_PHASES } from '../../../utils/constants';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  id: number,
  type: string,
  time: number,
  isPlaying: boolean,
  lastUpdate: Date,

}

const initialState: TimerState = {
  id: 0,
  type: 'phase',
  time: 1500000,
  isPlaying: false,
  lastUpdate: new Date(),
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true
      state.lastUpdate = new Date()
    },
    pause: (state) => {
      state.isPlaying = false
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
      state.lastUpdate = new Date()
    },
    tick: (state) => {
      if (state.isPlaying && state.time >= 1000) {
        let currentTime = new Date()
        state.time -= currentTime.getTime() - state.lastUpdate.getTime()
        state.lastUpdate = currentTime
      }
      if (state.isPlaying && state.time < 1000) {
        state.lastUpdate = new Date()
        state.id = (state.id === POMODORO_PHASES.length - 1 ? 0 : state.id + 1)
        state.type = POMODORO_PHASES[state.id].type
        state.time = POMODORO_PHASES[state.id].time
      }
    },
    setPhase: (state, action: PayloadAction<number>) => {
      state.isPlaying = false
      state.id = action.payload
      state.type = POMODORO_PHASES[state.id].type
      state.time = POMODORO_PHASES[state.id].time
      state.lastUpdate = new Date()
    }
  }
})

export const { play, pause, setTime, tick, setPhase } = timerSlice.actions

export default timerSlice.reducer