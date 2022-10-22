import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPlaying: false,
  lastUpdate: new Date(),
  time: 1500000
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
    setTime: (state, action) => {
      state.lastUpdate = new Date()
      state.time = action.payload
    },
    tick: (state)=> {
      if (state.isPlaying && state.time>=1000) {
        let currentTime = new Date()
        state.time -= currentTime - state.lastUpdate
        state.lastUpdate = currentTime
      }
    }
  }
})

export const { play, pause, setTime, tick } = timerSlice.actions

export default timerSlice.reducer