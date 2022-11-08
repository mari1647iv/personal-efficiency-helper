import { TMRZ_STATE } from './constants';
import { RootState } from '../store/store';

export default function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(TMRZ_STATE, serializedState)
  } catch (err) {
    console.log("Error saving data")
  }
}