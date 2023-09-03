import React from 'react'
import "styles/common-components/button.css";

const Button = ({buttonSize, content, type, disable}) => {
  return (
    <button
      className={buttonSize}
      type={type}
      disabled={disable === undefined ? false : disable}
    >
      {content}
    </button>
  )
}

export default Button
