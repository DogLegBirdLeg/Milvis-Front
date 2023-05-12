import React from 'react'

import Slide from 'components/main/Slide'
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className='slide-container'>
        <Slide delayTime={4000}></Slide>
      </div>
    </>
    
  )
}

export default Main