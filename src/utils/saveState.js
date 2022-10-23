import { TMRZ_STATE } from './constants';

export default function saveState(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(TMRZ_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}