import React from 'react'
import "./Button.css";

const sizes = ['long-button', 'short-button', 'search-button'];

const Button = ({buttonsize, content, type, disable}) => {
  const buttonSelect = () => {
    if (buttonsize === sizes[0]) {
      return 'long_button';
    }

    else if (buttonsize === sizes[1]) {
      return 'short_button';
    }

    else if (buttonsize === sizes[2]) {
      return 'search_button';
    }
  }

  return (
    <button
      className={buttonSelect()}
      type={type}
      disabled={disable === undefined ? false : disable}
    >
      {content}
    </button>
  )
}

export default Button
