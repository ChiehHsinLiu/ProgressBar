// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './component/style.css';



// const Sec = ({ inputList }) => {

//   let show = false

//   return (
//     <div>
//       <div >
//         <div className="PbTrack" style={{ width: "7px", height: "100%", backgroundColor: "DarkGrey", borderRadius: "8px", float: "left", marginLeft: "10px" }}>
//           {/* <div className="PbBar" style={{ width: "100%", height: "50%", backgroundColor: "Fuchsia", borderRadius: "8px", float: "left" }} /> */}

//           <div style={{ marginLeft: "20px" }}>{inputList}</div>
//           <div style={{ marginLeft: "20px" }}>{inputList}</div>
//           <div style={{ marginLeft: "20px" }}>{inputList}</div>
//           <div style={{ marginLeft: "20px" }}>{inputList}</div>
//           {show && <div style={{ marginLeft: "20px" }}>{inputList}</div>}
//         </div>
//       </div>
//     </div >
//   )
// }

// const list = "aaa"

// ReactDOM.render(
//   <Sec inputList={list} />,
//   document.getElementById('root')
// );


// const Print = ({ id, item, change, setChange, list, setList }) => {
//   console.log("run Print", item, list)

//   const [show, setShow] = useState(true)



//   function handleClick() {
//     console.log("Click")
//     const tempList = list
//     tempList[id]++
//     setList(tempList)
//     setChange(function (prev) {
//       return (!prev)
//     })
//     setShow(false)
//   }

//   useEffect(() => {
//     console.log("Effect")
//     setShow(true)
//   }, [change])

//   return (
//     <div>

//       <CSSTransition in={show} timeout={3000} classNames="fade" appear={true}>
//         <div >
//           <div>Item is {item}.</div>
//           <button onClick={handleClick}>button</button>
//         </div>
//       </CSSTransition>

//     </div>
//   )
// }

// const App = ({ inputList }) => {

//   const [change, setChange] = useState(false)
//   const [list, setList] = useState(inputList)

//   console.log("run App", list)



//   return (
//     < div >
//       {list.map((item, index) =>
//         <Print key={index} id={index} item={item} change={change} setChange={setChange}
//           list={list} setList={setList} />
//       )}
//     </div >
//   )
// }

// const list = [1, 3, 5]

// ReactDOM.render(
//   <App inputList={list} />,
//   document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home'

const userObjs = [
  { id: "1", title: "title01", content: "content01", complete: false, info: "10min" },
  { id: "2", title: "title02", content: "content02\n next", complete: false, info: "8min" },
  { id: "3", title: "title03", content: "content03\n\n next", complete: false, info: "15min" }]

ReactDOM.render(
  <div>
    <Home userObjs={userObjs} />
  </div>,
  document.getElementById('root')
);
