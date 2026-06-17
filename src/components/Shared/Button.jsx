import React from 'react'

const Button = ({text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button >
      {text}
    </button>
  )
}

export default Button
