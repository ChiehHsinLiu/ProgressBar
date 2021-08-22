import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home'

const Module = {
  id: "01",
  courseId: "course01",
  name: "The course",
  contentBlocks: [
    { id: "id000", moduleId: "01", name: "Name00", type: "TEXT", content: "content00\n next" },
    { id: "id001", moduleId: "01", name: "Name01", type: "TEXT", content: "content01\n next" },
    { id: "id002", moduleId: "01", name: "Name02", type: "TEXT", content: "content02" },
    { id: "id003", moduleId: "01", name: "Name03", type: "TEXT", content: "content03\n next" }]
}

// progress is 2 => assume user AAA has finished first 2 contentBlock of the course
const User = {
  id: "id777",
  name: "AAA",
  userCourseData: { user: "Abbie", progress: 0 }
}

// const userObjs = [
//   { id: "1", title: "title01", content: "next\n next\n next\n next\n next", complete: false, info: "10min" },
//   { id: "2", title: "title02", content: "cnext\n next\n next\n next\n next\n next\n next\n next", complete: false, info: "8min" },
//   { id: "3", title: "title03", content: "content03\n \n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next\n next", complete: false, info: "15min" }]

ReactDOM.render(
  <div>
    <Home module={Module} user={User} />
  </div>,
  document.getElementById('root')
);

