
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home'

const userObjs = [
  { id: "01", title: "title01", content: "content01", info: "10min", complete: true },
  { id: "02", title: "title02", content: "content02", info: "10min", complete: false },
  { id: "03", title: "title03", content: "content03", info: "10min", complete: false }]

ReactDOM.render(
  <div>
    <Home userObjs={userObjs} />
  </div>,
  document.getElementById('root')
);
