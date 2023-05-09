import React from 'react'

import Slide from 'components/main/Slide'
import Footer from 'components/common/Footer';
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className='slide-container'>
        <Slide delayTime={4000}></Slide>
      </div>
      <Footer />
    </>
    
  )
}

export default Main