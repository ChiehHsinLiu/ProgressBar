import React, { useEffect, useState } from 'react';
import Section from './Section';



const Home = ({ userObjs }) => {

  const [objs, setObjs] = useState(userObjs)
  const [change, setChange] = useState(false)

  console.log('run Home')

  useEffect(() => {
    console.log('Home Effect')
  }, [change])

  return (
    <div className="HomeRender" style={{ padding: "10px 0px" }}>
      {objs.map((obj, index) =>
        <Section key={obj.id} index={index} objs={objs} setObjs={setObjs} change={change} setChange={setChange} />
      )}
    </div>
  )
}

export default Home