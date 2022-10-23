import './PomodoroScale.css';
import React, {useEffect, useRef} from 'react';
import { POMODORO_PHASES } from '../../../../assets/constants';
import { useSelector } from 'react-redux';
import useSound from 'use-sound';
import sound from '../../../../assets/audio/proud.mp3';


function PomodoroScale() {
  let totalTime = POMODORO_PHASES.reduce((sum, phase) => sum + phase.time, 0);
  let currentPhaseType = useSelector((state)=>state.timer.type)
  let currentPhaseId = useSelector((state)=>state.timer.id)
  const [playSound] = useSound(sound)
  let isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    } else {
      playSound()
      let message = currentPhaseType === 'phase' ? 'Break is over.' : 'Take a break.'
      alert(message)
    }
  }, [currentPhaseId])

  return (
    <div className="pomodoro-scale">
      {POMODORO_PHASES.map((phase) => (
        <div key={phase.id} id={currentPhaseId===phase.id?"current-phase":phase.id} className={"pomodoro-"+phase.type} style={{width:(100*phase.time/totalTime)+"%"}}></div>
      ))}
    </div>
  );
}

export default PomodoroScale;