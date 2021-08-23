import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

const Section = ({ index, objs, setObjs, change, setChange }) => {


  // if show is T, CSSTransition will be performed
  const [show, setShow] = useState(true)

  let title = objs[index].title
  let content = objs[index].content
  let info = objs[index].info
  // former stores previous obj's complete
  let former = false
  let complete = objs[index].complete

  // preFormer store former in last render. preFormer will be set in useEffect
  const preFormer = useRef(true)


  console.log("run Section", title, "preFormer.current", preFormer.current)


  // set former, first obj is T, other obj is previous obj's complete
  if (index === 0)
    former = true
  else
    former = objs[index - 1].complete

  // if former change from F to T, set show to F (to do fade out) 
  if (!preFormer.current && former) {
    console.log(' show change to F')
    setShow(false)
    preFormer.current = former
  }

  console.log(' show', show, 'former', former, "preFormer.current", preFormer.current)

  function handleClick() {
    if (!complete) {
      // set show to false. In next render, old render will fade out first, then new render fade in.
      setShow(false)

      // change current obj's complete
      let tempObjs = objs
      tempObjs[index].complete = true
      setObjs(tempObjs)

      // call setChange() to make Home rerendor
      setChange(!change)


      console.log('!!!Click', title)
    }
  }

  useEffect(() => {
    console.log('   Section', title, 'Effect')
    preFormer.current = former
    setShow(true)
  })


  return (
    <div className="SectionRender" style={{ margin: "10px 0px" }}>
      <CSSTransition in={show} timeout={2500} classNames="fade" appear={true}>
        <div className="Section">
          <div className="Progress" style={{ backgroundColor: `${complete ? "Fuchsia" : "DarkGrey"}` }}>
            <div className="Ball" style={{ backgroundColor: `${complete ? "Fuchsia" : "DarkGrey"}` }} >
              <div style={{ color: "white" }}>
                {complete ? "done" : info}
              </div>
            </div>
            <div className="TitleAndContent" >
              <div className="Title" style={{ marginLeft: "40px", fontWeight: "bold" }} > {title} </div>
              <div className="ContentAndButton">
                {former && <div>
                  <div style={{ marginLeft: "40px" }}> {content} </div>
                  <button className="button" onClick={handleClick} style={{ marginLeft: "40px" }}> {complete ? "Finish" : "Continue"} </button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>

  )
}

export default Section