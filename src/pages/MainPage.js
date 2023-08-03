import React from 'react'

import Slide from 'components/MainPage/Slide'
import "styles/main-page/main-page.css";

const MainPage = () => {
  return (
    <>
      <div className='slide-container'>
        <Slide delayTime={4000}></Slide>
      </div>
    </>
    
  )
}

export default MainPage