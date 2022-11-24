export const POMODORO_TECHNIQUE = (
  <p>
    A method to stay focused and mind-fresh by swallowing <i>pomodoros</i> - working time intervals. 4 pomodoros form <i>a set</i>. The algorithm is as follows:<br /><br />Pick a task. {'>'}<br />Set a 25-minutes timer. {'>'}<br />Work on your task until the time is up. {'>'}<br />Take a 5-10 minute break. {'>'}<br />After every set (4 pomodoros) take a longer 15-30 minutes break. {'>'}<br />Repeat {'>'}
  </p>
);

// let pomodoro = { type: 'phase', time: 1500000 }
// let shortBreak = { type: 'break', time: 300000 }
// let longBreak = { type: 'break', time: 900000 }

export const POMODORO_PHASES = [
  { id: 0, type: 'focus', time: 1500000 },
  { id: 1, type: 'break', time: 300000 },
  { id: 2, type: 'focus', time: 1500000 },
  { id: 3, type: 'break', time: 300000 },
  { id: 4, type: 'focus', time: 1500000 },
  { id: 5, type: 'break', time: 300000 },
  { id: 6, type: 'focus', time: 1500000 },
  { id: 7, type: 'break', time: 900000 }
]

export const TMRZ_STATE = "TMRZ_STATE"


// {
//   'VALIDATION_IN_PROGRESS': 'VALIDATION_IN_PROGRESS',
//   'VALIDATION_FAILED': 'VALIDATION_FAILED',
//   'WAITING_FOR_PREDICTION_CONFIG': 'WAITING_FOR_PREDICTION_CONFIG',
//   'ML_IN_PROGRESS': 'ML_IN_PROGRESS',
//   'ML_FAILED': 'ML_FAILED',
//   'ML_SUCCESS': 'ML_SUCCESS'
// }
