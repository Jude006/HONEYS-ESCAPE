import React from 'react'

const Button = ({bg,color,title}) => {
  return (
    <button className={`${bg} ${color} py-3 px-6 rounded hover:bg-opacity-75 hover:bg-hoverGreen hover:text-secondary  ease-in-out transition duration-300`}>{title}</button>
  )
}

export default Button