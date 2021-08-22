import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

const Section = ({ index, objs, progress, setProgress }) => {

  console.log("run Section", index, "progress", progress)

  // if show is T, CSSTransition will be performed
  const [show, setShow] = useState(true)

  let id = objs[index].id
  //let type = objs[index].type
  let name = objs[index].name
  let content = objs[index].content
  let complete = false
  let formerComplete = false

  if (index <= progress) {
    formerComplete = true
    if (index < progress) {
      complete = true
    }
  }

  console.log("Section", index, "progress", progress, "complete", complete, "formerComplete", formerComplete)



  // preProgress store progress in last render
  const preProgress = useRef(-2)
  console.log("index", index, "preProgress.current", preProgress.current)
  // previous contentBlock is just complete
  if ((index === progress) && (preProgress.current === progress - 1)) {
    console.log("conditional preset preProgress to False")
    setShow(false)
    preProgress.current = progress
  }


  function handleClick() {
    if (!complete) {
      // set show to false. In next render, old render will fade out first, then new render fade in.
      setShow(false)

      const returnProgress = progress + 1
      setProgress(returnProgress)

      console.log('!!!Click', name)
    }
  }

  function scrolltoTarget() {
    const t = document.getElementById(id)
    t.scrollIntoView({ behavior: 'smooth' })
  }

  // enter useEffect everytime, if former "show" is T, it won't render again.
  useEffect(() => {
    console.log('   Section', name, 'Effect')
    preProgress.current = progress
    console.log('preProgress.current', preProgress.current)
    setShow(true)
    if (index <= progress) {
      scrolltoTarget()
      console.log('   scroll to', name)
    }
  })


  return (
    <div id={id} className="SectionRender" style={{ margin: "10px 0px" }}>
      <CSSTransition in={show} timeout={2500} classNames="fade" appear={true}>
        <div className="Section">
          <div className="Progress" style={{ width: "7px", height: "100%", backgroundColor: `${complete ? "Fuchsia" : "DarkGrey"}`, borderRadius: "8px", marginLeft: "10px" }}>
            <div className="ball" style={{ content: "", width: "35px", height: "35px", backgroundColor: `${complete ? "Fuchsia" : "DarkGrey"}`, position: "relative", float: "Left", borderRadius: "50%", top: "-11px", left: "-14px", fontSize: "10px", textAlign: "center", lineHeight: "35px" }} >
              <div style={{ color: "white" }}>
                {complete ? "done" : "x"}
              </div>
            </div>
            <div style={{ marginLeft: "40px" }}> Call ContentBlock component here. </div>
            <button className="button" onClick={handleClick} style={{ marginLeft: "40px" }}> {complete ? "Finish" : "Continue"} </button>
          </div>
        </div>
      </CSSTransition>
    </div>

  )
}

export default Section