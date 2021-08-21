import React, { useEffect, useState, useRef } from 'react';
import ProgressBar from './ProgressBar';
import { CSSTransition } from 'react-transition-group';

import './style.css';


const Section = ({ id, obj, objs, setObjs, change, setChange }) => {

  // set this hook. when height is set by setHeight, re-render Section
  const [height, setHeight] = useState(20)


  const [show, setShow] = useState(true)




  console.log("run Section", obj, 'show', show)

  let title = obj.title
  let content = obj.content
  let info = obj.info
  let former = obj.former
  let complete = obj.complete

  function handleClick() {
    if (!complete) {
      setShow(false)

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
    console.log('Section, Effect, calculate H', title)
    let h = document.getElementById(title)
    setHeight(h.offsetHeight + 14)
    setShow(false)

  }, [former, title])

  useEffect(() => {
    console.log('Section, Effect, change', title)
    setShow(true)
  }, [change, title])






  return (
    <div>

      <div id={title}>
        <CSSTransition in={show} timeout={2500} classNames="fade" appear={true}>
          <ProgressBar title={title} info={info} complete={complete} height={height} />
        </CSSTransition>

        <h3 style={{ marginLeft: "40px", whiteSpace: 'pre-wrap' }} > {title} </h3>

        <CSSTransition in={show} timeout={2500} classNames="fade" appear={true}>
          <div>
            {former && <div>
              <div style={{ marginLeft: "40px", whiteSpace: 'pre-wrap' }}> {content} </div>
              <button onClick={handleClick} style={{ marginLeft: "40px" }}> {complete ? "Finish" : "Continue"} </button>
            </div>}
          </div>
        </CSSTransition>
      </div>
    </div>

  )
}

export default Section