import React, { useEffect, useState } from 'react';
import Section from './Section';

const Home = ({ userObjs }) => {

  console.log('run Home')

  const [objs, setObjs] = useState(userObjs)
  const [change, setChange] = useState(false)
  const [first, setFirst] = useState(true)

  if (first) {
    // only run AddFormer at the first time
    AddFormer()
    setFirst(false)
  }

  // add former property (boolen) to each object in userObjs
  function AddFormer() {
    const tempObjs = objs
    for (let i = 0; i < objs.length; i++) {
      if (i === 0) { tempObjs[0].former = true }
      else {
        tempObjs[i].former = objs[i - 1].complete
      }
    }
    setObjs(tempObjs)
    console.log("Home, AddFormer", objs)
  }

  // use additional variable change (T or F) to monitor change in Section
  // since object changes will not re-render
  useEffect(() => {
    console.log('Home Effect, Change')
  }, [change])

  return (
    <div>
      {objs.map((obj) =>
        <Section key={obj.id} obj={obj} objs={objs} setObjs={setObjs} setChange={setChange} />)}
    </div>
  )
}

export default Home