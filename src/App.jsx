import './App.css'
import { useState } from 'react'
import  BreakControl  from './features/breakControl'
import SessionControl from './features/sessionControl'
import Timer from './features/timer'

function App() {

  console.log("Rendering App")

  const [status,setStatus] = useState("pending")
  const [label,setLabel] = useState("Session")
  const [sessionLength,setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const sound = document.getElementById("beep")

  const incrementSessionLength = () => {
    setSessionLength(sessionLength => {
      return sessionLength < 60 ? sessionLength +1 : sessionLength
    })
  }

  const decrementSessionLength = () => {
    setSessionLength(sessionLength => {
      return sessionLength > 1 ? sessionLength - 1 : sessionLength
    })
  }

  const incrementBreakLength = () => {
    setBreakLength(breakLength => {
      return breakLength < 60 ? breakLength +1 : breakLength
    })
  }

  const decrementBreakLength = () => {
    setBreakLength(breakLength => {
      return breakLength > 1 ? breakLength - 1 : breakLength
    })
  }

  const switchClock = () => {
    setLabel(label => {
      return label === "Session" ? "Break" : "Session"
    })
    sound.play()
  }

  const startClock = () => {
    setStatus("running")
  }

  const pauseClock = () => {
    setStatus("paused")
  }

  const resetClock = () => {
    sound.pause()
    sound.currentTime = 0
    setStatus("pending")
    setLabel("Session")
    setSessionLength(25)
    setBreakLength(5)
  }

  return (
    <div id="container">
      <div className="App">
          <div className="main-title">Session + Break - Clock</div>
          <BreakControl status={status} breakLength={breakLength} incrementBreakLength={incrementBreakLength} decrementBreakLength={decrementBreakLength} />
          <SessionControl status={status} sessionLength={sessionLength} incrementSessionLength={incrementSessionLength} decrementSessionLength={decrementSessionLength} />
          <Timer status={status} label={label} switchClock={switchClock} resetClock={resetClock} sessionLength={sessionLength} breakLength={breakLength} />
          <div className="timer-control">
            <button id="start_stop" onClick={status !== "running" ? startClock : pauseClock}>
              <i className="fa fa-play fa-2x"></i>
              <i className="fa fa-pause fa-2x"></i>
            </button>
            <button id="reset" onClick={resetClock}>
              <i className="fa fa-refresh fa-2x"></i>
            </button>
          </div>
          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </div>
  )
}

export default App
