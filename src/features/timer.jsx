import React, { useState } from 'react'
import { useEffect } from 'react'

const Timer = (props) => {

  const initialState = {minutes:25,seconds:0}
  const [timer, setTimer] = useState(initialState)

  useEffect(() => {
    if(props.status === "pending") {
      setTimer({minutes:props.sessionLength,seconds:0})
    }
  },[props.sessionLength])

  useEffect(() => {
    if(props.status === "running") {
      let minutes = timer.minutes;
      let seconds = timer.seconds;

      const interval = setInterval(() => {
        if(seconds === 0) {
          if(minutes !== 0){
            minutes --
            seconds = 59
          } else {
            seconds --
          }
        } else {
          seconds --
        }
        setTimer(timer => {
          return {
            ...timer,
            minutes:minutes,
            seconds:seconds
          }
        })
      }, 1000);

      return () => {
        clearInterval(interval)
      }
    }
  })

  useEffect(() => {
    if(timer.seconds === -1) {
      props.switchClock()
      setTimer(timer => {
        return {
          ...timer,
          minutes: props.label === "Session" ? props.breakLength : props.sessionLength,
          seconds:0
        }
      })
    }
  },[timer])

  const time = `${timer.minutes < 10 ? "0" + timer.minutes : timer.minutes}:${timer.seconds < 10 ? "0" + timer.seconds : timer.seconds}`

  return (
    <div className="timer" style={timer.minutes === 0 ? {color: "red"} : {color: "white"}}>
      <div className="timer-wrapper">
          <div id="timer-label">{props.label}</div>
          <div id="time-left">{time}</div>
      </div>
    </div>
  )
}

export default Timer
