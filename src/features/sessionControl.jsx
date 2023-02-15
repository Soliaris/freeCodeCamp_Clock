import React from 'react'

const SessionControl = (props) => {

  return (
    <div className="length-control">
        <div id="session-label">Session Length</div>
        <button className="btn-level" id="session-decrement" value="-" onClick={props.status === "pending" ? props.decrementSessionLength : undefined}><i className="fa fa-arrow-down fa-2x"></i></button>
        <div className="btn-level" id="session-length">{props.sessionLength}</div>
        <button className="btn-level" id="session-increment" value="+" onClick={props.status === "pending" ? props.incrementSessionLength : undefined}><i className="fa fa-arrow-up fa-2x"></i></button>
    </div>
  )
}

export default SessionControl