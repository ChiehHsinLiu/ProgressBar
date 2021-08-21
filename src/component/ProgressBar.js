import React from 'react';

const ProgressBar = ({ title, info, complete, height }) => {


  let percent = (complete ? "100%" : "0%")
  let ballColor = (complete ? "Fuchsia" : "DarkGrey")

  console.log('run ProgressBar', title, info, complete, height)


  return (
    <div>
      <div className="PbTrack" style={{ width: "7px", height: `${height}px`, backgroundColor: "DarkGrey", borderRadius: "8px", float: "left", marginLeft: "10px" }}>
        <div className="PbBar" style={{ width: "100%", height: percent, backgroundColor: "Fuchsia", borderRadius: "8px", float: "left" }} />
      </div>

      <div className="ball" style={{ content: "", width: "35px", height: "35px", backgroundColor: ballColor, position: "relative", float: "Left", borderRadius: "50%", border: "2px solid DarkGrey", top: "-6px", left: "-22px", fontSize: "10px", textAlign: "center", lineHeight: "35px" }} >
        <div style={{ color: "white" }}>
          {complete ? "done" : info}
        </div>
      </div>

    </div>
  )
}

export default ProgressBar