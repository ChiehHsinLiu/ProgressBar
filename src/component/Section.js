import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';


const Section = ({ obj, objs, setObjs, setChange }) => {
  console.log("run Section", obj)

  const [height, setHeight] = useState("20px")

  let title = obj.title
  let content = obj.content
  let info = obj.info
  let former = obj.former
  let complete = obj.complete

  function handleClick() {
    if (!complete) {
      complete = true
      // find current obj by id. change its complete & next object's former (if possible)
      for (let i = 0; i < objs.length; i++) {
        if (obj.id === objs[i].id) {
          let tempObjs = objs
          tempObjs[i].complete = true
          if (i + 1 < objs.length) {
            tempObjs[i + 1].former = true
          }
          setObjs(tempObjs)
          // call setChange() to make Seperate re-rendor
          setChange(function (prev) {
            return !(prev)
          })
          console.log('click', title)
          break
        }
      }
    }
  }


  // calculate div height after rendering everytime, stop when 2 consecutive former is the same
  useEffect(() => {
    console.log('Section, Effect, calculate H')
    let h = document.getElementById(title)
    setHeight((h.offsetHeight + 14).toString() + "px")
  }, [former])

  return (
    <div>
      <div id={title}>
        <ProgressBar title={title} info={info} complete={complete} height={height} />
        <h3 style={{ marginLeft: "40px", whiteSpace: 'pre-wrap' }}> {title} </h3>
        {former && <div>
          <div style={{ marginLeft: "40px", whiteSpace: 'pre-wrap' }}> {content} </div>
          <button onClick={handleClick} style={{ marginLeft: "40px" }}> {complete ? "Finish" : "Continue"} </button>
        </div>}
      </div>
    </div>
  )
}

export default Section