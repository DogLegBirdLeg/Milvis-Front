import React from 'react'
import { Link } from "react-router-dom";

function PCHeader() {

  function NavBar() {
    return (
      <>
        <NavBarList
          content={"열차 환승 시간표"}
          page={"/train"}
        />
        <NavBarList
          content={"길찾기"}
          page={"/map"}
        />
        <NavBarList
          content={"버스 시간표"}
          page={"/bus"}
        />
      </>
    )
  }

  function NavBarList ({content, page}) {
    return (
      <div className='side-bar-li'>
        <Link
          to={page}
          style={{
          textDecoration: "none",
          color: "white"
        }}>
        <span>{content}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className='nav-bar'>
      <NavBar />
    </div>
  )
}

export default PCHeader