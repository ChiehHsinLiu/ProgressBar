import React, { useEffect, useState } from 'react';
import Section from './Section';



const Home = ({ module, user }) => {

  const objs = module.contentBlocks
  const [progress, setProgress] = useState(user.userCourseData.progress)

  console.log('run Home')

  useEffect(() => {
    console.log('Home Effect')
  }, [progress])

  return (
    <div className="HomeRender" style={{ padding: "10px 0px" }}>
      {objs.map((obj, index) =>
        <Section key={obj.id} index={index} objs={objs} progress={progress} setProgress={setProgress} />
      )}
    </div>
  )
}

export default Home