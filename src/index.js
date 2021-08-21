// import React from 'react';
// import ReactDOM from 'react-dom';
// import Home from './component/Home'
// import card1 from './component/images/card1.png'
// import card2 from './component/images/card2.jpg'
// import card3 from './component/images/card3.jpg'

// const userObjs = [
//   { id: "1", title: "title01", content: "./images/card1.png", complete: true, info: "10min" },
//   { id: "2", title: "title02", content: "./images/card2.jpg", complete: false, info: "8min" },
//   { id: "3", title: "title03", content: "./images/card3.jpg", complete: false, info: "15min" }]

// ReactDOM.render(
//   <div>
//     <Home userObjs={userObjs} />
//   </div>,
//   document.getElementById('root')
// );


import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = ({ text1, text2 }) => {


  useEffect(() => {
    const a = document.getElementById('text2')
    a.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div>
      <div id="text1" style={{ marginLeft: "40px", whiteSpace: "pre-line" }}> {text1} </div>
      <div id="text2" style={{ marginLeft: "40px", whiteSpace: "pre-line" }}> {text2} </div>
    </div>
  )
}

const text1 = "hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi\n hi"

const text2 = "j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n j\n "

ReactDOM.render(
  <div>
    <App text1={text1} text2={text2} />
  </div>,
  document.getElementById('root')
);
