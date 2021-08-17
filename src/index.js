import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home'


const userObjs = [
  { id: "1", title: "title01", content: "content01", complete: false, info: "10min" },
  { id: "2", title: "title02", content: "content02\n next", complete: false, info: "8min" },
  { id: "3", title: "title03", content: "content03\n\n next", complete: false, info: "15min" }]

ReactDOM.render(
  <Home userObjs={userObjs} />,
  document.getElementById('root')
);
