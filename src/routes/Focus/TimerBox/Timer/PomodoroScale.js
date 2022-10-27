import './PomodoroScale.css';
import React, {useEffect, useRef} from 'react';
import { POMODORO_PHASES } from '../../../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { setPhase } from '../../../../store/features/timer/timerSlice';
import useSound from 'use-sound';
import sound from '../../../../assets/audio/proud.mp3';


function PomodoroScale() {
  let totalTime = POMODORO_PHASES.reduce((sum, phase) => sum + phase.time, 0);
  let isPlaying = useSelector((state)=>state.timer.isPlaying)
  let currentPhaseType = useSelector((state)=>state.timer.type)
  let currentPhaseId = useSelector((state)=>state.timer.id)
  const [playSound] = useSound(sound)
  let isFirstMount = useRef(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    } else if (isPlaying) {
      playSound()
      let message = currentPhaseType === 'phase' ? 'Break is over.' : 'Take a break.'
      alert(message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPhaseId, currentPhaseType])

  function switchPhase(id) {
    dispatch(setPhase(id))
  }

  return (
    <div className="pomodoro-scale">
      {POMODORO_PHASES.map((phase) => (
        <div key={phase.id} id={currentPhaseId===phase.id?"current-phase":phase.id} className={"pomodoro-"+phase.type} style={{width:(100*phase.time/totalTime)+"%"}} onClick={()=>switchPhase(phase.id)}></div>
      ))}
    </div>
  );
}

export default PomodoroScale;