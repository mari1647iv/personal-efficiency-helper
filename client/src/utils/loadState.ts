import { TMRZ_STATE } from './constants';

export default function loadState() {
  try {
    const serializedState = localStorage.getItem(TMRZ_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}