import React from 'react'

const BreakControl = (props) => {

  return (
    <div className="length-control">
        <div id="break-label">Break Length</div>
        <button className="btn-level" id="break-decrement" value="-" onClick={props.status === "pending" ? props.decrementBreakLength : undefined}><i className="fa fa-arrow-down fa-2x"></i></button>
        <div className="btn-level" id="break-length">{props.breakLength}</div>
        <button className="btn-level" id="break-increment" value="+" onClick={props.status === "pending" ? props.incrementBreakLength : undefined}><i className="fa fa-arrow-up fa-2x"></i></button>
    </div>
  )
}

export default BreakControl